const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const path = require("path");
const pengurusController = require("./src/controllers/pengurusController");
import connection from "./database";

const app = express();
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

app.listen(8081, () => {
  console.log("nyambung");
});
