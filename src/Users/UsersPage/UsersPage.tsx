import { Link, useLoaderData } from "react-router-dom";

import { UsersCount } from "./UsersCount";
import type { Users } from "../types";

type LoaderData = {
  users: Users;
};

export const UsersPage = () => {
  const { users } = useLoaderData() as LoaderData;

  return (
    <div className="users-container">
      <h1>Users Page</h1>
      <Link to="/">Back to Home</Link>
      <p>List of Users</p>
      <div className="users-list">
        {users?.map((user) => (
          <Link className="user-list-item" key={user.id} to={user.id}>
            {user.name}
          </Link>
        ))}
      </div>

      <UsersCount />
    </div>
  );
};
