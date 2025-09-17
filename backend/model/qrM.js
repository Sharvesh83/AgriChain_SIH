const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
  batchId: { type: String, required: true },
  lotId: { type: String, required: true },
  subBatchId: { type: String, required: true },
  productType: { type: String, required: true },
  variety: { type: String },
  availableQuantityKg: { type: Number, required: true },
  sellingPricePerKg: { type: Number, required: true }
});

const RetailerStockSchema = new mongoose.Schema({
  retailerId: { type: String, required: true },
  inventory: [InventorySchema],
  qrGenerated: { type: Boolean, default: false },
  qrLink: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("RetailerStock", RetailerStockSchema);
