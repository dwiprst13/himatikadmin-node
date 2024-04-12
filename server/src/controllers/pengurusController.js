const connection = require("../../database");

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

exports.deletePengurusById = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM pengurus WHERE id_pengurus = ?";
  connection.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting pengurus:", err);
      return res.status(500).json({ message: "Gagal menghapus pengurus!" }); // More descriptive error message
    }
    return res.json({ message: "Pengurus berhasil dihapus!" }); // Success message
  });
};


