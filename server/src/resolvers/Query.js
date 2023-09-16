const products = [
  {
    id: "0",
    name: "MEN SHIRT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "19 000 €",
    image: {
      desktop: "/images/men_shirt-big.png",
      tablet: "/images/men_shirt-tablet.png",
      mobile: "/images/men_shirt-mobile.png",
      mini: "/images/men-shirt_mini.png",
    },
  },
  {
    id: "1",
    name: "LADY BAG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "3 000 €",
    image: {
      desktop: "/images/bag-big.png",
      tablet: "/images/men_shirt-tablet.png",
      mobile: "/images/men_shirt-mobile.png",
      mini: "/images/bag_mini.png",
    },
  },
  {
    id: "2",
    name: "DIOR JEWELERY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "100 000 €",
    image: {
      desktop: "/images/jewelery-big.png",
      tablet: "/images/men_shirt-tablet.png",
      mobile: "/images/men_shirt-mobile.png",
      mini: "/images/jewelery_mini.png",
    },
  },
];

function catalog(parent, args, context, info) {
  const count = products.length;

  return {
    id: "catalog",
    products,
    count,
  };
}

function product(parent, args, context, info) {
  const id = args.productId;
  return products.find((p) => p.id === id);
}

module.exports = {
  catalog,
  product,
};
