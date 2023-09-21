import { useEffect, useRef, useState } from "react";
import { useWindowSize, useHover } from "usehooks-ts";

import { DESCRIPTION_BETA } from "../constants";
import "../styles/productCard.scss";

export default function ProductCard({ product, position }) {
  const { width } = useWindowSize();
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  const isCurrent = position === "current";

  const [isAnimate, setIsAnimate] = useState(true);

  const slideLeft = isCurrent && isAnimate ? "slide-left" : "";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimate(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  let imageUrl;
  if (width > 834) {
    imageUrl = product.image.desktop;
  } else if (width > 390) {
    imageUrl = product.image.tablet;
  } else {
    imageUrl = product.image.mobile;
  }

  return (
    <div className={`card-product ${slideLeft} ${position}`} ref={hoverRef}>
      <div className={`card-product-image ${position} transform-hover`}>
        <img alt={product.name} src={imageUrl} />
      </div>
      <div className={`card-product-price transform-hover ${slideLeft}`}>
        <span>{product.price}</span>
      </div>
      <div className={`card-product-name transform-hover ${slideLeft}`}>
        <span>{product.name}</span>
      </div>
      <div className={`card-product-description transform-hover ${slideLeft}`}>
        {isHover && isCurrent ? (
          <span>{DESCRIPTION_BETA}</span>
        ) : (
          <span>{product.description}</span>
        )}
      </div>
    </div>
  );
}
