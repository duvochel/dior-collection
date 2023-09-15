import { useWindowSize } from "usehooks-ts";
import "../styles/productCard.scss";

export default function ProductCard({ product }) {
  const { width } = useWindowSize();

  let imageUrl;
  if (width > 834) {
    imageUrl = product.image.desktop;
  } else if (width > 390) {
    imageUrl = product.image.tablet;
  } else {
    imageUrl = product.image.mobile;
  }

  return (
    <div className="container-flex-v flex-center card">
      <div className="card-image">
        <img alt={product.name} src={imageUrl} />
      </div>
      <div className="card-description">
        <span>{product.description}</span>
      </div>
      <div className="card-name">
        <span>{product.name}</span>
      </div>
      <div className="card-price">
        <span>{product.price}</span>
      </div>
    </div>
  );
}
