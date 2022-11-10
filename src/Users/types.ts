export type User = {
  name: string;
  id: string;
  age: number;
  favouriteColor: string;
};

export type Users = Pick<User, "name" | "id">[];
