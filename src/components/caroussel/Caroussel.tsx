import React, { useState } from 'react';

import ProductCard from '@/components/product/ProductCard';
import ArrowButton from '@/components/buttons/ArrowButton';

import { useDevice } from '@/hooks/useDevice';

import './caroussel.scss';

export default function Caroussel({ products }) {
  const device = useDevice();
  const isDesktop = device === 'desktop';

  const [currentIndex, setCurrentIndex] = useState(0);

  let nextIndex;
  let previousIndex;

  if (currentIndex < products.length - 1) {
    nextIndex = currentIndex + 1;
  } else {
    nextIndex = null;
  }
  if (currentIndex > 0) {
    previousIndex = currentIndex - 1;
  } else {
    previousIndex = null;
  }

  function handleNext() {
    previousIndex = currentIndex;
    setCurrentIndex(nextIndex);
  }
  function handlePrevious() {
    nextIndex = currentIndex;
    setCurrentIndex(previousIndex);
  }

  function getPosition(index) {
    if (currentIndex === index) {
      return 'current';
    } else if (currentIndex === index + 1) {
      return 'previous';
    } else if (currentIndex === index - 1) {
      return 'next';
    } else if (currentIndex === index + 2) {
      return 'before';
    } else if (currentIndex === index - 2) {
      return 'after';
    }
    return 'out';
  }
  return (
    <>
      <div className="caroussel">
        {products.map((product, index) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              position={getPosition(index)}
            />
          );
        })}
      </div>
      {nextIndex && isDesktop && (
        <ArrowButton
          imageUrl={products[nextIndex].image.mini}
          handleClick={handleNext}
          direction="right"
        />
      )}
      {previousIndex !== null && isDesktop && (
        <ArrowButton
          imageUrl={products[previousIndex].image.mini}
          handleClick={handlePrevious}
          direction="left"
        />
      )}
    </>
  );
}
