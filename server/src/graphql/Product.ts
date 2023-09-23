import { extendType, objectType } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen";

export const Product = objectType({
  name: "Product",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("name");
    t.nonNull.string("description");
    t.nonNull.int("price");
    t.field("image", { type: "Image" });
  },
});

// let products: NexusGenObjects["Product"][] = [
//   {
//     id: "0",
//     name: "MEN SHIRT",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     price: 19000,
//   },
//   {
//     id: "1",
//     name: "LADY BAG",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     price: 3000,
//   },
// ];

// export const ProductQuery = extendType({
//   type: "Query",
//   definition(t) {
//     t.nonNull.list.nonNull.field("catalog", {
//       type: "Product",
//       resolve(parent, args, context, info) {
//         return products;
//       },
//     });
//   },
// });
