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
    return (req, res) => {
      //login logic
    }
  }
}

module.exports = HomeController;