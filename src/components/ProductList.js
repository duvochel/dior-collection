import React from "react";
import { useQuery, gql } from "@apollo/client";

export const CATALOG_QUERY = gql`
  {
    catalog {
      id
      products {
        id
        description
        name
        price
      }
      count
    }
  }
`;

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
    <div>
      {loading && <>Loading...</>}
      {data && (
        <ul>
          {data.catalog.products.map((product) => (
            <li key={product.id}>
              {product.name} : {product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
