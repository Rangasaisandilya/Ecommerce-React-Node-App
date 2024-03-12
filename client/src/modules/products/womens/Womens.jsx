import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getWomensCollection } from "../../../redux/Actions/Products/productActions"
import Spinner from "../../layout/Spinner/Spinner"
import { useNavigate } from "react-router-dom"
import { addToCart } from "../../../redux/Reducers/orders/orderSlice"

const Womens =()=>{

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, products } = useSelector((store) => store.products);


  useEffect(() => {
    dispatch(getWomensCollection())
  }, [dispatch])


  
  const handleaddToCart = (product) => {
    const updatedProduct = { ...product, qty: 1 }
    dispatch(addToCart(updatedProduct));
    navigate("/orders/cart");
  }



  
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
      {
        loading ?
          <Spinner /> :
          <React.Fragment>
            {
              products && Array.isArray(products) && products?.length > 0 ?
                <React.Fragment>
                  <section className="my-3">
                    <div className="container">
                      <div className="row">
                        {
                          products.map((product) => (
                            <div className="col-md-3" key={product?._id}>
                              <div className="card animated slideInLeft">
                                <div className="card-header bg-white ">
                                  <img src={product?.image} className="img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                  <ul className="list-group">
                                    <li className="list-group-item">
                                      <p className="h6">{product?.name}</p>
                                    </li>
                                    <li className="list-group-item">
                                      <p className="h6">&#8377; {product?.price?.toFixed(2)}</p>
                                    </li>
                                    <li className="list-group-item">
                                      <button className="btn btn-success btn-sm" onClick={()=> handleaddToCart(product)} >Add to cart</button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </section>

                </React.Fragment> :
                <React.Fragment>
                  <p className="h3 text-danger mt-5 text-center">No Data found</p>
                </React.Fragment>
            }

          </React.Fragment>
      }
    </React.Fragment>
    )

}

export default Womens