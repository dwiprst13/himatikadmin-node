const express = require("express");
const cors = require("cors");
const path = require("path");
const pengurusRoutes = require("./src/routes/PengurusRoutes");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json("pffttt");
});

app.use("/pengurus", pengurusRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log("Server berjalan di port", PORT);
});
