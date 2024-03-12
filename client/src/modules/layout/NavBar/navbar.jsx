/* eslint-disable react/no-unescaped-entities */
import React, { Fragment } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from "../../../redux/Reducers/users/userSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isAuthenticated, user } = useSelector((store) => store.users);
  const {cartItems}= useSelector((store) => store.orders);


  const logoutUser = () => {
       dispatch(logOut())
       navigate('/')
  }


  let beforeLinks = (
    <Fragment>
        <li className="nav-item">
            <Link to='/users/login' className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
            <Link to='/users/register' className="nav-link">Register</Link>
        </li>
    </Fragment>
);

let afterLinks = (
    <React.Fragment>
        {
            user ? <li className="nav-item">
                <Link to='/users/profile' className="nav-link">
                    <img src={user.avatar} alt="" width="20" height="20" className="rounded-circle" />
                    &nbsp;{user.name}</Link>
            </li> : null
        }
        <li className="nav-item">
            <Link to='#' onClick={logoutUser} className="nav-link">Logout</Link>
        </li>
    </React.Fragment>
);
  


  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Fashion Gala
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/products/men" className="nav-link">Men's Wear</Link>
              </li>
              <li className="nav-item">
                <Link to="/products/kids" className="nav-link">Kid's Wear</Link>
              </li>
              <li className="nav-item">
                <Link to="/products/women" className="nav-link">Women's Wear</Link>
              </li>
              <li className="nav-item">
                {
                  user && user.isAdmin &&
                  <Link to="/products/upload" className="nav-link">Upload</Link>
                }
              </li>
              <li className="nav-item">
                <Link to="/orders/cart" className="nav-link">
                  <i className="fas fa-shopping-cart" />
                  <span className="badge badge-success">{cartItems?.length}</span>
                </Link>
              </li>
              {/* <li className="nav-item">
                {
                  <Link to="/orders/checkout" className="nav-link">Checkout</Link>
                }
              </li> */}
              <li className="nav-item">
                {
                  user && user.isAdmin &&
                  <Link to="/orders/list" className="nav-link">Order List</Link>
                }
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              {
                !loading &&
                <React.Fragment>
                  {
                    !isAuthenticated ? beforeLinks : afterLinks
                  } 
                </React.Fragment>
              }
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )

}

export default NavBar