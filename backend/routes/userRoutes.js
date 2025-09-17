const express = require("express");
const router = express.Router();
const controller = require("../controllers/farmerC");

// Routes
router.post("/", controller.createBatch);
router.get("/", controller.getBatches);
router.get("/:batchId", controller.getBatchById);
router.put("/:batchId", controller.updateBatch);
router.delete("/:batchId", controller.deleteBatch);

module.exports = router;
