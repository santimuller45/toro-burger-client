import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ShopProvider } from './context/Shop/shop.jsx';
// import { LoginProvider } from './context/Login/login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <LoginProvider> */}
      <ShopProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ShopProvider>
    {/* </LoginProvider> */}
  </Provider>
);
