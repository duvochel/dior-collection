const jwt = require("jsonwebtoken");
const { APP_SECRET } = require("../utils");

async function login(parent, args, context, info) {
  const user = {
    id: 1,
    email: "customer@email.com",
    password: "pwd",
  };

  if (!user) {
    throw new Error("No such user found");
  }

  const valid = args.password === user.password;

  if (!valid) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
}

module.exports = {
  login,
};
