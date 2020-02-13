class BookDao {

  constructor(db) {
    this._db = db;
  }

  list() {
    return new Promise((resolve, reject) => {
      this._db.all(
        'SELECT * FROM books', (error, results) => {
          if (error) return reject("Error in listing the Books");

          return resolve(results);
        }
      )
    })
  }

  add(book) {
    return new Promise((resolve, reject) => {
      this._db.run(`
        INSERT INTO BOOKS (
          title,
          price,
          description
        ) values (?,?,?)
        `,
        [
          book.title,
          book.price,
          book.description
        ],
        (error) => {
          if (error) {
            console.log(error);
            return reject('Oops, it couldn´t add!');
          }
        }
      )
    });
  }

  searchById(id) {
    return new Promise((resolve, reject) => {
      this._db.get(
        `
          SELECT * FROM books WHERE id = ?
        `,
        [id],
        (error, book) => {
          if(error){      
            return reject("Oops, where is this book?");
          }
            return resolve(console.log(book));
        }
      );
    })
  }

  update(book) {
    return new Promise((resolve, reject) => {
      this._db.run(
        `
          UPDATE books SET
          title       = ?,
          price       = ?,
          description = ?,
          WHERE id    = ?
        `,
        [
          book.titile,
          book.price,
          book.description,
          book.id
        ],
        error => {
          if (error) {
            return reject("We couldn´t update your book! Sorry.")
          }
          resolve();
        }
      );
    });
  }


  remove(id) {
    return new Promise((resolve, reject) => {
        this._db.get(
            `
                DELETE 
                FROM books
                WHERE id = ?
            `,
            [id],
            (error) => {
                if (error) {
                    return reject('Sorry, we couldn´t delete the book!');
                }
                return resolve();
            }
        );
    });
}

}

module.exports = BookDao;