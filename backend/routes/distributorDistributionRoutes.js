const express = require("express");
const router = express.Router();
const { splitBatch } = require("../controllers/distributorDistributionController");

// POST /api/distributor/split
router.post("/split", splitBatch);

module.exports = router;
