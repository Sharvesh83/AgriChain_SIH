const mongoose = require("mongoose");

const distributorBatchSchema = new mongoose.Schema({
  distributorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Distributor user
    required: true,
  },
  sourceBatchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FarmerBatch", // Farmer batch reference
    required: true,
  },
  purchaseProof: { type: String }, // IPFS CID / photo proof
  purchaseDate: { type: Date, default: Date.now },
  pricePaidPerKg: { type: Number, required: true },
  quantityPurchased: { type: Number, required: true },
  currentRemaining: { type: Number, required: true },

  operations: {
    pickupDate: { type: Date },
    regradedQuality: { type: String, enum: ["A", "B", "C", "same"], default: "same" },
    weightVerified: { type: Boolean, default: false },
    notes: { type: String },
  },

  lots: [{ type: mongoose.Schema.Types.ObjectId, ref: "DistributorLot" }],
});

module.exports = mongoose.model("DistributorBatch", distributorBatchSchema);
