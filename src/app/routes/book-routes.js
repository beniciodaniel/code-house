const BookController = require('../controllers/BookController');
const bookController = new BookController();

const Book = require('../models/Books');

module.exports = (app) => {
  const booksRoutes = BookController.routes();

  app.get(booksRoutes.list, bookController.list());
  
  app.route(booksRoutes.register)
      .get(bookController.formCreate())
      .post(Book.validations(), bookController.register())
      .put(bookController.edit());
  
  app.get(booksRoutes.edit, bookController.formEdit());

  app.delete(booksRoutes.remove, bookController.remove());

  app.get(booksRoutes.detail, bookController.detail());
}

