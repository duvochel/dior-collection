const products = [
  {
    id: "0",
    name: "MEN SHIRT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "19 000 €",
    image: {
      desktop:
        "https://s3-alpha-sig.figma.com/img/cc86/4952/debdc95dd8f6a647d131a9851222d00c?Expires=1695600000&Signature=H43Q~PzuXSf4tHor-OPAgLBVoe3grnvG6eYe899N8GPytA~LTG22KhGKlXFRmEQ0V0~b8Bp2q7tuTvmbqTajAqUVdhd2T~3RucgQLZfpFgal8kuhpW8rPkB3crvYXLDf7-0bjR7atXarfFEsWYZPn2iE7yAEVsaFB9lNp8oMrjwZRQdEFGmI5ecKKpuERF0sTTwpaD0Er4F9L~dkt1dQv51vHdsBJ5vatt0IHmWYZvN6Ju4zJjPGdl9En1jgcHdHk7rRc4Oq3tnPnTQ7UpyPvpySxG7yAQXWA9~SpoIysaUie0-clUz7Xk8fYnmZ6Ir6coXTHP5yRfV6T4ft0aaeUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
      desktop:
        "https://s3-alpha-sig.figma.com/img/fde6/57a5/bf6bdc476291cb637f7b7316978e1778?Expires=1695600000&Signature=H9e1MRmUmUmLftU-nzS3CJ8iWt-QdnGB6d4IsCW~XqYT-5YvtyWtg2V150U02IyxCQ9YVMvq5ZAl~ywHS7lqhFdcBdai-NRHHIFfP8mw~uq6kUcgskXRot9gx0Maq0wpFvF3feF~SPVx7vVSZVrCzc~18PxUDDlao2a~QLnjjnpyrmhFv2A4vDa4U-TbGpwHbfrb5O2ND5zDrCej-HTmH2B2BlfH0y12xOsZWCFaqjQscqSqitco4IMYF7jgBJzTg82E2PCTzg6fmMA5cMj72uSIfIVYjsWX~2GDh1vrZNWHjCKl-O16YkxZT62skmHJer03ig2a7xvbvIwuZi~1JA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
      desktop:
        "https://s3-alpha-sig.figma.com/img/da16/dfd8/6174490ddb7ca9ea8b35ae4dfb3b8fe9?Expires=1695600000&Signature=DpoQL16eoHBy4dxhUaAe6aOVlSQUPH85J9qZRcI0wmE7VsacveBfLw8uXLI6YaCEuEThtOhRyNHmqPlgelp7DpW3V1zFs-FmLV1OZof6VP2uQvmZbzQnKW4Fy10dbHye41hufAbcSEodPeUQeDQpkFInlz-6~KqRg58WCTYbmsEERQykfpTSf61H7QV8nQWWLqidpIr0XTfBv6szaKhgguxMUhnRIqiia9XbNdejT8RbpGHIOJI1OUQ2agIimA8JeKHZeWbCFpmKUCDn-WGPlbKHdoSybPtrE5g2MEmN8C6r77Bl77ZEoW3u047bqAKX1dv~p3oltYeETJLJ84sZJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
