const uuid = require('uuid/v4');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserDao = require('../app/infra/user-dao');
const db = require('./database');

module.exports = (app) => {
  //configuracao da sessao e da autenticacao
  passport.use(new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    (email, password, done) => {
      const userDao = new UserDao(db);
      userDao.searchByEmail(email)
              .then(user => {
                if (!user || password != user.password) {
                  return done(null, false, {
                    message: 'Login or Password invalid!'
                  });
                }
                return done(null, user);
              })
              .catch(error => done(error, false));
    }
  ));
}