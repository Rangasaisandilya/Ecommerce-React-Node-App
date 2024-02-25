const response = (res, status, httpStatusCode, message, data = null, token = null) => {

    const responseJSON = {
        status,
        message,
    }
    
    if (data) {
        responseJSON.data = data;
    }

    if (token) {
        responseJSON.token = token;
    }
    return res.status(httpStatusCode).json(responseJSON);
};

module.exports = response;