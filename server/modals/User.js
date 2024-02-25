const mongoose = require('mongoose');
const mongoSchema = mongoose.Schema;

const userSchema = new mongoSchema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    address: {
        flat: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        landmark: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        pin: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        mobile: {
            type: String,
            required: true
        },
    },
    created: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('user', userSchema);