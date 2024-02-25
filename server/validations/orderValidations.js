const { check, validationResult } = require("express-validator");



exports.orderValidator = [
    check('items').notEmpty().withMessage('please provide items for order'),
    check('tax').notEmpty().withMessage('please provide taxes for order'),
    check('total').notEmpty().withMessage('please provide total for order'),
    (request, response, next) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        next();
    }

]