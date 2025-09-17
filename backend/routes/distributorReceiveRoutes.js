const express = require("express");
const router = express.Router();
const receiveController = require("../controllers/distributorReceiveController");

router.post("/", receiveController.createReceive);
router.get("/", receiveController.getAllReceives);
router.get("/:id", receiveController.getReceiveById);
router.put("/:id", receiveController.updateReceive);
router.delete("/:id", receiveController.deleteReceive);

module.exports = router;

