import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import Error from "./routes/error";
import Contact from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, //component shown in the path mentioned
    errorElement: <Error />, //component shown if no route matched
    children: [
      {
        path: "/contacts",
        element: <Contact />,
      },
    ],
  },
  // {
  //   path: "/contacts",
  //   element: <Contact />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
