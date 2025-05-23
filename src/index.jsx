import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./route/Route";
import { BeachProvider } from "./context/beach_context";
import { FilterProvider } from "./context/filter_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BeachProvider>
      <FilterProvider>
        <RouterProvider router={router} />
      </FilterProvider>
    </BeachProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
