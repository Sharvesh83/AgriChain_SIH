const express = require("express");
const router = express.Router();
const controller = require("../controllers/qrC");

// Routes
router.post("/", controller.createStock);
router.get("/", controller.getStocks);
router.get("/:retailerId", controller.getStockByRetailer);
router.put("/:retailerId", controller.updateStock);
router.delete("/:retailerId", controller.deleteStock);

module.exports = router;
