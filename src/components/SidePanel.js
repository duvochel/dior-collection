import classNames from "classnames";

import closeIcon from "../icons/closeIcon.svg";
import cartIcon from "../icons/shopping-cart.svg";

import "../styles/sidePanel.scss";

export default function SidePanel({ isVisible, handleClose }) {
  return (
    <div className={classNames("side-panel", { "show-panel": isVisible })}>
      <button className="close-btn" onClick={handleClose}>
        <img alt="close-btn" src={closeIcon} />
      </button>
      <div className="cart">
        <span>1</span>
        <div className="cart-icon">
          <img alt="shopping-cart" src={cartIcon} />
        </div>
      </div>
    </div>
  );
}
