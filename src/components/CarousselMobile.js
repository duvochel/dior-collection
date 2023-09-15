import ProductCard from "./ProductCard";
import "../styles/carousselMobile.scss";

export default function CarousselMobile({ products }) {
  return (
    <div className="caroussel-mobile">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
