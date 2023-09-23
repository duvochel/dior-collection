import { extendType, nonNull, objectType, stringArg } from "nexus";
import { sign } from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

import { APP_SECRET } from "../utils/auth";

export const AuthPayload = objectType({
  name: "AuthPayload",
  definition(t) {
    t.nonNull.string("token");
    t.nonNull.field("user", {
      type: "User",
    });
  },
});

export const AuthMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("login", {
      type: "AuthPayload",
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(parent, args) {
        const mockPassword = await bcrypt.hash("pwd", 10);
        const mockErrorMessage = "Your login or password are incorrect";

        const mockUser = {
          id: "1",
          email: "customer@email.com",
          password: mockPassword,
        };

        if (!args.email) {
          throw new Error(mockErrorMessage);
        }

        const valid = await bcrypt.compare(args.password, mockUser.password);

        if (!valid) {
          throw new Error(mockErrorMessage);
        }

        const token = sign({ userId: mockUser.id }, APP_SECRET);

        return {
          token,
          user: mockUser,
        };
      },
    });
  },
});
