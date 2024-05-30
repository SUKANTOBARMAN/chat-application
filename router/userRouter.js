// external imports
const express = require('express');


// internal router
const { getUsers } = require("../controller/usersController")
const  decorateHtmlResponse  = require('../middlewires/common/decorateHtmlResponse')
const router = express.Router();

// login page
router.get("/",decorateHtmlResponse('User'), getUsers);

module.exports = router;