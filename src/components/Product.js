import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useWindowSize } from "usehooks-ts";

import { GET_PRODUCT } from "../queries/query";


// TODO : Remove
export default function Product() {
  const { id } = useParams();
  const { width } = useWindowSize();

  const { error, data } = useQuery(GET_PRODUCT, {
    variables: { id },
  });
  const product = data?.product;

  let imageUrl;
  if (width > 834) {
    imageUrl = product?.image.desktop;
  } else if (width > 390) {
    imageUrl = product?.image.tablet;
  } else {
    imageUrl = product?.image.mobile;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      {product && (
        <div className="container-flex-v flex-center">
          <div>
            <img alt={product.name} src={imageUrl} />
          </div>
          <div>
            <p>{product.description}</p>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
          <div className="btn-img">
            <img alt="btn-cart" src="/images/btn_cart.png" />
          </div>
        </div>
      )}
    </>
  );
}
