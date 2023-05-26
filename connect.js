const mysql = require('mysql2');

const mysqlConnection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'giorgi',
  password: 'giorgi123',
  database: 'contacts',
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
