const mongoose = require("mongoose");

const FarmerBatchSchema = new mongoose.Schema({
  farmerId: { type: String, required: true },
  batchId: { type: String, required: true, unique: true },
  farmLocation: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  },
  productType: { type: String, required: true },
  variety: { type: String, required: true },
  harvestDate: { type: Date, required: true },
  seedsSownDate: { type: Date, required: true },
  totalWeightKg: { type: Number, required: true },
  qualityGrade: { type: String, required: true },
  basePricePerKg: { type: Number, required: true },
  notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("FarmerBatch", FarmerBatchSchema);
