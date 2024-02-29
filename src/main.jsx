import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import Review from "./pages/Review.jsx";
import UserList from "./pages/UserList.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import EbookSite from "./pages/EbookSite.jsx";
import EbookContact from "./pages/EbookContact.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/css/bootstrap.css";
import "./styles/css/styles.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/review",
    element: <Review />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/userlist",
    element: <UserList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/e-book",
    element: <EbookSite />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/e-book/contact",
    element: <EbookContact />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
