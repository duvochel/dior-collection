import { objectType } from "nexus";

export const Image = objectType({
  name: "Image",
  definition(t) {
    t.nonNull.string("desktop");
    t.nonNull.string("tablet");
    t.nonNull.string("mobile");
    t.nonNull.string("mini");
  },
});
