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
      console.log(id);
      this._db.get(`SELECT * FROM BOOKS WHERE id = ?`,[id],
      (error, row) => {
        if(error){
          console.log(error);
          return reject("Oops, where is this book?");
        }
        if(row){
          return resolve(console.log(row));
        }
      })
    })
  }

}

module.exports = BookDao;