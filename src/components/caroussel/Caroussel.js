import CarousselMobile from "./CarousselMobile";
import CarousselDesktop from "./CarousselDesktop";

export default function Caroussel({ products, isMobile }) {
  if (isMobile) {
    return <CarousselMobile products={products} />;
  } else {
    return <CarousselDesktop products={products} />;
  }
}
