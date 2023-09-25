import { gql } from '../__generated__/gql';

export const CATALOG_QUERY = gql(`
  query GetCatalog {
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
`);

export const CART_QUERY = gql(`
  query GetCart {
    cart {
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
      taxes
      total
      count
    }
  }
`);
