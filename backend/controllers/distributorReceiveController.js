const DistributorBatch = require("../models/distributorBatch");

exports.receiveBatch = async (req, res) => {
  try {
    const {
      sourceBatchId,
      distributorId,
      quantityPurchased,
      pricePaidPerKg,
      purchaseDate,
      purchaseProof, // IPFS hash
    } = req.body;

    const newBatch = new DistributorBatch({
      distributorId,
      sourceBatchId,
      purchaseProof,
      purchaseDate,
      pricePaidPerKg,
      quantityPurchased,
      currentRemaining: quantityPurchased,
    });

    await newBatch.save();
    res.status(201).json({ success: true, batch: newBatch });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
