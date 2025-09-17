const RetailerBatch = require("../models/retailerBatchM");

// CREATE retailer batch
exports.createBatch = async (req, res) => {
  try {
    const batch = new RetailerBatch(req.body);
    await batch.save();
    res.status(201).json({ message: "Retailer batch created successfully", data: batch });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET all retailer batches
exports.getBatches = async (req, res) => {
  try {
    const batches = await RetailerBatch.find();
    res.json(batches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET batch by subBatchId
exports.getBatchById = async (req, res) => {
  try {
    const batch = await RetailerBatch.findOne({ subBatchId: req.params.subBatchId });
    if (!batch) return res.status(404).json({ error: "Retailer batch not found" });
    res.json(batch);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE retailer batch
exports.updateBatch = async (req, res) => {
  try {
    const updatedBatch = await RetailerBatch.findOneAndUpdate(
      { subBatchId: req.params.subBatchId },
      req.body,
      { new: true }
    );
    if (!updatedBatch) return res.status(404).json({ error: "Retailer batch not found" });
    res.json({ message: "Retailer batch updated successfully", data: updatedBatch });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE retailer batch
exports.deleteBatch = async (req, res) => {
  try {
    const deletedBatch = await RetailerBatch.findOneAndDelete({ subBatchId: req.params.subBatchId });
    if (!deletedBatch) return res.status(404).json({ error: "Retailer batch not found" });
    res.json({ message: "Retailer batch deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
