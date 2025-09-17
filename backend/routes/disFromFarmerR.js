const express = require("express");
const router = express.Router();
const controller = require("../controllers/disFromFarmerC");

// Routes
router.post("/", controller.createBatch);
router.get("/", controller.getBatches);
router.get("/:lotId", controller.getBatchById);
router.put("/:lotId", controller.updateBatch);
router.delete("/:lotId", controller.deleteBatch);

module.exports = router;
