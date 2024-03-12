/* eslint-disable react/no-unknown-property */
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import swal from "sweetalert";
import { loginUser } from "../../../redux/Actions/users/userActions";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [validated, setValidated] = useState(false);
  let [user, setUser] = useState({ email: '', password: '' });
  const emailRegex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex = /^[A-Za-z]\w{7,14}$/;

  let handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }


  let submitLogin = (e) => {
    e.preventDefault();
    const form = e.currentTarget
    setValidated(true);
    if (form.checkValidity() && emailRegex.test(user?.email) && passwordRegex.test(user?.password)) {
      dispatch(loginUser({user,swal,navigate}))
    }
  };

  return (
    <React.Fragment>
      <section className="p-3 bg-brains">
        <div className="container ">
          <div className="row animated flipInY">
            <div className="col">
              <p className="h3">
                <i className="fa fa-sign-in-alt" /> Login Here</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto">
              <div className="card">
                <div className="card-header bg-dark text-brains">
                  <p className="h4">Login Here</p>
                </div>
                <div className="card-body bg-brains">
                  <form noValidate onSubmit={submitLogin}>
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
                    <div className="form-group text-center">
                      <button type="submit" className="btn btn-success btn-sm">Login</button>
                    </div>
                  </form>
                  <small className="font-weight-bold text-center">{`Don't have an account ?`}
                    <Link to='/users/register'> Register</Link>
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

export default Login