import { useState, useEffect } from "react";

type User = {
  name: string;
  id: string;
};

const USERS = [
  { name: "Daryl", id: "1" },
  { name: "Maggie", id: "2" },
  { name: "Carol", id: "3" },
];

export const useGetUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    setTimeout(() => {
      setUsers(USERS);
      setLoading(false);
    }, 500);
  }, []);

  return { users, loading };
};
