const { check } = require('express-validator/check');

class Book {
  static validations() {
    return [
      check('title').isLength({ min: 5 }).withMessage("The field must have at least 5 letters"),
      check('price').isCurrency().withMessage("Must contain numbers!"),
    ]
  }
}

module.exports = Book;