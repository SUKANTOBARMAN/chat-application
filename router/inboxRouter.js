// external imports
const express = require('express');
const router = express.Router();

// internal router
const { getInbox } = require("../controller/inboxController")
const  decorateHtmlResponse = require('../middlewires/common/decorateHtmlResponse')
// login page
router.get("/", decorateHtmlResponse('Inbox'), getInbox);

module.exports = router;