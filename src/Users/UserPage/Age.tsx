import { useLoaderData } from "react-router-dom";

import type { User } from "../types";

type LoaderData = {
  user: User;
};

export const Age = () => {
  const { user } = useLoaderData() as LoaderData;

  return <p>Age: {user.age}</p>;
};
