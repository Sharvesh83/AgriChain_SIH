const express = require("express");
const router = express.Router();
const distributionController = require("../controllers/distributorDistributionController");

router.post("/", distributionController.createDistribution);
router.get("/", distributionController.getAllDistributions);
router.get("/:id", distributionController.getDistributionById);
router.put("/:id", distributionController.updateDistribution);
router.delete("/:id", distributionController.deleteDistribution);

module.exports = router;

