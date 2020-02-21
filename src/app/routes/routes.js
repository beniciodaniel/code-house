const BookDao = require('../infra/book-dao');
const db = require('../../config/database');
const { check, validationResult } = require('express-validator/check');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.marko(
      require('../views/base/home/home.marko')
    );
  });
  

  app.get('/books', (req, res) => {
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
  })


  app.get('/books/form', (req, res) => {
    res.marko(require('../views/books/form/form.marko'), { book: {} });
  })


  app.post('/books', [
    check('title').isLength({ min: 5 }).withMessage("The field must have at least 5 letters"),
    check('price').isCurrency().withMessage("Must contain numbers!"),
  ],(req, res) => {
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
            .then(res.redirect('/books'))
            .catch(error => console.log(error));
  })


  app.put('/books', (req, res) => {
    console.log(req.body);
    const bookDao = new BookDao(db);
    bookDao.update(req.body)
            .then(res.redirect('/books'))
            .catch(error => console.log(error));
  })


  app.get('/books/:id', (req, res) => {
    const bookDao = new BookDao(db);
    const id = req.params.id;
    bookDao.searchById(id)
      .then(row => res.json(row))
      .catch(error => console.log(error));
  })


  app.get('/books/form/:id', function(req, resp) {
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
});


  app.delete('/books/:id', (req, res) => {
    const id = req.params.id;
    const bookDao = new BookDao(db);
    bookDao.remove(id)
            .then(() => res.status(200).end())
            .catch(error => console.log(error));
  });
}

