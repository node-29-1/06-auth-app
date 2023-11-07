const { getAll, create, getOne, remove, update, login } = require('../controllers/user.controllers');
const verifyJWT = require('../utils/verifyJWT');
const express = require('express');

const userRouter = express.Router();

userRouter.route('/')
    .get(verifyJWT, getAll)
    .post(create);

userRouter.route('/login')
    .post(login);

userRouter.route('/:id') // /users/login
    .get(verifyJWT, getOne)
    .delete(remove)
    .put(update);

module.exports = userRouter;