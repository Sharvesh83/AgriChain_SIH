const RetailerInventory = require("../models/retailerModel");
const DistributorLot = require("../models/distributorLot");
const FarmerBatch = require("../models/farmerModel");

// Decode QR and fetch full supply chain history
exports.decodeQR = async (req, res) => {
  try {
    const { qrData } = req.body;

    if (!qrData) {
      return res.status(400).json({ success: false, error: "QR data is required" });
    }

    let data;
    try {
      data = JSON.parse(qrData);
    } catch (e) {
      return res.status(400).json({ success: false, error: "Invalid QR data format" });
    }

    // Fetch retailer inventory
    const inv = await RetailerInventory.findById(data.inventoryId)
      .populate("retailerId lotId")
      .exec();
    if (!inv) return res.status(404).json({ success: false, error: "Inventory not found" });

    // Fetch distributor lot
    const lot = await DistributorLot.findById(inv.lotId)
      .populate("farmerBatch")
      .exec();
    if (!lot) return res.status(404).json({ success: false, error: "Distributor lot not found" });

    // Fetch farmer batch
    const farmer = await FarmerBatch.findById(lot.farmerBatch).exec();

    res.json({
      success: true,
      history: {
        farmer,
        distributor: lot,
        retailer: inv,
      },
    });
  } catch (err) {
    console.error("Error decoding QR:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};
