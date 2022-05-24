import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/products">Products</Link>
      </div>
    </div>
  );
};

export default Header;
