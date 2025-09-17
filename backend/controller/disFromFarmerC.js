const DistributorBatch = require("../models/disMfromFarmer");

// CREATE distributor batch
exports.createBatch = async (req, res) => {
  try {
    const batch = new DistributorBatch(req.body);
    await batch.save();
    res.status(201).json({ message: "Distributor batch created successfully", data: batch });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET all distributor batches
exports.getBatches = async (req, res) => {
  try {
    const batches = await DistributorBatch.find();
    res.json(batches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET batch by lotId
exports.getBatchById = async (req, res) => {
  try {
    const batch = await DistributorBatch.findOne({ lotId: req.params.lotId });
    if (!batch) return res.status(404).json({ error: "Distributor batch not found" });
    res.json(batch);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE distributor batch
exports.updateBatch = async (req, res) => {
  try {
    const updatedBatch = await DistributorBatch.findOneAndUpdate(
      { lotId: req.params.lotId },
      req.body,
      { new: true }
    );
    if (!updatedBatch) return res.status(404).json({ error: "Distributor batch not found" });
    res.json({ message: "Distributor batch updated successfully", data: updatedBatch });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE distributor batch
exports.deleteBatch = async (req, res) => {
  try {
    const deletedBatch = await DistributorBatch.findOneAndDelete({ lotId: req.params.lotId });
    if (!deletedBatch) return res.status(404).json({ error: "Distributor batch not found" });
    res.json({ message: "Distributor batch deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
