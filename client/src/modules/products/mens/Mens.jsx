import React from "react"
import men_1 from "../../../assets/img/products/mens/men_1.jpg"
import men_2 from "../../../assets/img/products/mens/men_2.jpg"
import men_3 from "../../../assets/img/products/mens/men_3.jpg"
import men_4 from "../../../assets/img/products/mens/men_4.jpg"

const Mens = () => {
  return (
    <React.Fragment>
      <section className="bg-brains p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3">Mens Collection</p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-3">
        <div className="container">
          <div className="row animated zoomIn">
            <div className="col-md-3">
              <div className="card">
                <div className="card-header bg-white ">
                  <img src={men_1} className="img-fluid" />
                </div>
                <div className="card-body text-center">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <p className="h6">Mens fit shirt</p>
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
                  <img src={men_2} className="img-fluid" />
                </div>
                <div className="card-body text-center">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <p className="h6">Mens fit shirt</p>
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
                  <img src={men_3} className="img-fluid" />
                </div>
                <div className="card-body text-center">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <p className="h6">Mens fit shirt</p>
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
                  <img src={men_4} className="img-fluid" />
                </div>
                <div className="card-body text-center">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <p className="h6">Mens fit shirt</p>
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

export default Mens