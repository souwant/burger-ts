var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "locolhost",
  user: "root",
  password: "1Eyebear!1",
  database: burger_db
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id:" + connection.threadid);
});

module.exports = connection;
