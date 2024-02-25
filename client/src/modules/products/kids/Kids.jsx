import React from "react"
import kid_1 from "../../../assets/img/products/kids/kid_1.jpg"
import kid_2 from "../../../assets/img/products/kids/kid_2.jpg"
import kid_3 from "../../../assets/img/products/kids/kid_3.jpg"
import kid_4 from "../../../assets/img/products/kids/kid_5.jpg"


const Kids =()=>{
  return(
    <React.Fragment>
    <section className="bg-brains p-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h3">Kids Collection</p>
          </div>
        </div>
      </div>
    </section>
    <section className="my-3">
      <div className="container">
        <div className="row animated slideInLeft">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header bg-white ">
                <img src={kid_1} className="img-fluid" />
              </div>
              <div className="card-body text-center">
                <ul className="list-group">
                  <li className="list-group-item">
                    <p className="h6">kids fit shirt</p>
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
                <img src={kid_2} className="img-fluid" />
              </div>
              <div className="card-body text-center">
                <ul className="list-group">
                  <li className="list-group-item">
                    <p className="h6">kids fit shirt</p>
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
                <img src={kid_3} className="img-fluid" />
              </div>
              <div className="card-body text-center">
                <ul className="list-group">
                  <li className="list-group-item">
                    <p className="h6">kids fit shirt</p>
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
                <img src={kid_4} className="img-fluid" />
              </div>
              <div className="card-body text-center">
                <ul className="list-group">
                  <li className="list-group-item">
                    <p className="h6">kids fit shirt</p>
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

export default Kids