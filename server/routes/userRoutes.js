const express = require('express');
const { registerUser, loginUser, getUserInfo, updateUserInfo } = require('../controllers/userController');
const { userRegistrationValidator, userLoginValidator, updateAddressValidator } = require('../validations/userValidations');
const authenticateToken = require('../middeware/authenticateToken');
const router = express.Router();


router.post('/register', userRegistrationValidator, registerUser); // regsiter new user
router.post('/login', userLoginValidator, loginUser); // login user
router.get('/', authenticateToken, getUserInfo); // get user info data
router.post('/updateUserInfo', authenticateToken, updateAddressValidator, updateUserInfo); // update user info address





module.exports = router;