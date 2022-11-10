import { useLoaderData } from "react-router-dom";

import type { Users } from "../types";

type LoaderData = {
  users: Users;
};

export const UsersCount = () => {
  const { users } = useLoaderData() as LoaderData;

  return <div>{users.length} users in the list.</div>;
};
