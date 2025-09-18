const mongoose = require("mongoose");

const retailerInventorySchema = new mongoose.Schema({
  retailerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  lotId: { type: mongoose.Schema.Types.ObjectId, ref: "DistributorLot", required: true },
  quantity: { type: Number, required: true },
  pricePerKg: { type: Number, required: true },
  qrCode: { type: String }, // QR image or data URI
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("RetailerInventory", retailerInventorySchema);
