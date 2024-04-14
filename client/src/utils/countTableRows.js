
const connection = require("../../../server/database");

function countTableRows(tableName, callback) {
  connection.query("SELECT COUNT(*) FROM " + tableName, function (err, result) {
    if (err) {
      callback(err);
      return;
    }

    var count = result[0]["COUNT(*)"];
    callback(null, count);
  });
}

countTableRows("admin", function (err, count) {
  if (err) {
    console.error("Terjadi kesalahan:", err);
    return;
  }

  console.log("Jumlah baris di tabel admin:", count);
});

countTableRows("pengurus", function (err, count) {
  if (err) {
    console.error("Terjadi kesalahan:", err);
    return;
  }

  console.log("Jumlah baris di tabel pengurus:", count);
});
