import { hash, compare } from "bcryptjs";

const hashedPassword = async (password) => {
  const hashed = await hash(password, 12);
  return hashed;
};

const verifyPassword = async (password, hashPassword) => {
  const isValid = await compare(password, hashPassword);
  return isValid;
};

export { hashedPassword, verifyPassword };
