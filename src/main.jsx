import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AuthProvider from "./context/AuthProvider";
import MainLayout from "./layouts/MainLayout";
import Details from "./pages/Details";
 import AllBlogs from "./components/allblog/AllBlogs";
import AddBlogs from "./pages/AddBlogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/all-blogs",   element: <AllBlogs /> },
      { path: "/details/:id", element: <Details /> },
      { path: "/blog/update/:id", element: <Details /> },
      { path: "/add-blog", element: <AddBlogs /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
