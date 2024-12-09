const express = require('express');

const routes = express.Router();

routes.use('/', require('./authRoute'));
routes.use('/todo', require('./todoRoute'));

module.exports = routes;