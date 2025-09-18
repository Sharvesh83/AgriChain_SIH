const express = require("express");
const qrController = require("../controllers/qrController");
const router = express.Router();

router.post("/decode", qrController.decodeQR);

module.exports = router;
