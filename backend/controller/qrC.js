const RetailerStock = require("../models/qrM");
const QRCode = require("qrcode");

// CREATE stock record
exports.createStock = async (req, res) => {
  try {
    let stock = new RetailerStock(req.body);

    // Auto-generate QR if not already provided
    if (!stock.qrGenerated) {
      const qrData = `https://agrichain.io/qr/${stock.retailerId}/${stock.inventory[0].batchId}`;
      const qrImage = await QRCode.toDataURL(qrData);

      stock.qrGenerated = true;
      stock.qrLink = qrData;
      // (Optional: save qrImage as Base64 if you want to display inline)
    }

    await stock.save();
    res.status(201).json({ message: "Retailer stock created successfully", data: stock });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET all stocks
exports.getStocks = async (req, res) => {
  try {
    const stocks = await RetailerStock.find();
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET stock by retailerId
exports.getStockByRetailer = async (req, res) => {
  try {
    const stock = await RetailerStock.findOne({ retailerId: req.params.retailerId });
    if (!stock) return res.status(404).json({ error: "Stock not found" });
    res.json(stock);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE stock
exports.updateStock = async (req, res) => {
  try {
    const updatedStock = await RetailerStock.findOneAndUpdate(
      { retailerId: req.params.retailerId },
      req.body,
      { new: true }
    );
    if (!updatedStock) return res.status(404).json({ error: "Stock not found" });
    res.json({ message: "Retailer stock updated successfully", data: updatedStock });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE stock
exports.deleteStock = async (req, res) => {
  try {
    const deletedStock = await RetailerStock.findOneAndDelete({ retailerId: req.params.retailerId });
    if (!deletedStock) return res.status(404).json({ error: "Stock not found" });
    res.json({ message: "Retailer stock deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
