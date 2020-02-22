
const HomeController = require('../controllers/HomeController');
const homeController = new HomeController();

const BookController = require('../controllers/BookController');
const bookController = new BookController();

const Book = require('../models/Books');

module.exports = (app) => {
  const homeRoutes = HomeController.routes();
  const booksRoutes = BookController.routes();

  app.get(homeRoutes.home, homeController.home());
  
  app.get(booksRoutes.list, bookController.list());
  
  app.get(booksRoutes.register, bookController.formCreate());
  
  app.get(booksRoutes.edit, bookController.formEdit());

  app.post(booksRoutes.register, Book.validations(), bookController.register());

  app.put(booksRoutes.register, bookController.edit());

  app.delete(booksRoutes.remove, bookController.remove());

  app.get(booksRoutes.detail, bookController.detail());
}

