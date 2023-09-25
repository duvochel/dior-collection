import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useMediaQuery } from "usehooks-ts";

import diorLogo from "../icons/diorLogo.svg";
import cartIcon from "../icons/shopping-cart.svg";
import SidePanel from "./SidePanel";

import "../styles/header.scss";

const Header = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const overlayStyle = classNames("overlay", { dark: isPanelVisible });
  const isDesktop = useMediaQuery("(min-width: 835px)");

  function handleClick() {
    setIsOverlayVisible(true);
    setTimeout(
      () => {
        setIsPanelVisible(true);
      },
      isDesktop ? 500 : 0
    );
  }

  function handleClose() {
    setIsPanelVisible(false);
    setIsOverlayVisible(false);
  }

  return (
    <div className="app-bar">
      <Link to="/home">
        <div className="logo-header slide-top">
          <img alt="logo-dior" src={diorLogo} />
        </div>
      </Link>
      <button className="cart-btn slide-top" onClick={handleClick}>
        <div className="cart-btn-icon image-box slide-top">
          <img alt="shopping-cart" src={cartIcon} />
        </div>
      </button>
      {isOverlayVisible && <div className={overlayStyle} />}
      <SidePanel isVisible={isPanelVisible} handleClose={handleClose} />
    </div>
  );
};

export default Header;
