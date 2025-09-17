const mongoose = require("mongoose");

const DistributorReceiveSchema = new mongoose.Schema({
  distributorId: { type: String, required: true },
  purchasedBatchId: { type: String, required: true },  // Farmer batchId
  lotId: { type: String, required: true, unique: true },
  quantityPurchasedKg: { type: Number, required: true },
  purchasePricePerKg: { type: Number, required: true },
  purchaseDate: { type: Date, required: true },
  pickupDateTime: { type: Date },
  regradedQuality: { type: String },
  weightCheckVerifiedKg: { type: Number },
  handlingNotes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("DistributorReceive", DistributorReceiveSchema);
