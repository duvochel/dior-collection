import { useRef, useState } from "react";
import classNames from "classnames";
import { useHover, useMediaQuery } from "usehooks-ts";

import SidePanel from "./SidePanel";
import cartIcon from "../icons/shopping-cart.svg";
import cartIconGrey from "../icons/shopping-cart-grey.svg";

import "../styles/addToCartButton.scss";

export default function AddToCartButton() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const overlayStyle = classNames("overlay", { dark: isPanelVisible });
  const isDesktop = useMediaQuery("(min-width: 835px)");
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
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
    <>
      {isOverlayVisible && <div className={overlayStyle} />}
      <button
        className="btn-add-cart slide-bottom"
        onClick={handleClick}
        ref={hoverRef}
      >
        <span>ADD TO CART</span>
        <div className="btn-add-cart-icon">
          <img alt="" src={isHover ? cartIconGrey : cartIcon} />
        </div>
      </button>

      <SidePanel isVisible={isPanelVisible} handleClose={handleClose} />
    </>
  );
}
