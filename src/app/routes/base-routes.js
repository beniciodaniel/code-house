const HomeController = require('../controllers/HomeController');
const homeController = new HomeController();

module.exports = (app) => {
  const homeRoutes = HomeController.routes();

  app.get(homeRoutes.home, homeController.home());

}

