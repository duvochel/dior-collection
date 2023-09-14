import ProductCard from "./ProductCard";
import "../styles/caroussel.scss";

export default function Caroussel({ products }) {
  return (
    <div className="caroussel">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
