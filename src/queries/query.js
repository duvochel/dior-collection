import { gql } from "@apollo/client";

export const CATALOG_QUERY = gql`
  {
    catalog {
      id
      products {
        id
        description
        name
        price
        image {
          desktop
          tablet
          mobile
          mini
        }
      }
      count
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(productId: $id) {
      id
      name
      description
      price
      image {
        desktop
        tablet
        mobile
      }
    }
  }
`;
