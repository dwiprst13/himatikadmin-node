const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/", adminController.getAllAdmin);
router.post("/tambahadmin", adminController.createAdmin);
router.put("/updateadmin/:id", adminController.updateAdminById);
router.get("/getadmin/:id", adminController.getAdminById);
router.delete("/deleteadmin/:id", adminController.deleteAdminById);

module.exports = router;
