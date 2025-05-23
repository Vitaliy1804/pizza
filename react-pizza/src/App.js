import React from 'react';
import Header from './components/Header';
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom';

import pizza from './assets/pizza.json';

import './scss/app.scss'

export const SearchContext = React.createContext('');

console.log(pizza)

function App() {
  const [searchValue, setSearchValue] = React.useState('')
  
  return (
      <div className="wrapper">
     <SearchContext.Provider value={{searchValue, setSearchValue}}>
     <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
          </div>
     </SearchContext.Provider>
      </div>
  );
}

export default App;
 