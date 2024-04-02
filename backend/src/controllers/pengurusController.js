// pengurusController.js
const pengurusModel = require("../models/pengurusModel");

const getPengurus = (req, res) => {
  pengurusModel.getPengurus((err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

module.exports = { getPengurus };
