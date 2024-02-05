import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom'
import { foodMenu } from "./redux/actions/actionsFood.js";
import axios from "axios";
// import './App.css'

// COMPONENTES
import { 
  LandingPage, 
  NavBar, 
  Products, 
  AboutUs, 
  Contact, 
  UserNav, 
  Detail, 
  LoginPage, 
  RegisterPage, 
  Account, 
  Footer, 
  Cart, 
  CheckoutCart,
  SettingsAdmin,
  AdminFood,
  OrderPanel,
  OrderDetail
} from './views/index.js';
//>

axios.defaults.baseURL = "http://localhost:3001";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(foodMenu())
  },[dispatch]);

  return (
    <div className="App">
      <header>
          <UserNav/>
          <NavBar/>
      </header>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/menu' element={<Products />}></Route>
        <Route path='/aboutus' element={<AboutUs />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/detail/:idProduct' element={<Detail/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/account' element={<Account/>}/>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/cart/checkout' element={<CheckoutCart/>}></Route>
        <Route path='/settings' element={<SettingsAdmin/>}></Route>
        <Route path='/settings/foods' element={<AdminFood/>}></Route>
        <Route path='/settings/orders' element={<OrderPanel/>}></Route>
        <Route path='/orders/detail/:orderID' element={<OrderDetail/>}></Route>
      </Routes>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default App;
