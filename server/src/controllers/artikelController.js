const connection = require("../../database");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/artikel/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const fileFilter = function (req, file, cb) {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error("Hanya diperbolehkan untuk mengunggah gambar."));
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFilter,
});

exports.getAllArtikel = (req, res) => {
  const sql = "SELECT * FROM artikel";
  connection.query(sql, (err, result) => {
    if (err) res.json({ message: "Server error" });
    return res.json(result);
  });
};

exports.tambahArtikel = (req, res) => {
  console.log(req.body);
  console.log(req.file);

  const { judul, content, tag, status } = req.body;
  const imagepath = req.file.path;

  const sql =
    "INSERT INTO artikel (judul, content, tag, status, img) VALUES (?, ?, ?, ?, ?)";
  connection.query(
    sql,
    [judul, content, tag, status, imagepath],
    (error, results) => {
      if (error) {
        console.error("Error menyimpan artikel:", error);
        return res.status(500).json({ message: "Gagal menyimpan artikel" });
      }
      res
        .status(201)
        .json({ message: "Artikel berhasil ditambahkan", data: results });
    }
  );
};


