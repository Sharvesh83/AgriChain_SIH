const express = require("express");
const router = express.Router();
const retailerBatchController = require("../controllers/retailerController");

// Create batch
router.post("/batches", retailerBatchController.createRetailerBatch);

// Get all batches
router.get("/batches", retailerBatchController.getAllRetailerBatches);

// Get batch by subBatchId
router.get("/batches/:subBatchId", retailerBatchController.getRetailerBatchById);

// Update batch by subBatchId
router.put("/batches/:subBatchId", retailerBatchController.updateRetailerBatch);

// Delete batch by subBatchId
router.delete("/batches/:subBatchId", retailerBatchController.deleteRetailerBatch);

module.exports = router;
