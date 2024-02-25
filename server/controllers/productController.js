const Product = require("../modals/Product")
const response = require("../utils/commonUtils")


const uploadProduct = async (req, res) => {
    try {
        let { name, brand, image, price, quantity, category, description, usage } = req.body
        let newProduct = { name, brand, image, price, quantity, category, description, usage }
        let product = new Product(newProduct)
        product = await product.save();
        return response(res, true, 200, 'Product uploaded successfully', product)

    } catch (error) {
        response(res, false, 500, error.message, null)
    }

}

const getMensData = async (req, res) => {
    try {
        let product = await Product.find({ category: "MEN" })
        if (product && product.length > 0) {
            return response(res, true, 200, 'Data fetched successfully', product)
        }

    } catch (error) {
        response(res, false, 500, error.message, null)
    }
}

const getWomensData = async (req, res) => {
    try {
        let product = await Product.find({ category: "WOMEN" })
        if (product && product.length > 0) {
            return response(res, true, 200, 'Data fetched successfully', product)
        }
    } catch (error) {
        response(res, false, 500, error.message, null)
    }
}

const getKidsData = async (req, res) => {
    try {
        let product = await Product.find({ category: "KIDS" })
        if (product && product.length > 0) {
            return response(res, true, 200, 'Data fetched successfully', product)
        }
    } catch (error) {
        response(res, false, 500, error.message, null)
    }
}

const getSingleProduct = async (req, res) => {
    try {
        let productId = req.params.id;
        let product = await Product.findById(productId).lean();
        if (product) {
            return response(res, true, 200, 'Product data fetched suceessfully', product)
        }
        else {
            return response(res, false, 404, 'Invalid Product Id', null)
        }
    } catch (error) {
        console.error(error.message);
        response(res, false, 500, error.message, null)
    }
}

module.exports =
{
    getMensData,
    getWomensData,
    getKidsData,
    uploadProduct,
    getSingleProduct
}

