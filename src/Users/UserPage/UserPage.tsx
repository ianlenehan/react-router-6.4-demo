import { Link, useParams } from "react-router-dom";

import { Age } from "./Age";
import { useGetUser } from "./useGetUser";

export const UserPage = () => {
  const { userId = "" } = useParams();
  const { user, loading } = useGetUser(userId);

  if (loading) {
    return <div>Loading user...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>User Page</h1>
      <Link to="/users">Back to Users</Link>
      <h2>{user.name}</h2>
      <Age age={user.age} />
      <p>Favourite colour: {user.favouriteColor}</p>
    </div>
  );
};
