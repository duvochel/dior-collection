import { useDevice } from "../../hooks/useDevice";
import trashIcon from "../../icons/trashIcon.svg";

import "./cartProduct.scss";

export default function CartProduct({ product }) {
  const productImgUrl =
    useDevice() === "mobile" ? product.image.mini : product.image.tablet;
  return (
    <>
      <div className="cart-product-list">
        <div className="cart-product">
          <div className="cart-product-image">
            <img alt={product.name} src={productImgUrl} />
          </div>
          <button className="btn-trash">
            <img alt="trash" src={trashIcon} />
          </button>
          <div className="cart-product-info">
            <div className="cart-product-info-name">
              <span>{product.name}</span>
            </div>
            <div className="cart-product-info-price">
              <span>{product.price}</span>
            </div>
            <div className="cart-product-info-btn-items">
              <img alt="" src="/images/cart-items.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
