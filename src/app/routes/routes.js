const BookDao = require('../infra/book-dao');
const db = require('../../config/database');
const { check } = require('express-validator/check');

const HomeController = require('../controllers/HomeController');
const homeController = new HomeController();

const BookController = require('../controllers/BookController');
const bookController = new BookController();

module.exports = (app) => {

  const homeRoutes = HomeController.routes();
  const booksRoutes = BookController.routes();

  app.get(homeRoutes.home, homeController.home());
  
  
  app.get(booksRoutes.list, bookController.list());
  
  
  app.get(booksRoutes.register, bookController.formCreate());
  

  app.get(booksRoutes.edit, bookController.formEdit());

  
  app.post(booksRoutes.register, [
    check('title').isLength({ min: 5 }).withMessage("The field must have at least 5 letters"),
    check('price').isCurrency().withMessage("Must contain numbers!"),
  ], 
    bookController.register()
  )


  app.put(booksRoutes.register, bookController.edit());


  app.delete(booksRoutes.remove, bookController.remove());


  app.get(booksRoutes.detail, bookController.detail());
}

