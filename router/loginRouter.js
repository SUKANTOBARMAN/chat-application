// external imports
const express = require('express');


// internal router
const { getLogin } = require("../controller/loginController")
const  decorateHtmlResponse  = require('../middlewires/common/decorateHtmlResponse')
const router = express.Router();

// login page
router.get("/", decorateHtmlResponse('Login'), getLogin);

module.exports = router;