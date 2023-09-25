import React from "react";
import classNames from "classnames";
import { useQuery } from "@apollo/client";

import CartProduct from "./cart/CartProduct";
import { CART_QUERY } from "../queries/query";

import closeIcon from "../icons/closeIcon.svg";
import cartIcon from "../icons/shopping-cart.svg";

import "../styles/sidePanel.scss";

export default function SidePanel({ isVisible, handleClose }) {
  const { loading, data, error } = useQuery(CART_QUERY);

  return (
    <div className={classNames("side-panel", { "show-panel": isVisible })}>
      <button className="side-panel-close-btn" onClick={handleClose}>
        <img alt="close-btn" src={closeIcon} />
      </button>
      {data && (
        <>
          <div className="side-panel-icon">
            <span>{data.cart.count}</span>
            <div className="side-panel-icon-image">
              <img alt="shopping-cart" src={cartIcon} />
            </div>
          </div>
          {loading && <span>loading...</span>}
          {error && <span>{error.message}</span>}
          {data.cart.products.map((product) => (
            <CartProduct key={product.id} product={product} />
          ))}
          <div className="side-panel-amount">
            <div className="side-panel-amount-tax">
              <span>TAXES</span>
              <span>{data.cart.taxes}</span>
            </div>
            <div className="side-panel-amount-total">
              <span>TOTAL</span>
              <span>{data.cart.total}</span>
            </div>
          </div>
        </>
      )}
      <button className="side-panel-btn-checkout">GO TO CHECKOUT</button>
    </div>
  );
}
