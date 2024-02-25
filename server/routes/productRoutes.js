const express = require('express');
const { uploadProduct, getMensData, getWomensData, getKidsData, getSingleProduct } = require('../controllers/productController');
const authenticateToken = require('../middeware/authenticateToken');
const { uploadProductValidator } = require('../validations/productValidations');
const router = express.Router();


router.post('/upload', authenticateToken, uploadProductValidator, uploadProduct);
router.get("/men", getMensData);
router.get('/women', getWomensData);
router.get('/kids', getKidsData)
router.get('/:id', getSingleProduct);


module.exports = router;