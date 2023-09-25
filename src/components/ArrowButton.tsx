import React from "react";
import classNames from "classnames";

import arrowRight from "../icons/arrowRight.svg";
import arrowLeft from "../icons/arrowLeft.svg";

import "../styles/arrowButton.scss";

export default function ArrowButton({ imageUrl, direction, handleClick }) {
  const buttonStyle = classNames(`arrow-${direction}`);
  const iconArrow = direction === "right" ? arrowRight : arrowLeft;

  return (
      <button className={`${buttonStyle} fixed-appear-full`} onClick={handleClick}>
        <img alt="next-product" src={iconArrow} />
      </button>
  );
}
