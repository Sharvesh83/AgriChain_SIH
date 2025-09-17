const express = require("express");
const router = express.Router();
const farmerController = require("../controllers/FarmerController");

router.post("/batches", farmerController.createBatch);
router.get("/batches", farmerController.getBatches);
router.get("/batches/:batchId", farmerController.getBatchById);
router.put("/batches/:batchId", farmerController.updateBatch);
router.delete("/batches/:batchId", farmerController.deleteBatch);

module.exports = router;
