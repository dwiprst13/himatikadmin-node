const connection = require("../../database");
import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;

const getPengurus = (callback) => {
  const sql = "SELECT * FROM pengurus";
  connection.query(sql, (err, data) => {
    callback(err, data);
  });
};

module.exports = { getPengurus, tambahPengurus, updatePengurus, hapusPengurus };
