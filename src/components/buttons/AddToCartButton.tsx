import React, { useRef } from "react";
import { useHover } from "usehooks-ts";

import cartIcon from "@/icons/shopping-cart.svg";
import cartIconGrey from "@/icons/shopping-cart-grey.svg";

import "./addToCartButton.scss";

export default function AddToCartButton() {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  return (
    <button className="btn-add-cart slide-bottom" ref={hoverRef}>
      <span>ADD TO CART</span>
      <div className="btn-add-cart-icon">
        <img alt="" src={isHover ? cartIconGrey : cartIcon} />
      </div>
    </button>
  );
}
