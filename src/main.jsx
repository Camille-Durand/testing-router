import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Accueil from "./accueil.jsx";
import Gite from "./gite.jsx";
import Region from "./region.jsx";
import Reservations from "./reservations.jsx";
import Contact from "./contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },

  {
    path: "/gite",
    element: <Gite />,
  },
  {
    path: "/region",
    element: <Region />,
  },
  {
    path: "/reservations",
    element: <Reservations />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);