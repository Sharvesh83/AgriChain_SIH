const mongoose = require("mongoose");

const RetailerBatchSchema = new mongoose.Schema({
  retailerId: { type: String, required: true },
  receivedBatchId: { type: String, required: true }, // Original Farmer batchId
  lotId: { type: String, required: true },           // Distributor lotId
  subBatchId: { type: String, required: true, unique: true }, // Unique for each retailer
  quantityPurchasedKg: { type: Number, required: true },
  purchasePricePerKg: { type: Number, required: true },
  purchaseDate: { type: Date, required: true },
  pickupDateTime: { type: Date, required: true },
  regradedQuality: { type: String },
  weightCheckVerifiedKg: { type: Number },
  handlingNotes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("RetailerBatch", RetailerBatchSchema);
