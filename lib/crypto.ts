import Cryptr from "cryptr";

export const cryptr = new Cryptr(process.env.SECRET_KEY as string, {
  encoding: "base64",
  pbkdf2Iterations: 10000,
  saltLength: 10,
});
