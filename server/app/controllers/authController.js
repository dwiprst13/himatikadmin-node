// authController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connection = require("../utils/database");

exports.login = async (req, res) => {
  const { username, password } = req.body;

  connection.query(
    "SELECT * FROM admin WHERE username = ?",
    [username],
    async (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
      }

      if (results.length === 0) {
        return res
          .status(401)
          .json({ message: "Username atau password salah" });
      }

      const user = results[0];

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res
          .status(401)
          .json({ message: "Username atau password salah" });
      }

      const token = jwt.sign(
        { id: user.id_admin, username: user.username, nama: user.nama, nim: user.nim, role: user.role },
        "secret_key",
        { expiresIn: "1h" }
      );

      res.json({ message: "Login berhasil", token });
    }
  );
};

exports.logout = () => {
  localStorage.removeItem("token"); 
  window.location.href = "/himatikadmin/login"; 
};
