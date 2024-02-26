import React from "react"
import { Link } from "react-router-dom"

const Login = () => {
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
                  <form>
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                      <input type="Password" className="form-control" placeholder="Enter your Password" />
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