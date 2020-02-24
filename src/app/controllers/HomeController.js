const templates = require('../views/templates');

class HomeController {

  static routes() {
    return {
      home: '/'
    }
  }

  home() {
    return (req, res) => {
      res.marko(
        templates.base.home
      );
    }
  }
}

module.exports = HomeController;