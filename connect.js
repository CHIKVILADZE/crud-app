const mysql = require('mysql2');

require('dotenv').config();
const mysqlConnection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log('DB connected succeeded');
  } else {
    console.log(
      'DB connection failed\nError: ' + JSON.stringify(err, undefined, 2)
    );
  }
});

mysqlConnection.end();

module.exports = mysqlConnection;
