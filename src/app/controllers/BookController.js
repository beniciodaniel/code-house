const { validationResult } = require('express-validator/check');

const BookDao = require('../infra/book-dao');
const db = require('../../config/database');

class BookController {

  static routes() {
    return {
      list: '/books',
      register: '/books/form',
      edit: '/books/form/:id',
      remove: '/books/:id'
    }
  }

  list() {
    return (req, res) => {
      
      const bookDao = new BookDao(db);
      bookDao.list()
        .then(books => res.marko (
            require('../views/books/list/list.marko'), 
            {
              books: books
            }
          )
        )
        .catch(error => console.log(error));
    }
  }

  formCreate() {
    return (req, res) => {
      res.marko(require('../views/books/form/form.marko'), { book: {} });
    }
  }

  formEdit() {
    return function(req, resp) {
      const bookDao = new BookDao(db);
      const id = req.params.id;
      
      bookDao.searchById(id)
          .then(book => 
                resp.marko(
                  require('../views/books/form/form.marko'), 
                  { book: book }
                )
          )
          .catch(error => console.log(error));
    }
  }

  register() {
    return (req, res) => {
      console.log('app.post/books', req.body);
      const bookDao = new BookDao(db);
  
      const errors  = validationResult(req);
  
      if(!errors.isEmpty()) {
        console.log("deu ruim")
        return res.marko(
          require('../views/books/form/form.marko'), 
          {
            book: req.body, //para manter os dados num request fail
            errorsValidation: errors.array()
          }
        );
      }
  
      bookDao.add(req.body)
              .then(res.redirect(BookController.routes().list))
              .catch(error => console.log(error));
    }
  }

  edit() {
    return (req, res) => {
      console.log(req.body);
      const bookDao = new BookDao(db);
      bookDao.update(req.body)
              .then(res.redirect(BookController.routes().list))
              .catch(error => console.log(error));
    }
  }

  remove() {
    return (req, res) => {
      const id = req.params.id;
      const bookDao = new BookDao(db);
      bookDao.remove(id)
              .then(() => res.status(200).end())
              .catch(error => console.log(error));
    }
  }
}

module.exports = BookController;