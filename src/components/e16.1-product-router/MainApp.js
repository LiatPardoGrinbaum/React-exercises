import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import HomePage from "./components/HomePage";
import ProductDetail from "./components/ProductDetail";
import "./style.css";

import { BrowserRouter, Route, Link } from "react-router-dom";

class MainApp extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />

          <Route path="/" exact component={HomePage} />
          <Route path="/products" exact component={Products} />
          <Route path="/product/:id" exact component={ProductDetail} />
        </BrowserRouter>
      </div>
    );
  }
}

export default MainApp;
