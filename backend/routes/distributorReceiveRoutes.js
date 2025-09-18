const express = require("express");
const router = express.Router();
const { receiveBatch } = require("../controllers/distributorReceiveController");

// POST /api/distributor/receive
router.post("/receive", receiveBatch);

module.exports = router;
