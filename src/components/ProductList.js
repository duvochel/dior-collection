import React from "react";
import { useQuery } from "@apollo/client";

import Caroussel from "./Caroussel";
import Filters from "./Filters";

import { CATALOG_QUERY } from "../queries/query";
import { useDevice } from "../hooks/useDevice";

import "../styles/productList.scss";

export default function ProductList() {
  const { loading, error, data } = useQuery(CATALOG_QUERY);
  const device = useDevice();
  const isMobile = device === "mobile";
  const logoKeyUrl = `/images/logo_key-${device}.png`;

  if (error) {
    return (
      <>
        <h2>Oups...</h2>
        <p>{error.message}</p>
      </>
    );
  }

  return (
    <div className="list-container">
      <div className="logo-key">
        <img alt="logo-key" src={logoKeyUrl} />
      </div>
      <div className="title-collection">
        <h2>THE SECRET COLLECTION</h2>
        <Filters />
      </div>
      {loading && <>Loading...</>}
      {data && data.catalog?.products && (
        <Caroussel products={data.catalog.products} isMobile={isMobile} />
      )}
      <div className="btn-img">
        <img alt="btn-cart" src="/images/btn_cart.png" />
      </div>
    </div>
  );
}
