import { decode } from "jsonwebtoken";

export const getUser = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return decode(user.token);
};
