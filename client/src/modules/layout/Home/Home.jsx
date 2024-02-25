/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <React.Fragment>
    <div className="landing-page">
        <div className="wrapper">
            <div className="d-flex flex-column text-center justify-content-center align-items-center h-100">
                <h3 className="display-3 animated slideInDown">Fashion Gala</h3>
                <p className="lead px-3 animated slideInUp">Welcome to our trendy and sophisticated fashion e-commerce website, where style meets convenience. Explore the latest in fashion trends, curated just for you. Our diverse collection features everything from casual wear to formal attire, ensuring there's something for every occasion and every style preference</p>
                <Link to="/products/men" className="btn btn-brains btn-sm animated zoomIn">Shop Now</Link>
            </div>
        </div>
    </div>
</React.Fragment>
  )

}

export default Home