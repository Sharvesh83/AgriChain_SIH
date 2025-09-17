const express = require("express");
const router = express.Router();
const controller = require("../controllers/retailerBatchC");

// Routes
router.post("/", controller.createBatch);
router.get("/", controller.getBatches);
router.get("/:subBatchId", controller.getBatchById);
router.put("/:subBatchId", controller.updateBatch);
router.delete("/:subBatchId", controller.deleteBatch);

module.exports = router;
