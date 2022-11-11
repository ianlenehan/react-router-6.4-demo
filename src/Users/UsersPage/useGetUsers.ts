import { useState, useEffect, useCallback } from "react";

type User = {
  name: string;
  id: string;
};

const USERS = [
  { name: "Daryl", id: "1" },
  { name: "Maggie", id: "2" },
  { name: "Carol", id: "3" },
];

const awaitTimeout = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const useGetUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>();

  const loadUsers = useCallback(async () => {
    await awaitTimeout(300);
    setUsers(USERS);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return { users, loading };
};
