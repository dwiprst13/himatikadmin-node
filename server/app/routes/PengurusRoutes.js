
const express = require("express");
const router = express.Router();
const pengurusController = require("../controllers/pengurusController");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/fotopengurus/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 },
});

router.get("/", pengurusController.getAllPengurus);
router.post(
  "/tambahpengurus",
  upload.single("foto"),
  pengurusController.tambahPengurus
);
router.get("/detailpengurus/:id", pengurusController.getPengurusById);
// router.get("/editpengurus/:id", pengurusController.getPengurusById);
router.delete("/deletepengurus/:id", pengurusController.deletePengurusById);

module.exports = router;
