import trashIcon from "../../icons/trashIcon.svg";
import "./cartProduct.scss";

export default function CartProduct({ product }) {
  return (
    <>
      <div className="cart-product-list">
        <div className="cart-product">
          <div className="product-cart-image">
            <img alt={product.name} src={product.image.mini} />
          </div>
          <button className="btn-trash">
            <img alt="trash" src={trashIcon} />
          </button>
          <div className="product-info">
            <div className="product-info-name">
              <span>{product.name}</span>
            </div>
            <div className="product-info-price">
              <span>{product.price}</span>
            </div>
            <div className="btn-items-image">
              <img alt="" src="/images/cart-items.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
