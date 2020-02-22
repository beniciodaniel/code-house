class HomeController {

  static routes() {
    return {
      home: '/'
    }
  }

  home() {
    return (req, res) => {
      res.marko(
        require('../views/base/home/home.marko')
      );
    }
  }
}

module.exports = HomeController;