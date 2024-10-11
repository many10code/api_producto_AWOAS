const express = require('express');
const UserController = require('../controllers/userController');

const route = express.Router();
route.get('/users', UserController.getAllUsers);
route.post('/users',UserController.createUser);
route.get('/users/:id',UserController.getUserById);
route.put('/users/:id',UserController.updateUser);
route.delete('/users/:id',UserController.deleteUser);

module.exports = route;