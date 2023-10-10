import React from 'react';
import { useQuery } from '@apollo/client';

import Caroussel from '@/components/caroussel/Caroussel';

import { CATALOG_QUERY } from '@/queries/query';

import './productList.scss';

export default function ProductList() {
  const { loading, error, data } = useQuery(CATALOG_QUERY);

  if (error) {
    return (
      <>
        <h2>Oups...</h2>
        <p>{error.message}</p>
      </>
    );
  }

  return (
    <>
      {loading && <>Loading...</>}
      {data && data.catalog?.products && (
        <div className="caroussel-wrapper">
          <Caroussel products={data.catalog.products} />
        </div>
      )}
    </>
  );
}
