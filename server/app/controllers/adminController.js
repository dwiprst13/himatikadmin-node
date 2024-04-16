const connection = require("../../database");
const bcrypt = require("bcrypt");

exports.getAllAdmin = (req, res) => {
  const sql = "SELECT * FROM admin";
  connection.query(sql, (err, result) => {
    if (err) res.json({ message: "Server error" });
    return res.json(result);
  });
};

exports.getAdminById = (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM admin WHERE id_admin = ?";
  connection.query(sql, [id], (err, result) => {
    if (err) res.json({ message: "Server error" });
    return res.json(result[0]);
  });
};

exports.createAdmin = (req, res) => {
  const { name, email, nim, password, role } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const sql = `INSERT INTO admin (nama, email, nim, password, role) VALUES (?, ?, ?, ?, ?)`;

  connection.query(
    sql,
    [name, email, nim, hashedPassword, role],
    (err, result) => {
      if (err) {
        console.error("Error creating admin:", err);
        return res.status(500).json({ message: "Error creating admin!" });
      }

      return res.json({ message: "Admin created successfully!" });
    }
  );
};

exports.updateAdminById = async (req, res) => {
  const id = req.params.id;
  const { name, email, nim, role, password } = req.body;

  try {
    let hashedPassword;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }
    let sql = `UPDATE admin SET nama = ?, email = ?, nim = ?, role = ?`;
    let placeholders = [name, email, nim, role];
    if (password) {
      sql += ", password = ?";
      placeholders.push(hashedPassword);
    }
    sql += " WHERE id_admin = ?";
    placeholders.push(id);
    connection.query(sql, placeholders, (err, result) => {
      if (err) {
        console.error("Error updating admin:", err);
        return res.status(500).json({ message: "Error updating admin!" });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Admin not found!" });
      }
      return res.json({ message: "Admin updated successfully!" });
    });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteAdminById = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM admin WHERE id_admin = ?";
  connection.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting admin:", err);
      return res.status(500).json({ message: "Gagal menghapus admin!" });
    }
    return res.json({ message: "Admin berhasil dihapus!" });
  });
};
