import React, { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getProductById } from "../../../redux/Actions/Products/productActions"
import Spinner from "../../layout/Spinner/Spinner"
import { addToCart } from "../../../redux/Reducers/orders/orderSlice"

const ProductDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, selectedProduct } = useSelector((store) => store.products);
  const [productQty , setProductQty] = useState("");

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id))
    }
  }, [dispatch, id])


  let clickAddToCart = () => {
    // dispatch an action selected product and id
    const updatedProduct = { ...selectedProduct, qty : (productQty === '') ? 1 : Number(productQty) }
    dispatch(addToCart(updatedProduct));
    navigate("/orders/cart");
};

  return (
    <React.Fragment>
      <section className="bg-brains p-3">
        <div className="container animated flipInX">
          <div className="row">
            <div className="col">
              <p className="h3">Product Details</p>
            </div>
          </div>
        </div>
      </section>
      {
        loading ? <Spinner /> :
          <Fragment>
            {
              Object.keys(selectedProduct).length > 0 ?
                <Fragment>
                  <section className="p-3 mt-3">
                    <div className="container animated flipInX">
                      <div className="row">
                        <div className="col-md-5 text-center">
                          <img src={selectedProduct.image} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-7">
                          <p className="h4">{selectedProduct?.name}</p>
                          <small>Brand : {selectedProduct.brand}</small>
                          <p className="h5">&#8377; {selectedProduct?.price}</p>
                          <form className="form-inline">
                            <div className="form-group">
                              <select
                                value={productQty}
                                onChange={(e) => setProductQty(e.target.value)}
                                className="form-control">
                                <option value="">Select Quantity</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </div>
                          </form>
                          <div>
                            <button className="btn btn-brains text-dark btn-sm mt-2" onClick={() =>clickAddToCart()} disabled={!productQty}>Add to Cart</button>
                          </div>
                          <p>{selectedProduct?.description}</p>
                          <p>{selectedProduct?.usage}</p>
                        </div>
                      </div>
                    </div>
                  </section>
                </Fragment> : null
            }
          </Fragment>
      }
    </React.Fragment>
  )

}

export default ProductDetails
