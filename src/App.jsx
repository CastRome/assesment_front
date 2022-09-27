import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <nav className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/product" />} />
        <Route exact path="/product" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/product/detail" element={<ProductDetail />}>
          <Route path=":id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
