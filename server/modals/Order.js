const mongoose = require('mongoose');
const mongoSchema = mongoose.Schema;


const ordersSchema = new mongoSchema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    items: [
        {
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    tax: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('order', ordersSchema);