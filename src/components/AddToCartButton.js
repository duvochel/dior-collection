import { useState } from "react";

import "../styles/addToCartButton.scss";

export default function AddToCartButton() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  function handleClick() {
    console.log("handleClick");
    setIsOverlayVisible(true);
  }

  return (
    <>
      {isOverlayVisible && <div className="overlay" />}
      <button className="btn-img" onClick={handleClick}>
        <img alt="btn-cart" src="/images/btn_cart.png" />
      </button>
    </>
  );
}
