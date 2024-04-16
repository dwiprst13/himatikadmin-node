const connection = require("../../database");
const multer = require("multer");
const path = require("path");

const getCurrentDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

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
  const date = getCurrentDate();

  const sql =
    "INSERT INTO artikel (judul, content, tag, status, img, date) VALUES (?, ?, ?, ?, ?, ?)";
  connection.query(
    sql,
    [judul, content, tag, status, imagepath, date], 
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
