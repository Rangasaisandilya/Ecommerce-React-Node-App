/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
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

                  <Link to="/products/upload" className="nav-link">Upload</Link>
                }
              </li>
              <li className="nav-item">
                <Link to="/orders/cart" className="nav-link">
                  <i className="fas fa-shopping-cart" />
                  <span className="badge badge-success">10</span>
                </Link>
              </li>
              <li className="nav-item">
                {
                  <Link to="/orders/checkout" className="nav-link">Checkout</Link>
                }
              </li>
              <li className="nav-item">
                {
                  <Link to="/orders/list" className="nav-link">Order List</Link>
                }
              </li>
            </ul>
            <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
                <Link to="/users/profile" className="nav-link">Profile</Link>
              </li>
            <li className="nav-item">
                <Link to="/users/login" className="nav-link">Login</Link>
                
              </li>
              <li className="nav-item">
                <Link to="/users/register" className="nav-link">Register</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </React.Fragment>
  )

}

export default NavBar