const Order = require('../modals/Order');
const User = require('../modals/User');
const response = require('../utils/commonUtils');

const placeNewOrder = async (req, res) => {
    try {
        let user = await User.findById(req.user.id);// id received from token
        let {items,tax,total}= req.body;
        if (user) {
            let newOrder = {
                name: user.name,
                email: user.email,
                mobile: user.address.mobile,
                items,
                tax, 
                total
            }
            let order = await Order.create(newOrder);
            if(order){
                return response(res, true, 200, "Order placed successfully", order)
            }
            return response(res, false, 400, "Failed to place the order", null)
        }
        return response(res, false, 400, "User Authentication failed", null)

    } catch (error) {
        response(res, false, 500, error.message, null)
    }
}


const getAllOrders = async (req, res) => {
    try {
        let orders = await Order.find();
        if (orders) {
            return response(res, true, 200, "Orders fetched successfully", orders)
        }
        return response(res, false, 400, "Failed to fetch the orders", null);

    } catch (error) {

    }
}

module.exports = { placeNewOrder, getAllOrders }