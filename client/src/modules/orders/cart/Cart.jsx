import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../layout/Spinner/Spinner";
import { changeProuctQuantity, deleteItemfromCart } from "../../../redux/Reducers/orders/orderSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { loading, cartItems } = useSelector((store) => store.orders);
  const PRODUCT_TAX = 5.0;

  useEffect(() => {
    console.log(cartItems)

  }, [cartItems])

  let calcTotal = () => {
    let result = 0;
    if(cartItems.length > 0){
        for(let item of cartItems){
            result += item.price * item.qty;
        }
    }
    return result;
};

let calcTax = () => {
    return calcTotal() * PRODUCT_TAX / 100;
};

let calcGrandTotal = () => {
    return calcTotal() + calcTax();
};


  return (
    <React.Fragment>
      <section className="bg-brains p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3">
                <i className="fa fa-shopping-cart mr-2" />Your Cart
              </p>
            </div>
          </div>
        </div>
      </section>
      {
        loading ? <Spinner /> :
          <React.Fragment>
            {
              cartItems.length === 0 ?
                <React.Fragment>
                  <section className="mt-3">
                    <div className="container">
                      <div className="row">
                        <div className="col text-center">
                          <p className="h3 text-danger">----------- Your Cart is Empty ------------ </p>
                          <Link to='/' className="btn btn-dark text-brains btn-sm">Shop Now</Link>
                        </div>
                      </div>
                    </div>
                  </section>
                </React.Fragment>
                :
                <React.Fragment>
                  <section className="my-3">
                    <div className="container">
                      <div className="row row animated flipInY">
                        <div className="col-md-8">
                          <div className="card">
                            <div className="card-header bg-dark text-brains">
                              <p className="h4">Added Cart Items</p>
                            </div>
                            <div className="card-body">
                              <table className="table bg-brains text-center table-striped table-hover">
                                <thead>
                                  <tr>
                                    <th>Product</th>
                                    <th>Name</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th>Total Price</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {
                                    cartItems.map(cartItem => {
                                      return (
                                        <tr key={cartItem._id}>
                                          <td>
                                            <img src={cartItem.image} alt="" width="50" height="80" />
                                          </td>
                                          <td>{cartItem.name}</td>
                                          <td>
                                            <i className="fa fa-minus-circle mx-1 cursor-pointer"
                                              onClick={() => dispatch(changeProuctQuantity({ type: "decrement", productId: cartItem._id }))}
                                            />
                                            {cartItem.qty}
                                            <i className="fa fa-plus-circle mx-1 cursor-pointer" 
                                             onClick={() => dispatch(changeProuctQuantity({ type: "increment", productId: cartItem._id }))}
                                            />
                                          </td>
                                          <td>&#8377; {cartItem.price.toFixed(2)}</td>
                                          <td>&#8377; {(cartItem.qty * cartItem.price).toFixed(2)}</td>
                                          <td>
                                            <button className="btn btn-danger btn-sm" 
                                             onClick={()=> dispatch(deleteItemfromCart(cartItem._id))}
                                            >Delete</button>
                                          </td>
                                        </tr>
                                      )
                                    })
                                  }
                                </tbody>
                              </table>
                            </div>

                          </div>
                        </div>
                        <div className="col-md-4 animated zoomInRight">
                          <div className="card">
                            <div className="card-header bg-dark text-brains">
                              <p className="h4">Your Total</p>
                            </div>
                            <div className="card-body">
                              <ul className="list-group">
                                <li className="list-group-item bg-brains">
                                  Total : &#8377; {calcTotal().toFixed(2)}
                                </li>
                                <li className="list-group-item bg-brains">
                                  Tax : &#8377; {calcTax().toFixed(2)}
                                </li>
                                <li className="list-group-item bg-brains">
                                  Grand Total : &#8377; {calcGrandTotal().toFixed(2)}
                                </li>
                              </ul>
                              <Link to='/orders/checkout' className="btn btn-success btn-sm mt-3">Checkout</Link>
                              <Link to='/' className="btn btn-secondary btn-sm mt-3">Shop Again</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                </React.Fragment>
            }
          </React.Fragment>
      }

    </React.Fragment>
  )

}

export default Cart