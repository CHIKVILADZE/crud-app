const { body, validationResult } = require('express-validator');

const createContactValidate = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 3 })
    .withMessage('Name should be at least 3 characters'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format')
    .isLength({ min: 5 })
    .withMessage('Email should be at least 5 characters'),
  body('phone')
    .trim()
    .isMobilePhone()
    .withMessage('Invalid phone number')
    .isLength({ min: 6 })
    .withMessage('Phone number should be at least 6 characters'),
];

module.exports = createContactValidate;
