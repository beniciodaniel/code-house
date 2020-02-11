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
}

module.exports = BookDao;