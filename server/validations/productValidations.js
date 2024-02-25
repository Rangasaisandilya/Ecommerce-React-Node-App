const { check, validationResult } = require("express-validator");



const uploadProductValidator =[
    check('name').notEmpty().withMessage('Name is Required'),
    check('brand').notEmpty().withMessage('Brand is Required'),
    check('price').notEmpty().withMessage('Price is Required'),
    check('quantity').notEmpty().withMessage('quantity is Required'),
    check('image').notEmpty().withMessage('Image is Required'),
    check('category').notEmpty().withMessage('Category is Required'),
    check('description').notEmpty().withMessage('Description is Required'),
    check('usage').notEmpty().withMessage('Usage is Required'),
    (request, response, next) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

const uploadProductValidator1 =[
    check('name').notEmpty().withMessage('Name is Required'),
    check('brand').notEmpty().withMessage('Brand is Required'),
    check('price').notEmpty().withMessage('Price is Required'),
    check('quantity').notEmpty().withMessage('Qty is Required'),
    check('image').notEmpty().withMessage('Image is Required'),
    check('category').notEmpty().withMessage('Category is Required'),
    check('description').notEmpty().withMessage('Description is Required'),
    check('usage').notEmpty().withMessage('Usage is Required'),
    (request, response, next) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

module.exports = { uploadProductValidator, uploadProductValidator1 }