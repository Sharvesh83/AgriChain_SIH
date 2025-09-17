const mongoose = require("mongoose");

const RetailerBatchSchema = new mongoose.Schema({
  retailerId: { type: String, required: true },
  receivedBatchId: { type: String, required: true }, // Original Farmer batchId
  lotId: { type: String, required: true },           // Distributor lotId
  subBatchId: { type: String, required: true, unique: true },
  quantity: { type: Number, required: true },
  pricePerUnit: { type: Number, required: true },
  qualityCheck: { type: String },
  handlingNotes: { type: String },
  receivedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("RetailerBatch", RetailerBatchSchema);
