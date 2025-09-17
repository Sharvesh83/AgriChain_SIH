const Web3 = require('web3');
const { abi, evm } = require('../artifacts/YourSmartContract.json'); // Replace with your smart contract's ABI and bytecode

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.BLOCKCHAIN_RPC_URL));

const contractAddress = process.env.CONTRACT_ADDRESS;
const contract = new web3.eth.Contract(abi, contractAddress);

async function saveRecord(data) {
    const accounts = await web3.eth.getAccounts();
    const result = await contract.methods.saveRecord(data).send({ from: accounts[0] });
    return result;
}

async function verifyRecord(recordId) {
    const record = await contract.methods.verifyRecord(recordId).call();
    return record;
}

module.exports = {
    saveRecord,
    verifyRecord,
};