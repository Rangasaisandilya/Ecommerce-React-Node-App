const jwt = require("jsonwebtoken");
const response = require("../utils/commonUtils")


// JWT Token Verification
const authenticateToken = (req, res, next) => {

    if (!req.headers.authorization) {
        return response(res, false, 401, "Unauthorized Request")
    }

    let token = req.headers.authorization.split(' ')[1]
    if (!token) {
        return response(res, false, 401, "Unauthorized Request")
    }

    let payload = jwt.verify(token, process.env.JWT_SECRET_KEY)
    if (!payload) {
        return response(res, false, 401, "Unauthorized Request")
    }
    req.user = payload.user
    next()

}


module.exports = authenticateToken