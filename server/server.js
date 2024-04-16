const express = require("express");
const cors = require("cors");
const path = require("path");
const pengurusRoutes = require("./app/routes/pengurusRoutes");
const authRoutes = require("./app/routes/authRoutes");
const adminRoutes = require("./app/routes/AdminRoutes");
const artikelRoutes = require("./app/routes/artikelRoutes");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(
  "/public/uploads",
  express.static(path.join(__dirname, "public/uploads"))
);

app.get("/", (req, res) => {
  return res.json("pffttt");
});

app.use(cookieParser());
app.use("/auth", authRoutes);
app.use("/pengurus", pengurusRoutes);
app.use("/admin", adminRoutes);
app.use("/artikel", artikelRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log("Server berjalan di port", PORT);
});
