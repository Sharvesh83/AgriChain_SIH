// controllers/blockchainController.js

const addRecord = async (req, res, blockchainService) => {
    try {
        const recordData = req.body;
        const result = await blockchainService.addRecord(recordData);
        res.status(201).json({ message: "Record added successfully", data: result });
    } catch (error) {
        res.status(500).json({ message: "Error adding record", error: error.message });
    }
};

const verifyRecord = async (req, res, blockchainService) => {
    try {
        const { recordId } = req.params;
        const result = await blockchainService.verifyRecord(recordId);
        if (result) {
            res.status(200).json({ message: "Record verified successfully", data: result });
        } else {
            res.status(404).json({ message: "Record not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error verifying record", error: error.message });
    }
};

module.exports = {
    addRecord,
    verifyRecord,
};
