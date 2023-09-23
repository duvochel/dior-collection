import { extendType, list, objectType } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen";
import { cartProductListMock } from "../mocks/cartProductMocks";

export const Cart = objectType({
  name: "Cart",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.int("count");
    t.nonNull.string("taxes");
    t.nonNull.string("total");
    t.nonNull.field("products", {
      type: list("Product"),
    });
  },
});

let cartProducts: NexusGenObjects["Product"][] = cartProductListMock;
const totalPrice = cartProducts.reduce((acc, p) => acc + p.price, 0);

let cart: NexusGenObjects["Cart"] = {
  id: "user_cart",
  products: cartProducts,
  taxes: "3 166.67 €",
  total: `${totalPrice.toLocaleString().replace(/\,/g, " ")} €`,
  count: cartProducts.length,
};

export const CartQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("cart", {
      type: "Cart",
      resolve(parent, args, context, info) {
        return cart;
      },
    });
  },
});
