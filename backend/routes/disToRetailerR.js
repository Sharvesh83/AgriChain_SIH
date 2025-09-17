const express = require("express");
const router = express.Router();
const controller = require("../controllers/disToRetailerC");

// Routes
router.post("/", controller.createDistribution);
router.get("/", controller.getDistributions);
router.get("/:lotId", controller.getDistributionByLot);
router.put("/:lotId", controller.updateDistribution);
router.delete("/:lotId", controller.deleteDistribution);

module.exports = router;
