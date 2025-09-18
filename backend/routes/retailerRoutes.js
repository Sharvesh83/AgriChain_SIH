const express = require("express");
const retailerController = require("../controllers/retailerController");
const router = express.Router();

router.post("/inventory", retailerController.receiveStock); // Add/Update inventory
router.get("/inventory/:retailerId", retailerController.listInventory); // Get all inventory
router.post("/inventory/generateQR", retailerController.generateQR); // Generate QR for inventory

module.exports = router;
