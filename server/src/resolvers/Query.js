const cartProducts = require("../mocks/cartProductMocks");
const products = require("../mocks/productListMock");

function catalog(parent, args, context, info) {
  const count = products.length;

  return {
    id: "catalog",
    products: parseProducts(products),
    count,
  };
}

function parseProducts(products) {
  return products.map((p) => ({
    ...p,
    price: `${p.price.toLocaleString().replace(/\,/g, " ")} €`,
  }));
}

function product(parent, args, context, info) {
  const id = args.productId;
  return products.find((p) => p.id === id);
}

function cart(parent, args, context, info) {
  const count = cartProducts.length;
  const taxes = "3 166.67 €";
  const totalPrice = cartProducts.reduce((acc, p) => acc + p.price, 0);

  return {
    id: "cart",
    products: parseProducts(cartProducts),
    taxes,
    total: `${totalPrice.toLocaleString().replace(/\,/g, " ")} €`,
    count,
  };
}

module.exports = {
  catalog,
  product,
  cart,
};
