import React, { useEffect, useRef, useState } from 'react';
import { useHover, useMediaQuery } from 'usehooks-ts';

import { DESCRIPTION_BETA } from '@/constants';
import './productCard.scss';

export default function ProductCard({ product, position }) {
  const isDesktop = useMediaQuery('(min-width: 835px)');
  const isTablet = useMediaQuery('(min-width: 391px) and (max-width: 834px)');

  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  const isCurrent = position === 'current';

  const [isAnimate, setIsAnimate] = useState(true);

  const slideLeft = isCurrent && isAnimate ? 'slide-left' : '';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimate(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  let imageUrl;
  if (isDesktop) {
    imageUrl = product.image.desktop;
  } else if (isTablet) {
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
