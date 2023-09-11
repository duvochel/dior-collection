import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(productId: $id) {
      id
      name
      description
      price
      image
    }
  }
`;

export default function Product() {
  const { id } = useParams();

  const { error, data } = useQuery(GET_PRODUCT, {
    variables: { id },
  });
  const product = data?.product;

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      {product && (
        <>
          <div>
            <img alt={product.name} src={product.image} />
          </div>
          <div>
            <p>{product.description}</p>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        </>
      )}
    </div>
  );
}
