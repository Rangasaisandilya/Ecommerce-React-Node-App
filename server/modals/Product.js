const mongoose = require('mongoose')
const mongoSchema = mongoose.Schema;


const productSchema = new mongoSchema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    image: {
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
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    usage: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('product', productSchema)