const express = require('express');

const routes = express.Router();

const { verifyToken } = require('../middleware/Auth');

const { addtodo, viewTodo, deleteTodo, updateTodo } = require('../controllers/TodoController');


routes.post('/addtodo', verifyToken, addtodo)
routes.get('/viewtodo', verifyToken, viewTodo)
routes.delete('/deletetodo', verifyToken, deleteTodo)
routes.put('/updatetodo', verifyToken, updateTodo);

module.exports = routes;