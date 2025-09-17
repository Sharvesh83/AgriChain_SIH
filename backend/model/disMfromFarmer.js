const mongoose = require("mongoose");

const DistributorBatchSchema = new mongoose.Schema({
  distributorId: { type: String, required: true },
  purchasedBatchId: { type: String, required: true }, // link to Farmer batch
  lotId: { type: String, required: true, unique: true },
  quantityPurchasedKg: { type: Number, required: true },
  purchasePricePerKg: { type: Number, required: true },
  purchaseDate: { type: Date, required: true },
  pickupDateTime: { type: Date, required: true },
  regradedQuality: { type: String },
  weightCheckVerifiedKg: { type: Number },
  handlingNotes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("DistributorBatch", DistributorBatchSchema);
