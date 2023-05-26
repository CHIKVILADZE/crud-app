const express = require('express');
const mysqlConnection = require('../connect');

const router = express.Router();

// Update  contact
router.put('/contacts/:id', async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;

    mysqlConnection.query(
      'UPDATE records SET name = ?, email = ?, phone = ? ',
      [name, email, phone],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send('Internal Server Error');
        } else {
          res.send('Updated');
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;