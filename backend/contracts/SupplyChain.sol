// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplyChain {
    struct Batch {
        string batchId;
        string ipfsHash;
        address owner;
    }

    mapping(string => Batch) public batches;

    event BatchAdded(string batchId, string ipfsHash, address owner);

    function addBatch(string memory _batchId, string memory _ipfsHash) public {
        require(bytes(batches[_batchId].batchId).length == 0, "Batch already exists");
        batches[_batchId] = Batch(_batchId, _ipfsHash, msg.sender);
        emit BatchAdded(_batchId, _ipfsHash, msg.sender);
    }

    function getBatch(string memory _batchId) public view returns (string memory, string memory, address) {
        Batch memory batch = batches[_batchId];
        require(bytes(batch.batchId).length > 0, "Batch does not exist");
        return (batch.batchId, batch.ipfsHash, batch.owner);
    }
}
