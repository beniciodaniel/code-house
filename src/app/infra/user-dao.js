class UserDao {

  constructor(db) {
      this._db = db;
  }

  searchByEmail(email) {
      return new Promise((resolve, reject) => {
          this._db.get(
              `
                  SELECT *
                  FROM users
                  WHERE email = ?
              `,
              [email],
              (error, user) => {
                  if (error) {
                      return reject('We coundn´t find the user, lol');
                  }

                  return resolve(user);
              }
          )
      });
  }
}

module.exports = UserDao;