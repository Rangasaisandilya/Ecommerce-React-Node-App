import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './modules/layout/NavBar/navbar'
import Home from './modules/layout/Home/Home';
import Mens from './modules/products/mens/Mens';
import Womens from './modules/products/womens/Womens';
import Kids from './modules/products/kids/Kids';
import UploadProducts from './modules/products/upload-products/UploadProducts';
import Cart from './modules/orders/cart/Cart';
import Checkout from './modules/orders/checkout/Checkout';
import OrdersList from './modules/orders/orders-list/OrdersList';
import Profile from './modules/users/profile/Profile';
import Regiser from './modules/users/register/Register';
import Login from './modules/users/login/Login';
import ProductDetails from './modules/products/product-details/ProductDetails';
const App = () => {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/products/:id' Component={ProductDetails} />
          <Route path='/products/men' Component={Mens} />
          <Route path='/products/women' Component={Womens} />
          <Route path='/products/kids' Component={Kids} />
          <Route path='/products/upload' Component={UploadProducts} />
          <Route path='/orders/cart' Component={Cart} />
          <Route path='/orders/checkout' Component={Checkout} />
          <Route path='/orders/list' Component={OrdersList} />
          <Route path='/users/profile' Component={Profile} />
          <Route path='/users/login' Component={Login} />
          <Route path='/users/register' Component={Regiser} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
