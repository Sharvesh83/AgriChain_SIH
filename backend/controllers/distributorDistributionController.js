const DistributorDistribution = require("../models/DistributorDistribution");

// Create distribution
exports.createDistribution = async (req, res) => {
  try {
    const distribution = new DistributorDistribution(req.body);
    await distribution.save();
    res.status(201).json(distribution);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all distributions
exports.getAllDistributions = async (req, res) => {
  try {
    const distributions = await DistributorDistribution.find();
    res.status(200).json(distributions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single distribution
exports.getDistributionById = async (req, res) => {
  try {
    const distribution = await DistributorDistribution.findById(req.params.id);
    if (!distribution) return res.status(404).json({ error: "Record not found" });
    res.status(200).json(distribution);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update distribution
exports.updateDistribution = async (req, res) => {
  try {
    const distribution = await DistributorDistribution.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!distribution) return res.status(404).json({ error: "Record not found" });
    res.status(200).json(distribution);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete distribution
exports.deleteDistribution = async (req, res) => {
  try {
    const distribution = await DistributorDistribution.findByIdAndDelete(req.params.id);
    if (!distribution) return res.status(404).json({ error: "Record not found" });
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
