
const connection = require("./database"); 
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json("pffttt");
});

app.get("/pengurus", (req, res) => {
  const sql = "SELECT * FROM pengurus";
  connection.query(sql, (err, result) => {
    if (err) res.json({ message: "Server error" });
    return res.json(result);
  });
});

app.get("/pengurus/editpengurus/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM pengurus WHERE id_pengurus = ?";
  connection.query(sql, [id], (err, result) => {
    if (err) res.json({ message: "Server error" });
    return res.json(result[0]);
  });
});

app.listen(8081, () => {
  console.log("nyambung");
});
