// pengurusController.js
const pengurusModel = require("../src/middleware/authMiddleware");

const getPengurus = async (req, res) => {
  pengurusModel.getPengurus((err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

module.exports = { getPengurus, getPengurusById };
