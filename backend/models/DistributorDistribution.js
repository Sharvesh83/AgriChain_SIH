const mongoose = require("mongoose");

const DistributorDistributionSchema = new mongoose.Schema({
  distributorId: { type: String, required: true },
  batchId: { type: String, required: true },   // Farmer batchId for traceability
  lotId: { type: String, required: true },  
  pricePerKg: { type: Number, required: true },
  retailerDistribution: [
    {
      retailerId: { type: String, required: true },
      assignedQuantityKg: { type: Number, required: true }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("DistributorDistribution", DistributorDistributionSchema);
