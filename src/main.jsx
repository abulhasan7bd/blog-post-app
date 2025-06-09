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
import UndateBlog from "./pages/UndateBlog";
import FeatureBlogs from "./components/FeatureBlogs";
import WishList from "./components/WishList";
import Login from "./components/auth/Login";
import Signin from "./components/auth/Signin";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        loader: () => {
          return fetch("http://localhost:5000/all-blogs").then((res) =>
            res.json()
          );
        },
        element: <Home />,
      },
      {
        path: "/all-blogs",
        loader: () => {
          return fetch("http://localhost:5000/all-blogs").then((res) =>
            res.json()
          );
        },
        element: <AllBlogs />,
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singleblog/${params.id}`),
        element: <Details />,
      },
      { path: "/blog/update/:id", element: <Details /> },
      { path: "*", element: <NotFound /> },
      {
        path: "/add-blog",
        element: (
          <PrivateRoute>
            <AddBlogs />
          </PrivateRoute>
        ),
      },
      { path: "/update-blog/:id", element: <UndateBlog /> },
      { path: "/featured-blogs", element: <FeatureBlogs /> },

      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <WishList />
          </PrivateRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Signin /> },
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
