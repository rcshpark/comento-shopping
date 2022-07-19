import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Basket from './pages/Basket';
import React from 'react';

function App() {
  return (
    <BrowserRouter basename='comento-shopping'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:productId" element={<ProductDetail/>}/>
      <Route path="/basket" element={<Basket/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
