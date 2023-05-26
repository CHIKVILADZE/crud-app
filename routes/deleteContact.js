const express = require('express');
const mysqlConnection = require('../connect');

const router = express.Router();

// Delete contact
router.delete('/:id', (req, res) => {
  mysqlConnection.query(
    'DELETE FROM records WHERE Id = ?',
    [req.params.id],
    (err, rows, fields) => {
      if (!err) {
        res.send('Delete succeeded');
      } else {
        console.log(err);
        res.status(500).send('Internal Server Error');
      }
    }
  );
});

module.exports = router;
