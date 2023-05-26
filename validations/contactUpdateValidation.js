const { body, validationResult } = require('express-validator');

const updateContactValidate = [
  body('name').trim(),

  body('email').trim(),

  body('phone').trim(),
];

module.exports = updateContactValidate;
