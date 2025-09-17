// routes/blockchainRoutes.js
const express = require("express");
const router = express.Router();
const blockchainService = require("../services/blockchainService");
const blockchainController = require("../controllers/blockchainController");

router.post("/records", (req, res) =>
    blockchainController.addRecord(req, res, blockchainService)
);

router.get("/records/:recordId", (req, res) =>
    blockchainController.verifyRecord(req, res, blockchainService)
);

module.exports = router;
