require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();

app.use('/static', express.static('src/app/public'));

app.use(express.urlencoded({
  extended: true
}));

const routes = require('../app/routes/routes');
routes(app);

module.exports = app;