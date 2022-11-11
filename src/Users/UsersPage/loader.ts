import { json } from "react-router-dom";

const USERS = [
  { name: "Daryl", id: "1" },
  { name: "Maggie", id: "2" },
  { name: "Carol", id: "3" },
];

const awaitTimeout = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const loader = async () => {
  const getUsers = async () => {
    await awaitTimeout(300);
    return USERS;
  };

  const users = await getUsers();
  return json({ users });
};
