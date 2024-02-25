import React, { useState } from "react"
import { useDispatch } from "react-redux";

const UploadProducts = () => {
  //const dispatch = useDispatch();
  //const history = useHistory();

  const [product, setProduct] = useState({
    name: '',
    brand: '',
    image: '',
    price: '',
    qty: '',
    category: '',
    description: '',
    usage: ''
  });

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
    // dispatch(uploadProduct(product , history));
  };
  return (


    <React.Fragment>
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
              <form onSubmit={submitUploadProduct}>
                <div className="form-group">
                  <input
                    required
                    name="name"
                    value={product.name}
                    onChange={handleInput}
                    type="text" className="form-control" placeholder="Product Name" />
                </div>
                <div className="form-group">
                  <div className="custom-file">
                    <input
                      required
                      onChange={changeImage}
                      type="file" className="custom-file-input" id="customFile" />
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
                    type="text" className="form-control" placeholder="Product Brand" />
                </div>
                <div className="form-group">
                  <input
                    required
                    name="price"
                    value={product.price}
                    onChange={handleInput}
                    type="number" className="form-control" placeholder="Product Price" />
                </div>
                <div className="form-group">
                  <input
                    required
                    name="qty"
                    value={product.qty}
                    onChange={handleInput}
                    type="number" className="form-control" placeholder="Product Qty" />
                </div>
                <div className="form-group">
                  <select
                    required
                    name="category"
                    //value={product.category}
                    //onChange={handleInput}
                    className="form-control">
                    <option value="">Select Category</option>
                    <option value="MEN">Men's Collection</option>
                    <option value="WOMEN">Women's Collection</option>
                    <option value="KIDS">Kid's Collection</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    required
                    name="description"
                    //value={product.description}
                    //onChange={handleInput}
                    rows="4" className="form-control" placeholder="Product Description" />
                </div>
                <div className="form-group">
                  <textarea
                    required
                    name="usage"
                    //value={product.usage}
                    //onChange={handleInput}
                    rows="4" className="form-control" placeholder="Product Usage" />
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