import { useState, useEffect, useCallback } from "react";

type User = {
  name: string;
  id: string;
  age: number;
  favouriteColor: string;
};

const USERS = [
  { name: "Daryl", id: "1", age: 46, favouriteColor: "red" },
  { name: "Maggie", id: "2", age: 35, favouriteColor: "blue" },
  { name: "Carol", id: "3", age: 51, favouriteColor: "green" },
];

const awaitTimeout = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const useGetUser = (userId: string) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>();

  const loadUser = useCallback(async () => {
    await awaitTimeout(300);
    const user = USERS.find((u) => u.id === userId);
    setUser(user);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadUser;
  }, [loadUser]);

  return { user, loading };
};
