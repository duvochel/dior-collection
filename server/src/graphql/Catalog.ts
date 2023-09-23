import { extendType, list, objectType } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen";
import { productListMock } from "../mocks/productListMock";

let products: NexusGenObjects["Product"][] = productListMock;

let catalog: NexusGenObjects["Catalog"] = {
  id: "main_catalog",
  products,
  count: products.length,
};

export const Catalog = objectType({
  name: "Catalog",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.int("count");
    t.nonNull.field("products", {
      type: list("Product"),
    });
  },
});

export const CatalogQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("catalog", {
      type: "Catalog",
      resolve(parent, args, context, info) {
        return catalog;
      },
    });
  },
});
