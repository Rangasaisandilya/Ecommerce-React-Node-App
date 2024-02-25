const bycrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const User = require('../modals/User');
const response = require('../utils/commonUtils');


const registerUser = async (req, res) => {
    try {
        let { name, email, password } = req.body
        // find if user is already registered or not
        let user = await User.findOne({ email: email })
        if (user) {
            return response(res, false, 400, 'User already registered', null)
        }
        // hash the password
        password = await bycrypt.hash(password, 10)

        let avatar = gravatar.url(email,
            {
                s: '200',
                r: 'G',
                d: 'mm'
            })

        let address = {
            flat: ' ',
            street: ' ',
            landmark: ' ',
            city: ' ',
            state: ' ',
            country: ' ',
            pin: ' ',
            mobile: ' '
        };

        user = new User({ name, email, password, avatar, address })
        user = await user.save();

        return response(res, true, 200, "user registered successfully", user)

    } catch (error) {
        return response(res, false, 500, error.message, null)
    }
}


const loginUser = async (req, res) => {
    try {
        let { email, password } = req.body;

        //check if user exists
        let user = await User.findOne({ email: email })
        if (!user) {
            response(res, false, 401, 'User not registered', null)
        }

        // verify the password
        let isMatch = await bycrypt.compare(password, user.password)
        if (!isMatch) {
            response(res, false, 401, 'Invalid password', null)
        }
        // create a token and send to client
        let payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            response(res, true, 200, "user logged in successfully", null, token)
        })


    } catch (error) {
        return response(res, false, 500, error.message, null)
    }
}

const getUserInfo = async (req, res) => {
    try {
        let user = await User.findById(req.user.id).select('-password').lean()
        return response(res, true, 200, "data fetched successfully", user)

    } catch (error) {
        response(res, false, 500, error.message, null)
    }
}


const updateUserInfo = async (req, res) => {
    try {
        let { flat, street, city, landmark, pin, state, mobile } = req.body
        let address = {
            flat,
            street,
            city,
            landmark,
            pin,
            state,
            mobile
        }
        let user = await User.findById(req.user.id).select("address")
        if (user) {
            user.address = address
            user = await user.save()
            return response(res, true, 200, "user updated successfully", user)
        }
        else {
            return response(res, false, 400, 'user data not found', null)
        }

    } catch (error) {
        response(res, false, 500, error.message, null)
    }
}


module.exports =
{
    registerUser,
    loginUser,
    getUserInfo,
    updateUserInfo
}