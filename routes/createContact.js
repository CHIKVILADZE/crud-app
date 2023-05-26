const express = require('express');
const createContactValidate = require('../validations/contactCreateValidation.js');
const mysqlConnection = require('../connect');
const { validationResult } = require('express-validator');
const router = express.Router();

// Create contact
router.post('/contacts', createContactValidate, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;

    mysqlConnection.query(
      `INSERT INTO records (id, name, email, phone) VALUES (UUID(), "${name}", "${email}", "${phone}")`,
      [name, email, phone],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send('Internal Server Error');
        } else {
          res.send('Posted');
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
