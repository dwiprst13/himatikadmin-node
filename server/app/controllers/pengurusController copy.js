const connection = require("../../database");
const multer = require("multer");
const upload = multer({ dest: "../../uploads/fotopengurus/" });

exports.getAllPengurus = (req, res) => {
  const sql = "SELECT * FROM pengurus";
  connection.query(sql, (err, result) => {
    if (err) res.json({ message: "Server error" });
    return res.json(result);
  });
};

exports.getPengurusById = (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM pengurus WHERE id_pengurus = ?";
  connection.query(sql, [id], (err, result) => {
    if (err) res.json({ message: "Server error" });
    return res.json(result[0]);
  });
};

exports.tambahPengurus = (req, res) => {
  const {
    nama,
    nama_panggilan,
    nim,
    divisi,
    posisi,
    ig_link,
    linkedin_link,
    github_link,
  } = req.body;

  const foto = req.file ? req.file.path : null; // Asumsi foto diunggah dan tersimpan di 'uploads/'

  if (!nama || !nim || !divisi || !posisi) {
    return res.status(400).json({ message: "Semua field harus diisi." });
  }

  const sql =
    "INSERT INTO pengurus (nama, nama_panggilan, nim, divisi, posisi, foto, ig_link, linkedin_link, github_link) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

  connection.query(
    sql,
    [
      nama,
      nama_panggilan,
      nim,
      divisi,
      posisi,
      foto,
      ig_link,
      linkedin_link,
      github_link,
    ],
    (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        return res
          .status(500)
          .json({ message: "Server error: " + err.message });
      }
      return res.status(201).json({
        message: "Pengurus berhasil ditambahkan",
        id: result.insertId,
      });
    }
  );
};

exports.deletePengurusById = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM pengurus WHERE id_pengurus = ?";
  connection.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting pengurus:", err);
      return res.status(500).json({ message: "Gagal menghapus pengurus!" });
    }
    return res.json({ message: "Pengurus berhasil dihapus!" });
  });
};

exports.updatePengurusById = (req, res) => {
  const id = req.params.id;
  const sql = "UPDATE FROM pengurus WHERE id_pengurus = ?";
  connection.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error updating pengurus:", err);
      return res.status(500).json({ message: "Gagal memperbarui pengurus!" });
    }
    return res.json({ message: "Pengurus berhasil diperbarui!" });
  });
};
