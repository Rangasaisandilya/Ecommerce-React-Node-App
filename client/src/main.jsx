// MDBootstrap css files
import './bootstrap/css/font-awesome-5.8.1.css'
import '../node_modules/mdbootstrap/css/bootstrap.css';
import '../node_modules/mdbootstrap/css/mdb.css';
import './bootstrap/css/style.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './redux/store.js';
//import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
