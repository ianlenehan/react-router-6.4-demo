import { Link, useLoaderData } from "react-router-dom";

import { Age } from "./Age";
import type { User } from "../types";

type LoaderData = {
  user: User;
};

export const UserPage = () => {
  const { user } = useLoaderData() as LoaderData;

  return (
    <div>
      <h1>User Page</h1>
      <Link to="/users">Back to Users</Link>
      <h2>{user.name}</h2>
      <Age />
      <p>Favourite colour: {user.favouriteColor}</p>
    </div>
  );
};
