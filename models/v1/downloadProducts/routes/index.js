const fs = require("fs");

const path = require('path');

const _ = require('lodash');

const router = require("express").Router();

const controller = require('../controller/index');

const passport = require("passport");

const isUserLoggedIn = passport.authenticate("authenticate-user", { session: false });

router.get('/categoryInfo', controller.getAllCategory);

router.post('/productList', controller.getProductList);

module.exports = router;
