import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import App from "./App";
import { UsersPage } from "./Users/UsersPage/UsersPage";
import { UserPage } from "./Users/UserPage/UserPage";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<App />} index />
      <Route path="users">
        <Route element={<UsersPage />} index />
        <Route path=":userId" element={<UserPage />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
