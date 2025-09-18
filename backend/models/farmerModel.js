const mongoose = require("mongoose");

const FarmerBatchSchema = new mongoose.Schema(
  {
    farmerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    batchId: { type: String, required: true, unique: true },
    cropType: { type: String, required: true },
    variety: { type: String },
    seedSownDate: { type: Date },
    harvestDate: { type: Date },
    totalWeightKg: { type: Number, required: true },
    remainingWeightKg: { type: Number, required: true },
    qualityGrade: { type: String, enum: ["A", "B", "C"], required: true },
    gpsCoordinates: {
      lat: { type: Number },
      lng: { type: Number },
    },
    farmAddress: { type: String },
    imageCID: { type: String },
    metadataCID: { type: String }, // optional IPFS metadata
    blockchainHash: { type: String },
    distributorLots: [{ type: mongoose.Schema.Types.ObjectId, ref: "DistributorLot" }],
    notes: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FarmerBatch", FarmerBatchSchema);
