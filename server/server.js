const express = require("express");
const cors = require("cors");
const pengurusController = require("./src/controllers/pengurusController");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  return res.json("From BackEnd Side");
});

app.get("/pengurus", pengurusController.getPengurus);

app.listen(8081, () => {
  console.log("listening, nyambung cokkk");
});
