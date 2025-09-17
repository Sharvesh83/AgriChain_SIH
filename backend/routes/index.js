const express = require("express");
const router = express.Router();

// Import all route files
const distributorDistributionRoutes = require("./distributorDistributionRoutes");
const distributorReceiveRoutes = require("./distributorReceiveRoutes");
const farmerRoutes = require("./farmerRoutes");
const qrR = require("./qrR");
const retailerRoutes = require("./retailerRoutes");
const userRoutes = require("./userRoutes");

// Mount routes under appropriate paths
router.use("/distributor-distribution", distributorDistributionRoutes);
router.use("/distributor-receive", distributorReceiveRoutes);
router.use("/farmers", farmerRoutes);
router.use("/qr", qrR);
router.use("/retailers", retailerRoutes);
router.use("/users", userRoutes);

module.exports = router;
