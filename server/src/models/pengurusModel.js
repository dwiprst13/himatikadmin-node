const connection = require("../../database");

const getPengurus = (callback) => {
  const sql = "SELECT * FROM pengurus";
  connection.query(sql, (err, data) => {
    callback(err, data);
  });
};

const tambahPengurus = (newData, callback) => {
  const sql = "INSERT INTO pengurus SET ?";
  connection.query(sql, newData, (err, result) => {
    callback(err, result);
  });
};

const updatePengurus = (id, updatedData, callback) => {
  const sql = "UPDATE pengurus SET ? WHERE id = ?";
  connection.query(sql, [updatedData, id], (err, result) => {
    callback(err, result);
  });
};

const hapusPengurus = (id, callback) => {
  const sql = "DELETE FROM pengurus WHERE id = ?";
  connection.query(sql, id, (err, result) => {
    callback(err, result);
  });
};

module.exports = { getPengurus, tambahPengurus, updatePengurus, hapusPengurus };
