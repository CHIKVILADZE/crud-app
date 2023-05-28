const mysql = require('mysql2');
require('dotenv').config({ path: __dirname + '/.env' });

const mysqlConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
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

module.exports = mysqlConnection;
