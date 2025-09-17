// CREATE stock record with QR
exports.createStock = async (req, res) => {
  try {
    let stock = new RetailerStock(req.body);

    // Generate QR for each inventory item if not already done
    for (let i = 0; i < stock.inventory.length; i++) {
      const inv = stock.inventory[i];
      if (!inv.qrGenerated) {
        const qrData = `https://agrichain.io/qr/${stock.retailerId}/${inv.subBatchId}`;
        const qrImage = await QRCode.toDataURL(qrData);

        inv.qrGenerated = true;
        inv.qrLink = qrData;
        inv.qrImageBase64 = qrImage; // optional for displaying in app
      }
    }

    await stock.save();
    res.status(201).json({ message: "Retailer stock created successfully", data: stock });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// CUSTOMER-facing API → resolve QR scan
exports.getProductByQR = async (req, res) => {
  try {
    const { retailerId, subBatchId } = req.params;
    const stock = await RetailerStock.findOne(
      { retailerId, "inventory.subBatchId": subBatchId },
      { "inventory.$": 1, retailerId: 1 }
    );

    if (!stock) return res.status(404).json({ error: "Product not found" });

    // For full traceability, you’d also fetch:
    // - FarmerBatch (via stock.inventory[0].batchId)
    // - Distributor lot (via stock.inventory[0].lotId)

    res.json({
      retailerId: stock.retailerId,
      product: stock.inventory[0]
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }a
};
