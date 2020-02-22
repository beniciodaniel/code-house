const BookDao = require('../infra/book-dao');
const db = require('../../config/database');
const { check } = require('express-validator/check');

const HomeController = require('../controllers/HomeController');
const homeController = new HomeController();

const BookController = require('../controllers/BookController');
const bookController = new BookController();

module.exports = (app) => {

  app.get('/', homeController.home());
  
  
  app.get('/books', bookController.list());
  
  
  app.get('/books/form', bookController.formCreate());
  

  app.get('/books/form/:id', bookController.formEdit());

  
  app.post('/books/form', [
    check('title').isLength({ min: 5 }).withMessage("The field must have at least 5 letters"),
    check('price').isCurrency().withMessage("Must contain numbers!"),
  ], 
    bookController.register()
  )


  app.put('/books/form', bookController.edit());


  app.delete('/books/:id', bookController.remove());


  app.get('/books/:id', (req, res) => {
    const bookDao = new BookDao(db);
    const id = req.params.id;
    bookDao.searchById(id)
      .then(row => res.json(row))
      .catch(error => console.log(error));
  })
}

