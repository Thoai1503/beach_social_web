import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main";
import Package from "../pages/Package";
import SingleBeach from "../pages/SingleBeach";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/packages",
        element: <Package />,
      },
      {
        path: "singlebeach/:id",
        element: <SingleBeach />,
      },
    ],
  },
]);
