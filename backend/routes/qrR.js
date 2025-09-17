const express = require("express");
const router = express.Router();
const qrController = require("../controllers/qrController"); // make sure path is correct

// Route to create stock with QR
router.post("/stock", qrController.createStock);

// Route to resolve QR scan
router.get("/scan/:retailerId/:subBatchId", qrController.getProductByQR);

module.exports = router;
