const express = require("express");
const cors = require("cors");
const path = require("path");
const pengurusRoutes = require("./app/routes/PengurusRoutes");
const adminRoutes = require("./app/routes/AdminRoutes");
const artikelRoutes = require("./app/routes/ArtikelRoutes");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/images", express.static("images"));

app.get("/", (req, res) => {
  return res.json("pffttt");
});

app.use(cookieParser());
app.use("/pengurus", pengurusRoutes);
app.use("/admin", adminRoutes);
app.use("/artikel", artikelRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log("Server berjalan di port", PORT);
});
