const express = require('express');
const route = express.Router();
const userAppController = require('../controller/userAppController');
route.get('/users', userAppController.getUsers);
route.post('/users', userAppController.createUser);
route.get('/users/:id', userAppController.getUserById);

route.patch('/users/:id', userAppController.updateUsersById);

route.delete('/users/:id', userAppController.deleteUser);
module.exports = route;