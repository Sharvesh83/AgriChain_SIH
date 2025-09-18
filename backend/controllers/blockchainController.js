const { ethers } = require("ethers");
const ipfs = require("../config/ipfs");

const contractABI = require("../../artifacts/contracts/SupplyChain.sol/SupplyChain.json").abi;
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// connect to Hardhat local blockchain
const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, contractABI, signer);

exports.addBatch = async (req, res) => {
  try {
    const { batchId, fileBuffer } = req.body;

    // Upload file to IPFS
    const added = await ipfs.add(fileBuffer);
    const ipfsHash = added.path;

    // Store on blockchain
    const tx = await contract.addBatch(batchId, ipfsHash);
    await tx.wait();

    res.status(200).json({ success: true, batchId, ipfsHash });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add batch" });
  }
};

exports.getBatch = async (req, res) => {
  try {
    const { batchId } = req.params;
    const batch = await contract.getBatch(batchId);

    res.status(200).json({
      batchId: batch[0],
      ipfsHash: batch[1],
      owner: batch[2],
      ipfsUrl: `https://ipfs.io/ipfs/${batch[1]}`
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get batch" });
  }
};
