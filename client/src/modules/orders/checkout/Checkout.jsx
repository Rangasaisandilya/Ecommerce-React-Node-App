import React from "react"
import men_1 from "../../../assets/img/products/mens/men_1.jpg"


const Checkout = () => {
  return (
    <React.Fragment>
      <section className="p-3 bg-brains">
        <div className="container">
          <div className="row animated flipInY">
            <div className="col">
              <p className="h3">
                <i className="fa fa-check-circle" /> Checkout Your Items</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header bg-dark text-brains">Billing Address</div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item bg-brains">
                      Flat :
                    </li>
                    <li className="list-group-item bg-brains">
                      Street :
                    </li><li className="list-group-item bg-brains">
                      land mark :
                    </li><li className="list-group-item bg-brains">
                      city :
                    </li><li className="list-group-item bg-brains">
                      state :
                    </li><li className="list-group-item bg-brains">
                      Pin code :
                    </li>
                    <li className="list-group-item bg-brains">
                      Contact Number :
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card my-3">
                <div className="card-header bg-dark text-brains">
                  <p className="h4">Payment Option</p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="customRadio1" name="customRadio"
                        className="custom-control-input" />
                      <label className="custom-control-label " htmlFor="customRadio1">Cash On Delivery</label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="customRadio2" name="customRadio"
                        className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="customRadio2">Credit Card Payment (Stripe)</label>
                    </div>
                  </form>
                </div>
              </div>

            </div>
            <div className="col-md-4 animated zoomInLeft">
              <div className="card">
                <div className="card-header bg-dark text-brains">
                  <p className="h4">Your Cart</p>
                </div>
                <div className="card-body bg-brains">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <div className="row text-center">
                        <div className="col-md-2">
                          <img src={men_1} alt="" width="50" height="80" />
                        </div>
                        <div className="col-md-8">
                          <p className="h6">Mens wear</p>
                          <p className="h6">Qty : 1</p>
                          <p className="h6">Price : &#8377; 123</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="list-group mt-2">
                    <li className="list-group-item bg-brains">
                      Total : &#8377; 133
                    </li>
                    <li className="list-group-item bg-brains">
                      Tax : &#8377; 234
                    </li>
                    <li className="list-group-item bg-brains">
                      Grand Total : &#8377; 234
                    </li>
                  </ul>
                  <button className="btn btn-success btn-sm btn-block mt-3">PAY &#8377; 10000</button>

                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </React.Fragment>
  )

}

export default Checkout