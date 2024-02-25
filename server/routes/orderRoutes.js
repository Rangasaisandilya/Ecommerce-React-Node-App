const express = require('express');
const { placeNewOrder, getAllOrders } = require('../controllers/orderController');
const authenticateToken = require('../middeware/authenticateToken');
const { orderValidator } = require('../validations/orderValidations');
const router = express.Router();

router.get('/', authenticateToken, getAllOrders)
router.post('/', orderValidator, authenticateToken, placeNewOrder)

module.exports = router;