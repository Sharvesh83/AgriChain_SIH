const mongoose = require("mongoose");

const FarmerBatchSchema = new mongoose.Schema(
  {
    farmerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    batchId: { type: String, required: true, unique: true }, // e.g. BATCH1001
    cropType: { type: String, required: true },
    variety: { type: String },
    seedSownDate: { type: Date },
    harvestDate: { type: Date },
    totalWeightKg: { type: Number, required: true },
    remainingWeightKg: { type: Number, required: true },
    qualityGrade: { type: String, enum: ["A", "B", "C"], required: true },
    gpsCoordinates: { type: String }, // lat,lng
    farmAddress: { type: String },
    imageCID: { type: String }, // stored in IPFS
    blockchainHash: { type: String }, // tx hash from blockchain
    notes: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FarmerBatch", FarmerBatchSchema);
