const mongoose = require("mongoose");

const distributorLotSchema = new mongoose.Schema({
  lotId: { type: String, required: true },
  distributorBatchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DistributorBatch",
    required: true,
  },
  retailerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  quantity: { type: Number, required: true },
  salePricePerKg: { type: Number, required: true },
  saleDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("DistributorLot", distributorLotSchema);
