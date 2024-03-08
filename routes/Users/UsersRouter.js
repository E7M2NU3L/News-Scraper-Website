const express = require('express');
const { LoginCtrl, RegisterCtrl, LogoutCtrl } = require('../../controllers/Users/UsersCtrl');

// router
const UsersRouter = express.Router();

// Routes

// 1. Login Page
UsersRouter.post('/login', LoginCtrl);

// 2. Register Route
UsersRouter.post('/register', RegisterCtrl);

// 3. logout Route
UsersRouter.post('/logout', LogoutCtrl);

// exporting the router
module.exports = UsersRouter;