const express = require("express");
const router = express.Router();
const farmerController = require("../controllers/FarmerController");

// POST /farmer/batch - create new batch
router.post("/batch", farmerController.createBatch);

// GET /farmer/:farmerId/batches - fetch farmer batches
router.get("/:farmerId/batches", farmerController.getBatches);

module.exports = router;
