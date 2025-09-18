const { ethers } = require("ethers");
const contractABI = require("../artifacts/contracts/SupplyChain.sol/SupplyChain.json").abi;

// Local Hardhat node
const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");

// Replace with the deployer’s private key (Hardhat gives you test accounts when you run `npx hardhat node`)
const signer = new ethers.Wallet(
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
  provider
);

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const supplyChainContract = new ethers.Contract(contractAddress, contractABI, signer);

module.exports = supplyChainContract;
