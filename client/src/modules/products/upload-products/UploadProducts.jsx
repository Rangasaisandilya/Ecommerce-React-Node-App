/* eslint-disable react/no-unknown-property */
import React, { useState } from "react"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { uploadProduct } from "../../../redux/Actions/Products/productActions";
import 'react-toastify/dist/ReactToastify.css';
import Toaster from "../../layout/Toaster/Toaster";
import swal from "sweetalert";


const UploadProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: '',
    brand: '',
    image: '',
    price: '',
    quantity: '',
    category: '',
    description: '',
    usage: ''
  });
  const [validated, setValidated] = useState(false);

  // handle Input
  const handleInput = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  // changeImage
  const changeImage = async (event) => {
    const imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.addEventListener('load', () => {
      if (reader.result) {
        setProduct({
          ...product,
          image: reader.result
        });
      }
      else {
        alert('Error Occurred');
      }
    });
  };

  // submitUploadProduct
  const submitUploadProduct = (e) => {
    e.preventDefault();
    setValidated(true);
    const form = e.currentTarget
    if (form.checkValidity()) {
      dispatch(uploadProduct({ product })).then(() => {
        swal({
          title: "Product Uploaded Successfully",
          icon: "success",
          button: "Ok",
        });
        navigate('/')
      }).catch(() => {
        swal({
          title: "Something went wrong!",
          icon: "error",
          button: "Ok",
        });
      });
    }
  };
  return (


    <React.Fragment>
      <Toaster />
      <section className="bg-brains p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3">
                <i className="fa fa-upload mr-2" />Upload Product
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-3 animated zoomInLeft">
          <div className="card">
            <div className="card-header bg-dark text-brains">
              <p className="h4">Upload Here</p>
            </div>
            <div className="card-body bg-brains">
              <form onSubmit={submitUploadProduct} noValidate validated={validated} >
                <div className="form-group">
                  <input
                    required
                    name="name"
                    value={product.name}
                    onChange={handleInput}
                    type="text" className={`form-control ${validated && !product?.name?.trim() ? 'is-invalid' : ''}`} placeholder="Product Name" />
                  <div class="invalid-feedback font-weight-bold">
                    Product name is required.
                  </div>
                </div>
                <div className="form-group">
                  <div className="custom-file">
                    <input
                      required
                      onChange={changeImage}
                      type="file"
                      className={`custom-file-input ${validated && !product?.image?.trim() ? 'is-invalid' : ''}`}
                      id="customFile" />
                    <div class="invalid-feedback font-weight-bold">
                      Product image is required.
                    </div>
                    <label className="custom-file-label" htmlFor="customFile">
                      {
                        product.image ?
                          <img src={product.image} alt="" width="20"
                            height="20" /> : 'Product Image'
                      }
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    required
                    name="brand"
                    value={product.brand}
                    onChange={handleInput}
                    type="text"
                    className={`form-control ${validated && !product.brand?.trim() ? 'is-invalid' : ''}`}
                    placeholder="Product Brand" />
                  <div class="invalid-feedback font-weight-bold">
                    Product brand is required.
                  </div>
                </div>
                <div className="form-group">
                  <input
                    required
                    name="price"
                    value={product.price}
                    onChange={handleInput}
                    type="number"
                    className={`form-control ${validated && !product.price?.trim() ? 'is-invalid' : ''}`}
                    placeholder="Product Price"
                  />
                  <div class="invalid-feedback font-weight-bold">
                    Product price is required.
                  </div>
                </div>
                <div className="form-group">
                  <input
                    required
                    name="quantity"
                    value={product.quantity}
                    onChange={handleInput}
                    type="number"
                    className={`form-control ${validated && !product.quantity?.trim() ? 'is-invalid' : ''}`}
                    placeholder="Product quantity" />
                  <div class="invalid-feedback font-weight-bold">
                    Product quantity is required.
                  </div>
                </div>
                <div className="form-group">
                  <select
                    required
                    name="category"
                    value={product.category}
                    onChange={handleInput}
                    className={`form-control ${validated && !product.category?.trim() ? 'is-invalid' : ''}`}
                  >
                    <option value="">Select Category</option>
                    <option value="MEN">{`Men's Collection`}</option>
                    <option value="WOMEN">{`Women's Collection`}</option>
                    <option value="KIDS">{`Kid's Collection`}</option>
                  </select>
                  <div class="invalid-feedback font-weight-bold">
                    Plese select product category.
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    required
                    name="description"
                    value={product.description}
                    onChange={handleInput}
                    rows="4"
                    className={`form-control ${validated && !product.description?.trim() ? 'is-invalid' : ''}`}
                    placeholder="Product Description" />
                  <div class="invalid-feedback font-weight-bold">
                    Product description is Required.
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    required
                    name="usage"
                    value={product.usage}
                    onChange={handleInput}
                    rows="4"
                    className={`form-control ${validated && !product.usage?.trim() ? 'is-invalid' : ''}`}
                    placeholder="Product Usage" />
                  <div class="invalid-feedback font-weight-bold">
                    Product usage is Required.
                  </div>
                </div>
                <div className="form-group">
                  <input type="submit" className="btn btn-dark text-brains btn-sm" value="Upload" />
                </div>
              </form>

            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )

}

export default UploadProducts