import classNames from "classnames";
import arrowRight from "../icons/arrowRight.svg";
import arrowLeft from "../icons/arrowLeft.svg";

import "../styles/arrowButton.scss";

export default function ArrowButton({ imageUrl, direction, handleClick }) {
  const buttonStyle = classNames(`arrow-${direction}`);
  const imgStyle = classNames(`product-mini-${direction}`);
  const iconArrow = direction === "right" ? arrowRight : arrowLeft;
  console.log({ direction });
  return (
    <>
      <div
        className={imgStyle}
        style={{
          background: `url("${imageUrl}"),
    lightgray 50% / cover no-repeat`,
        }}
      />
      <button className={buttonStyle} onClick={handleClick}>
        <img alt="next-product" src={iconArrow} />
      </button>
    </>
  );
}
