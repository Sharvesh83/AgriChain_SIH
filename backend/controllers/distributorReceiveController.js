const DistributorReceive = require("../models/DistributorReceive");

// Create a receive record
exports.createReceive = async (req, res) => {
  try {
    const receive = new DistributorReceive(req.body);
    await receive.save();
    res.status(201).json(receive);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all receive records
exports.getAllReceives = async (req, res) => {
  try {
    const receives = await DistributorReceive.find();
    res.status(200).json(receives);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single receive record
exports.getReceiveById = async (req, res) => {
  try {
    const receive = await DistributorReceive.findById(req.params.id);
    if (!receive) return res.status(404).json({ error: "Record not found" });
    res.status(200).json(receive);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update receive record
exports.updateReceive = async (req, res) => {
  try {
    const receive = await DistributorReceive.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!receive) return res.status(404).json({ error: "Record not found" });
    res.status(200).json(receive);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete receive record
exports.deleteReceive = async (req, res) => {
  try {
    const receive = await DistributorReceive.findByIdAndDelete(req.params.id);
    if (!receive) return res.status(404).json({ error: "Record not found" });
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
