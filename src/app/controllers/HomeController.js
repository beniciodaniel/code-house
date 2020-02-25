const BookController = require('./BookController');

const templates = require('../views/templates');


class HomeController {

  static routes() {
    return {
      home: '/',
      login: '/login'
    }
  }

  home() {
    return (req, res) => {
      res.marko(
        templates.base.home
      );
    }
  }

  login() {
    return (req, res) => {
      res.marko(
        templates.base.login
      );
    }
  }

  doesLogin() {
    return (req, res, next) => {
      //login logic
      const passport = req.passport;
      
      passport.authenticate('local', (error, user, info) => {
        if (info) {
          return res.marko(templates.base.login);
        }

        if (error) {
          return next(error);
        }

        req.login(user, (error) => {
          if (error) {
            return next(error);
          }

          return res.redirect(BookController.routes().list)
        });
      })(req, res, next);
    }
  }
}

module.exports = HomeController;