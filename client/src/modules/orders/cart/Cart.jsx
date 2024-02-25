import React from "react";
import men_1 from "../../../assets/img/products/mens/men_1.jpg"
import women_2 from "../../../assets/img/products/women/women_2.jpg"
import { Link } from "react-router-dom";

const Cart = () => {



  
  let calcTotal = () => {
    let result = 0;
    let cartItems=5
    if(cartItems.length > 0){
        for(let item of cartItems){
            result += item.price * item.qty;
        }
    }
    return result;
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
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img src={men_1} alt="product-image" className="img-fluid" width="50" height="80" />
                        </td>
                        <td>{`Men's Fit Shirt`}</td>
                        <td className="cursor-poniter">
                          <i className="fa fa-minus-circle mx-1 " />
                          2
                          <i className="fa fa-plus-circle mx-1" />
                        </td>
                        <td>&#8377; 1900</td>
                        <td>
                          <button className="btn btn-danger btn-sm">Remove</button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src={women_2} alt="product-image" className="img-fluid" width="50" height="80" />
                        </td>
                        <td>Womeens's Fit Casuals</td>
                        <td>
                          <i className="fa fa-minus-circle mx-1" />
                          2
                          <i className="fa fa-plus-circle mx-1" />
                        </td>
                        <td>&#8377; 1900</td>
                        <td>
                          <button className="btn btn-danger btn-sm">Remove</button>
                        </td>
                      </tr>
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
                      Total : &#8377; 123
                    </li>
                    <li className="list-group-item bg-brains">
                      Tax : &#8377; 456
                    </li>
                    <li className="list-group-item bg-brains">
                      Grand Total : &#8377; 789
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
  )

}

export default Cart