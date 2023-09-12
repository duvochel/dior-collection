import React from "react";
import { Link } from "react-router-dom";

import diorLogo from "../icons/diorLogo.svg";
import cartIcon from "../icons/shopping-cart.svg";

import "../styles/header.scss";

const Header = () => {
  return (
    <div className="app-bar">
      <Link to="/">
        <div className="logo-header">
          <img alt="logo-dior" src={diorLogo} />
        </div>
      </Link>
      <Link to="/cart">
        <div className="cart-icon">
          <img alt="shopping-cart" src={cartIcon} />
        </div>
      </Link>
    </div>
  );
};

export default Header;
