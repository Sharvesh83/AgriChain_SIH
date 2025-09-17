const FarmerBatch = require("../models/farmerModel");


exports.createBatch = async (req, res) => {
  try {
    const batch = new FarmerBatch(req.body);
    await batch.save();
    res.status(201).json({ message: "Batch created successfully", data: batch });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET all batches
exports.getBatches = async (req, res) => {
  try {
    const batches = await FarmerBatch.find();
    res.json(batches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET batch by batchId
exports.getBatchById = async (req, res) => {
  try {
    const batch = await FarmerBatch.findOne({ batchId: req.params.batchId });
    if (!batch) return res.status(404).json({ error: "Batch not found" });
    res.json(batch);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE batch
exports.updateBatch = async (req, res) => {
  try {
    const updatedBatch = await FarmerBatch.findOneAndUpdate(
      { batchId: req.params.batchId },
      req.body,
      { new: true }
    );
    if (!updatedBatch) return res.status(404).json({ error: "Batch not found" });
    res.json({ message: "Batch updated successfully", data: updatedBatch });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE batch
exports.deleteBatch = async (req, res) => {
  try {
    const deletedBatch = await FarmerBatch.findOneAndDelete({ batchId: req.params.batchId });
    if (!deletedBatch) return res.status(404).json({ error: "Batch not found" });
    res.json({ message: "Batch deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
