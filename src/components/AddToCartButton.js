import { useState } from "react";
import classNames from "classnames";

import SidePanel from "./SidePanel";

import "../styles/addToCartButton.scss";

export default function AddToCartButton() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const overlayStyle = classNames("overlay", { dark: isPanelVisible });

  function handleClick() {
    setIsOverlayVisible(true);
    setTimeout(() => {
      setIsPanelVisible(true);
    }, 500);
  }

  function handleClose() {
    setIsPanelVisible(false);
    setIsOverlayVisible(false);
  }

  return (
    <>
      {isOverlayVisible && <div className={overlayStyle} />}
      <button className="btn-add-cart slide-bottom" onClick={handleClick} />

      <SidePanel isVisible={isPanelVisible} handleClose={handleClose} />
    </>
  );
}
