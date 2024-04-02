// pengurusModel.js
const connection = require("../../database");

const getPengurus = (callback) => {
  const sql = "SELECT * FROM pengurus";
  connection.query(sql, (err, data) => {
    callback(err, data);
  });
};

module.exports = { getPengurus };
