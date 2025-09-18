const RetailerInventory = require("../models/retailerModel");
const QRCode = require("qrcode");

// Receive distributor lot and add/update inventory
exports.receiveStock = async (req, res) => {
  try {
    const { retailerId, lotId, quantity, pricePerKg } = req.body;

    // Check if the lot already is in inventory (merge logic)
    let inv = await RetailerInventory.findOne({ retailerId, lotId });
    if (inv) {
      inv.quantity += quantity;
      inv.pricePerKg = pricePerKg; // update if necessary
      await inv.save();
    } else {
      inv = new RetailerInventory({ retailerId, lotId, quantity, pricePerKg });
      await inv.save();
    }
    res.json({ success: true, inventory: inv });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// List inventory for a retailer
exports.listInventory = async (req, res) => {
  try {
    const { retailerId } = req.params;
    const items = await RetailerInventory.find({ retailerId })
      .populate('lotId')
      .exec();
    res.json({ success: true, items });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Generate QR for a product/lot
exports.generateQR = async (req, res) => {
  try {
    const { inventoryId } = req.body;

    const inv = await RetailerInventory.findById(inventoryId)
      .populate("retailerId lotId")
      .exec();

    if (!inv) return res.status(404).json({ success: false, error: "Inventory not found" });

    // Construct chain history to encode
    const qrData = JSON.stringify({
      retailerId: inv.retailerId._id,
      lotId: inv.lotId._id,
      quantity: inv.quantity,
      pricePerKg: inv.pricePerKg
      // add other chain metadata as needed
    });
    const qrImage = await QRCode.toDataURL(qrData);

    inv.qrCode = qrImage;
    await inv.save();

    res.json({ success: true, qrCode: qrImage });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
