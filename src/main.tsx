import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import App from "./App";
import { AppWrapper } from "./AppWrapper";
import { UsersPage, loader as usersLoader } from "./Users/UsersPage";
import { UserPage, loader as userLoader } from "./Users/UserPage";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppWrapper />}>
      <Route path="/">
        <Route element={<App />} index />
        <Route path="users">
          <Route element={<UsersPage />} index loader={usersLoader} />
          <Route path=":userId" element={<UserPage />} loader={userLoader} />
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
