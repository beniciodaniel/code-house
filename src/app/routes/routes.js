const BookDao = require('../infra/book-dao');
const db = require('../../config/database');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send(
        `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Code House </h1>
            </body>     
        </html>
        `
    )
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
    res.marko(require('../views/books/form/form.marko'));
  })

  app.post('/books', (req, res) => {
    console.log(req.body);
    const bookDao = new BookDao(db);

    bookDao.add(req.body)
      .then()
      .catch(error => console.log(error));
  })
};

