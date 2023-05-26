const express = require('express');
const mysqlConnection = require('../connect');
const { validationResult } = require('express-validator');
const updateContactValidate = require('../validations/contactUpdateValidation');

const router = express.Router();

// Update  contact
router.put('/contacts/:id', updateContactValidate, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const id = req.params.id;
    const updateFields = {};

    if (req.body.name) {
      updateFields.name = req.body.name;
    }
    if (req.body.email) {
      updateFields.email = req.body.email;
    }
    if (req.body.phone) {
      updateFields.phone = req.body.phone;
    }

    const values = Object.values(updateFields);
    const fieldsToUpdate = Object.keys(updateFields)
      .map((field) => `${field} = ?`)
      .join(', ');

    mysqlConnection.query(
      `UPDATE records SET ${fieldsToUpdate} WHERE id = ?`,
      [...values, id],
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
