const express = require('express');
const router = express.Router();
const mysqlConnection = require('../connect');

// Get all contacts
router.get('/contacts', async (req, res) => {
  try {
    mysqlConnection.query('SELECT * FROM records', (err, rows) => {
      if (err) {
        console.log(err);
        throw err;
      } else {
        res.send(rows);
        return rows;
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

// Get contact

router.get('/contacts/:id', (req, res) => {
  const id = req.params.id;

  mysqlConnection.query(
    'SELECT * FROM records WHERE id = ?',
    [id],
    (err, rows, fields) => {
      if (!err) {
        if (rows.length > 0) {
          res.send(rows[0]);
        } else {
          res.status(404).send('Contact not found');
        }
      } else {
        console.log(err);
        res.status(500).send('Internal Server Error');
      }
    }
  );
});

module.exports = router;
