const express = require('express');
const router = express();
const ordersRouter = require("./routes/orderRoutes");
const productRouter = require("./routes/productRoutes");
const paymentRouter = require("./routes/paymentRoutes");
const userRouter = require("./routes/userRoutes");

//user routes
router.use('/user', userRouter)

//product routes
router.use('/product', productRouter)

//payment route
router.use('/payment', paymentRouter)

//order routes
router.use('/order', ordersRouter)


module.exports = router;