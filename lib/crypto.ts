import Cryptr from "cryptr";

export const cryptr = new Cryptr(
  "/FuIXNJhfIKTGHsFe7uE4mJwz4vM9ZpVWpi724QG13Y=\n",
  {
    encoding: "base64",
    pbkdf2Iterations: 10000,
    saltLength: 10,
  },
);
