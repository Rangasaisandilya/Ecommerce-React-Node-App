/* eslint-disable react/no-unknown-property */
import React, { useState } from "react"
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from "../../../redux/Actions/users/userActions";
import swal from "sweetalert";

const Regiser = () => {

  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [validated, setValidated] = useState(false);
  let [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });
  const userRegex = /^[a-zA-Z0-9]{4,10}$/;
  const emailRegex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex = /^[A-Za-z]\w{7,14}$/;

  let handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  // submitRegister
  let submitRegister = (e) => {
    e.preventDefault();
    const form = e.currentTarget
    setValidated(true);
    if (form.checkValidity() && validated && userRegex.test(user?.name) && emailRegex.test(user?.email) && passwordRegex.test(user?.password)) {
      dispatch(registerUser({user,swal,navigate}))
    }
  };


  return (
    <React.Fragment>
      <section className="p-3 bg-brains">
        <div className="container ">
          <div className="row animated flipInY">
            <div className="col">
              <p className="h3">
                <i className="fa fa-user-cog" /> Register Here</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto">
              <div className="card animated jello">
                <div className="card-header bg-dark text-brains">
                  <p className="h4">Register Here</p>
                </div>
                <div className="card-body bg-brains">
                  <form onSubmit={submitRegister} noValidate validated={validated}>
                    <div className="form-group">
                      <input
                        required
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        type="text"
                        className={`form-control ${validated && !userRegex.test(user?.name) ? 'is-invalid' : ''}`}
                        placeholder="Name" />
                      <div className="invalid-feedback">Enter Valid Name</div>
                    </div>
                    <div className="form-group">
                      <input
                        required
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        type="email" className={`form-control ${validated && !emailRegex.test(user?.email) ? 'is-invalid' : ''}`}
                        placeholder="Email" />
                      <div className="invalid-feedback" >Enter Valid Email</div>
                    </div>
                    <div className="form-group">
                      <input
                        required
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        type="password" className={`form-control ${validated && !passwordRegex.test(user?.password) ? 'is-invalid' : ''}`}
                        placeholder="Password" />
                      <div className="invalid-feedback" >Password format not accepted</div>
                    </div>
                    <input type="submit" className="btn btn-dark text-brains btn-sm " value="Register" />
                  </form>
                  <small className="font-weight-bold">Already Registered ?
                    <Link to='/users/login'> Login</Link>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )

}

export default Regiser