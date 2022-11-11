import { json } from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";

const USERS = [
  { name: "Daryl", id: "1", age: 46, favouriteColor: "red" },
  { name: "Maggie", id: "2", age: 35, favouriteColor: "blue" },
  { name: "Carol", id: "3", age: 51, favouriteColor: "green" },
];

const awaitTimeout = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const getUser = async () => {
    await awaitTimeout(300);
    return USERS.find((u) => u.id === params.userId);
  };

  const user = await getUser();
  return json({ user });
};
