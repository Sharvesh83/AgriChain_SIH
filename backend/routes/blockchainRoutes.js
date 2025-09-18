const express = require("express");
const router = express.Router();
const blockchainController = require("../controllers/blockchainController");

router.post("/addBatch", blockchainController.addBatch);
router.get("/getBatch/:batchId", blockchainController.getBatch);

module.exports = router;
