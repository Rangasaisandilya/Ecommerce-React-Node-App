import React from "react"
import women_1 from "../../../assets/img/products/women/women_1.jpg"
import women_2 from "../../../assets/img/products/women/women_2.jpg"
import women_3 from "../../../assets/img/products/women/women_3.jpg"
import women_4 from "../../../assets/img/products/women/women_4.jpg"

const Womens =()=>{
  return(
    <React.Fragment>
      <section className="bg-brains p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3">Womens Collection</p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-3">
        <div className="container">
          <div className="row animated slideInDown">
            <div className="col-md-3">
              <div className="card">
                <div className="card-header bg-white ">
                  <img src={women_1} className="img-fluid" />
                </div>
                <div className="card-body text-center">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <p className="h6">Womens fit shirt</p>
                    </li>
                    <li className="list-group-item">
                      <p className="h6">&#8377; 1950.00</p>
                    </li>
                    <li className="list-group-item">
                      <button className="btn btn-success btn-sm">Add to cart</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header bg-white">
                  <img src={women_2} className="img-fluid" />
                </div>
                <div className="card-body text-center">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <p className="h6">Womens fit shirt</p>
                    </li>
                    <li className="list-group-item">
                      <p className="h6">&#8377; 1950.00</p>
                    </li>
                    <li className="list-group-item">
                      <button className="btn btn-success btn-sm">Add to cart</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header bg-white">
                  <img src={women_3} className="img-fluid" />
                </div>
                <div className="card-body text-center">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <p className="h6">Womens fit shirt</p>
                    </li>
                    <li className="list-group-item">
                      <p className="h6">&#8377; 1950.00</p>
                    </li>
                    <li className="list-group-item">
                      <button className="btn btn-success btn-sm">Add to cart</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header bg-white">
                  <img src={women_4} className="img-fluid" />
                </div>
                <div className="card-body text-center">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <p className="h6">Womens fit shirt</p>
                    </li>
                    <li className="list-group-item">
                      <p className="h6">&#8377; 1950.00</p>
                    </li>
                    <li className="list-group-item">
                      <button className="btn btn-success btn-sm">Add to cart</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </React.Fragment>
    )

}

export default Womens