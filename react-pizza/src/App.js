import React from 'react';
import Header from './components/Header';
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss'



function App() {
 return (
      <div className="wrapper">
     <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/not-found" element={<NotFound />}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
          </div>
        </div>
  );
}

export default App;
 