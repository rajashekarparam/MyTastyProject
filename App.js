import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './HomeComponent/Home'

import Header from './HeaderComponent/Header'
import Cart from './ProductComponent/Cart'

import './App.css';

function App() {
  
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home />}  />
      <Route exact path="/cart" element={<Cart />}  />
      
     
      </Routes>
      

      </BrowserRouter>
      
    </div>
  );
}

export default App;
