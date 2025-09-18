const FarmerBatch = require("../models/farmerModel");
const ipfs = require("../config/ipfs");
//const BlockchainService = require("../services/blockchainService"); // you must implement

// Create a new batch
exports.createBatch = async (req, res) => {
  try {
    const {
      farmerId,
      batchId,
      cropType,
      variety,
      seedSownDate,
      harvestDate,
      totalWeightKg,
      qualityGrade,
      gpsCoordinates,
      farmAddress,
      notes,
    } = req.body;

    // handle photo (base64 string or file buffer)
    let imageCID = null;
    if (req.file) {
      const { path } = req.file;
      const fileAdded = await ipfs.add(fs.readFileSync(path));
      imageCID = fileAdded.cid.toString();
    } else if (req.body.base64Image) {
      const buffer = Buffer.from(
        req.body.base64Image.replace(/^data:image\/\w+;base64,/, ""),
        "base64"
      );
      const fileAdded = await ipfs.add(buffer);
      imageCID = fileAdded.cid.toString();
    }

    // save to blockchain (example: store CID + batchId)
    const blockchainHash = await BlockchainService.storeBatchOnChain({
      batchId,
      farmerId,
      imageCID,
      cropType,
      qualityGrade,
      gpsCoordinates,
    });

    const newBatch = new FarmerBatch({
      farmerId,
      batchId,
      cropType,
      variety,
      seedSownDate,
      harvestDate,
      totalWeightKg,
      remainingWeightKg: totalWeightKg,
      qualityGrade,
      gpsCoordinates,
      farmAddress,
      imageCID,
      blockchainHash,
      notes,
    });

    await newBatch.save();
    res.status(201).json({ message: "Batch created successfully", data: newBatch });
  } catch (err) {
    console.error("Error creating batch:", err);
    res.status(500).json({ message: "Failed to create batch", error: err.message });
  }
};

// Get all batches for a farmer
exports.getBatches = async (req, res) => {
  try {
    const farmerId = req.params.farmerId;
    const batches = await FarmerBatch.find({ farmerId });
    res.json(batches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
