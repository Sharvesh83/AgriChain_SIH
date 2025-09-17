const mongoose = require("mongoose");

const RetailerDistributionSchema = new mongoose.Schema({
  distributorId: { type: String, required: true },
  lotId: { type: String, required: true }, // linked to DistributorBatch
  pricePerKg: { type: Number, required: true },
  retailerDistribution: [
    {
      retailerId: { type: String, required: true },
      assignedQuantityKg: { type: Number, required: true }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("RetailerDistribution", RetailerDistributionSchema);
