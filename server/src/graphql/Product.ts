import { objectType } from "nexus";

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
