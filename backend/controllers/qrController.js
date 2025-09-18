const RetailerInventory = require("../models/retailerModel");
const DistributorLot = require("../models/distributorLot"); // assuming you have this
const FarmerBatch = require("../models/farmerModel"); // assuming you have this

exports.decodeQR = async (req, res) => {
  try {
    const { qrData } = req.body; // this is the decoded string from QR

    // Parse QR contents
    const data = JSON.parse(qrData);

    // Fetch full chain history
    const inv = await RetailerInventory.findOne({ _id: data.inventoryId })
      .populate("retailerId lotId")
      .exec();
    if (!inv) return res.status(404).json({ success: false, error: "Inventory not found" });

    const lot = await DistributorLot.findById(inv.lotId).populate('farmerBatch').exec();
    if (!lot) return res.status(404).json({ success: false, error: "Distributor lot not found" });

    const farmer = await FarmerBatch.findById(lot.farmerBatch).exec();

    res.json({
      success: true,
      history: {
        farmer,
        distributor: lot,
        retailer: inv
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
