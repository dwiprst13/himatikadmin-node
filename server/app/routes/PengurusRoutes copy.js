const express = require("express");
const router = express.Router();
const pengurusController = require("../controllers/pengurusController");

router.get("/", pengurusController.getAllPengurus);
router.post("/tambahpengurus", pengurusController.tambahPengurus);
router.get("/editpengurus/:id", pengurusController.getPengurusById);
router.delete("/deletepengurus/:id", pengurusController.deletePengurusById);

module.exports = router;
