const DistributorBatch = require("../models/distributorBatch");
const DistributorLot = require("../models/distributorLot");

exports.splitBatch = async (req, res) => {
  try {
    const { distributorBatchId, lots } = req.body;
    // lots = [ { lotId, retailerId, quantity, salePricePerKg } ]

    const batch = await DistributorBatch.findById(distributorBatchId);
    if (!batch) return res.status(404).json({ message: "Batch not found" });

    let totalQty = 0;
    const lotDocs = [];

    for (let lot of lots) {
      totalQty += lot.quantity;
      const newLot = new DistributorLot({
        lotId: lot.lotId,
        distributorBatchId,
        retailerId: lot.retailerId,
        quantity: lot.quantity,
        salePricePerKg: lot.salePricePerKg,
      });
      await newLot.save();
      lotDocs.push(newLot._id);
    }

    if (totalQty > batch.currentRemaining) {
      return res.status(400).json({ message: "Not enough stock to split" });
    }

    batch.currentRemaining -= totalQty;
    batch.lots.push(...lotDocs);
    await batch.save();

    res.status(200).json({ success: true, lots: lotDocs, batch });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
