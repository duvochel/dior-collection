import React from "react";
import { Link } from "react-router-dom";

import "../styles/header.scss";

const Header = () => {
  return (
    <div className="app-bar">
      <Link to="/">
        <div className="logo-header">
          <img alt="logo-dior" src="icons/diorLogo.svg" />
        </div>
      </Link>
      <Link to="/cart">
        <div className="cart-icon">
          <img alt="shopping-cart" src="icons/shopping-cart.svg" />
        </div>
      </Link>
    </div>
  );
};

export default Header;
