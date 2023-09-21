import AddToCartButton from "../../components/AddToCartButton";
import ProductList from "../../components/ProductList";
import Filters from "../../components/filters/Filters";
import { useDevice } from "../../hooks/useDevice";

import "./homePage.scss";

export default function HomePage() {
  const device = useDevice();
  const logoKeyUrl = `/images/logo_key-${device}.png`;

  return (
    <div className="home-page-container">
      <div className="home-header">
        <div className="home-title slide-top">
          <div className="logo-key">
            <img alt="logo-key" src={logoKeyUrl} />
          </div>
          <div className="title-collection">
            <h2>THE SECRET COLLECTION</h2>
          </div>
        </div>
        <Filters />
      </div>
      <ProductList />
      <AddToCartButton />
    </div>
  );
}
