import React from "react";
import { useQuery } from "@apollo/client";

import { CATALOG_QUERY } from "../queries/query";
import { useDevice } from "../hooks/useDevice";
import Caroussel from "./Caroussel";

import "../styles/productList.scss";

export default function ProductList() {
  const { loading, error, data } = useQuery(CATALOG_QUERY);
  const device = useDevice();

  if (error) {
    return (
      <>
        <h2>Oups...</h2>
        <p>{error.message}</p>
      </>
    );
  }

  return (
    <div className="container-flex-v flex-center">
      <div className="logo-key">
        <img alt="logo-key" src={`/images/logo_key-${device}.png`} />
      </div>
      <div className="title-collection">
        <h2>THE SECRET COLLECTION</h2>
      </div>
      <div className="filters">
        <div>
          <img alt="btn-filter" src="/images/btn_filters.png" />
        </div>
        <div>
          <img alt="btn-sort" src="/images/btn_sort.png" />
        </div>
      </div>
      <div>
        {loading && <>Loading...</>}
        {data && data.catalog?.products && (
          <Caroussel products={data.catalog.products} />
        )}
      </div>
      <div className="btn-img">
        <img alt="btn-cart" src="/images/btn_cart.png" />
      </div>
    </div>
  );
}
