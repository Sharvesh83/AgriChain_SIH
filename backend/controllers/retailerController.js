const RetailerBatch = require("../models/retailerModel");

// Create new retailer batch
exports.createRetailerBatch = async (req, res) => {
  try {
    const batch = new RetailerBatch(req.body);
    const savedBatch = await batch.save();
    res.status(201).json(savedBatch);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all retailer batches
exports.getAllRetailerBatches = async (req, res) => {
  try {
    const batches = await RetailerBatch.find();
    res.status(200).json(batches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific batch by subBatchId
exports.getRetailerBatchById = async (req, res) => {
  try {
    const batch = await RetailerBatch.findOne({ subBatchId: req.params.subBatchId });
    if (!batch) return res.status(404).json({ error: "Batch not found" });
    res.status(200).json(batch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update batch by subBatchId
exports.updateRetailerBatch = async (req, res) => {
  try {
    const updatedBatch = await RetailerBatch.findOneAndUpdate(
      { subBatchId: req.params.subBatchId },
      req.body,
      { new: true }
    );
    if (!updatedBatch) return res.status(404).json({ error: "Batch not found" });
    res.status(200).json(updatedBatch);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete batch by subBatchId
exports.deleteRetailerBatch = async (req, res) => {
  try {
    const deletedBatch = await RetailerBatch.findOneAndDelete({ subBatchId: req.params.subBatchId });
    if (!deletedBatch) return res.status(404).json({ error: "Batch not found" });
    res.status(200).json({ message: "Batch deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
