const FarmerBatch = require("../models/farmerModel");
const blockchainService = require("./blockchainService");
const DistributorDistribution = require("../models/DistributorDistribution");
const DistributorReceive = require("../models/DistributorReceive");

// Transfer batch to distributor
exports.transferToDistributor = async (req, res) => {
  try {
    const { batchId, distributorId, commissionPrice, newLocation } = req.body;

    const batch = await FarmerBatch.findById(batchId);
    if (!batch) return res.status(404).json({ message: "Batch not found" });

    batch.currentOwner = distributorId;
    batch.priceHistory.push({ owner: distributorId, price: commissionPrice });
    batch.locationHistory.push(newLocation);

    await batch.save();

    await blockchainService.addRecord({
      batchId: batch._id.toString(),
      currentOwner: distributorId,
      priceHistory: batch.priceHistory,
      locationHistory: batch.locationHistory,
    });

    res.status(200).json({ message: "Batch transferred to distributor", data: batch });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create distribution record
exports.createDistribution = async (req, res) => {
  try {
    const distribution = new DistributorDistribution(req.body);
    await distribution.save();
    res.status(201).json(distribution);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all distributions
exports.getAllDistributions = async (req, res) => {
  try {
    const distributions = await DistributorDistribution.find();
    res.status(200).json(distributions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create receive record
exports.createReceive = async (req, res) => {
  try {
    const receive = new DistributorReceive(req.body);
    await receive.save();
    res.status(201).json(receive);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
