// external imports
const express = require('express');
const { check } = require("express-validator");

// internal router
const { getUsers, addUser,removeUser } = require("../controller/usersController")
const  decorateHtmlResponse  = require('../middlewires/common/decorateHtmlResponse');
const avatarUpload = require('../middlewires/users/avatarUpload');
const { addUserValidators , addUserValidationHandler} = require('../middlewires/users/userValidator');


const router = express.Router();

// login page
router.get("/",decorateHtmlResponse('Users'), getUsers);

// add user
router.post(
    "/", 
    avatarUpload, 
    addUserValidators,
    addUserValidationHandler,
    addUser
);

// remove user

router.delete("/:id", removeUser);

module.exports = router;