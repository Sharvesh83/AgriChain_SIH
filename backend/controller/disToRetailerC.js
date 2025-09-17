const RetailerDistribution = require("../models/disMtoRetailer");

// CREATE distribution record
exports.createDistribution = async (req, res) => {
  try {
    const record = new RetailerDistribution(req.body);
    await record.save();
    res.status(201).json({ message: "Retailer distribution created successfully", data: record });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET all distributions
exports.getDistributions = async (req, res) => {
  try {
    const records = await RetailerDistribution.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET distribution by lotId
exports.getDistributionByLot = async (req, res) => {
  try {
    const record = await RetailerDistribution.findOne({ lotId: req.params.lotId });
    if (!record) return res.status(404).json({ error: "Distribution record not found" });
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE distribution record
exports.updateDistribution = async (req, res) => {
  try {
    const updatedRecord = await RetailerDistribution.findOneAndUpdate(
      { lotId: req.params.lotId },
      req.body,
      { new: true }
    );
    if (!updatedRecord) return res.status(404).json({ error: "Distribution record not found" });
    res.json({ message: "Distribution updated successfully", data: updatedRecord });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE distribution record
exports.deleteDistribution = async (req, res) => {
  try {
    const deletedRecord = await RetailerDistribution.findOneAndDelete({ lotId: req.params.lotId });
    if (!deletedRecord) return res.status(404).json({ error: "Distribution record not found" });
    res.json({ message: "Distribution deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
