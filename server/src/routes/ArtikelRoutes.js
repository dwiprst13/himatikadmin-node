const express = require("express");
const router = express.Router();
const artikelController = require("../controllers/artikelController");

router.get("/", artikelController.getAllArtikel);
router.post("/tambahartikel", artikelController.tambahArtikel);

module.exports = router;
