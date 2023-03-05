import React from 'react';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
const App = () => {
  const user=true;
  return (

    <Router>
      <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/products/:category" exact element={<ProductList/>} />
          <Route path="/product/:id" exact element={<Product/>} /> 
          <Route path="/cart" exact element={<Cart/>} />
          <Route path="/login" exact element={ user? <Navigate  to="/"/>:<Login/>} />
          <Route path="/register" exact element={ user?<Navigate to ="/"/>: <Register/>} />       
        </Routes>
      </Router>
  );
};

export default App;
