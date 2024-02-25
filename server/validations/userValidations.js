const { check, validationResult } = require('express-validator');

const userRegistrationValidator = [
    check('name').notEmpty().withMessage('User Name is Required'),
    check('email').isEmail().withMessage('Enter a proper Email'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    (request, response, next) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        next();
    }
];


const userLoginValidator = [
    check('email').isEmail().withMessage('Enter a proper Email'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    (request, response, next) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ success:false, message:"invalid credentials"});
        }
        next();
    }
];

const updateAddressValidator = [
    check('flat').notEmpty().withMessage('flat is required'),
    check('street').notEmpty().withMessage('Street is required'),
    check('landmark').notEmpty().withMessage('Landmark is required'),
    check('city').notEmpty().withMessage('City is required'),
    check('state').notEmpty().withMessage('State is required'),
    check('pin').notEmpty().withMessage('PinCode is required'),
    check('mobile').notEmpty().withMessage('Mobile is required'),
    (request, response, next) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        next();
    }
]
module.exports = {
    userRegistrationValidator,
    userLoginValidator,
    updateAddressValidator
};
