const express = require('express');

const routes = express.Router();

const { registerUser, loginUser, adminPage } = require('../controllers/AuthController');
const { verifyToken, Admin } = require('../middleware/Auth');


routes.post('/register', registerUser)
routes.post('/login', loginUser)

routes.get('/adminpage', verifyToken, Admin,adminPage);





module.exports = routes;