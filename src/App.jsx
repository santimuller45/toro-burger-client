import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom'
import { foodMenu } from "./redux/actions/actionsFood.js";
import axios from "axios";
// import './App.css'
import { LandingPage , NavBar , Products , AboutUs, Contact , UserNav , Detail , LoginPage , RegisterPage , Account , Footer , Cart } from './views/index.js'

axios.defaults.baseURL = "http://localhost:3001";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(foodMenu())
  },[dispatch])

  return (
    <div className="App">
      <header className="container-fluid">
        <div className="row justtify-content-center align-items-center">
          <UserNav/>
          <NavBar/>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/aboutus' element={<AboutUs />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/detail/:idProduct' element={<Detail/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/account' element={<Account/>}/>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      <footer className="container-fluid">
        <Footer/>
      </footer>
    </div>
  )
}

export default App
