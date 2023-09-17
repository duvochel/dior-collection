import { useRef } from "react";
import { useWindowSize, useHover } from "usehooks-ts";

import { DESCRIPTION_BETA } from "../constants";
import "../styles/productCard.scss";

export default function ProductCard({ product }) {
  const { width } = useWindowSize();
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  let imageUrl;
  if (width > 834) {
    imageUrl = product.image.desktop;
  } else if (width > 390) {
    imageUrl = product.image.tablet;
  } else {
    imageUrl = product.image.mobile;
  }

  return (
    <div className="container-flex-v card" ref={hoverRef}>
      <div className="product-image">
        <img alt={product.name} src={imageUrl} />
      </div>
      <div className="card-description">
        {isHover ? (
          <span>{DESCRIPTION_BETA}</span>
        ) : (
          <span>{product.description}</span>
        )}
      </div>
      <div className="product-name">
        <span>{product.name}</span>
      </div>
      <div className="product-price">
        <span>{product.price}</span>
      </div>
    </div>
  );
}
