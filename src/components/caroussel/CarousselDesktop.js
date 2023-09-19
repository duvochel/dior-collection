import { useState } from "react";

import ProductCard from "../ProductCard";
import ArrowButton from "../ArrowButton";

export default function CarousselDesktop({ products, isMobile }) {
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

  return (
    <>
      <ProductCard product={products[currentIndex]} />
      {nextIndex && (
        <ArrowButton
          imageUrl={products[nextIndex].image.mini}
          handleClick={handleNext}
          direction="right"
        />
      )}
      {previousIndex !== null && (
        <ArrowButton
          imageUrl={products[previousIndex].image.mini}
          handleClick={handlePrevious}
          direction="left"
        />
      )}
    </>
  );
}
