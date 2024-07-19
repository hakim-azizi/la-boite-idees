import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Idea from "./pages/Idea";
import BadIdea from "./pages/BadIdea";
import GoodIdea from "./pages/GoodIdea";
import Login from "./pages/Login";
import Register from "./pages/Register";

import User from "./pages/User";
import HomeUser from "./pages/user/HomeUser";
import AddBadIdea from "./pages/user/AddBadIdea";
import UpdateBadIdea from "./pages/user/UpdateBadIdea";
import AddGoodIdea from "./pages/user/AddGoodIdea";
import UpdateGoodIdea from "./pages/user/UpdateGoodIdea";
import AddUser from "./pages/user/AddUser";
import UpdateUser from "./pages/user/UpdateUser";

// Fonction pour obtenir les paramètres de l'URL

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "idea",
        element: <Idea />,
        loader: () =>
          fetch(`${import.meta.env.VITE_API_URL}/api/ideas/rand`).then((response) =>
            response.json()
          ),
      },
      {
        path: "bad-idea",
        element: <BadIdea />,
        loader: () =>
          fetch(`${import.meta.env.VITE_API_URL}/api/bad-ideas/rand`).then(
            (response) => response.json()
          ),
      },
      {
        path: "good-idea",
        element: <GoodIdea />,
        loader: () =>
          fetch(`${import.meta.env.VITE_API_URL}/api/good-ideas/rand`).then(
            (response) => response.json()
          ),
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      /* {
        path: "about",
        element: <About />,
      }, */
      {
        path: "user/",
        element: <User />,
        children: [
          {
            path: "",
            element: <HomeUser />,
          },
          {
            path: "add-bad-idea",
            element: <AddBadIdea />,
            loader: () =>
              fetch(`${import.meta.env.VITE_API_URL}/api/ideas/idea-id`).then(
                (response) => response.json()
              ),
          },
          {
            path: "update-bad-idea",
            element: <UpdateBadIdea />,
            loader: () =>
              fetch(`${import.meta.env.VITE_API_URL}/api/bad-ideas/`).then(
                (response) => response.json()
              ),
          },
          {
            path: "add-good-idea",
            element: <AddGoodIdea />,
            loader: () =>
              fetch(`${import.meta.env.VITE_API_URL}/api/ideas/idea-id`).then(
                (response) => response.json()
              ),
          },
          {
            path: "update-good-idea",
            element: <UpdateGoodIdea />,
            loader: () =>
              fetch(`${import.meta.env.VITE_API_URL}/api/good-ideas/`).then(
                (response) => response.json()
              ),
          },
          {
            path: "add-user",
            element: <AddUser />,
          },
          {
            path: "update-user",
            element: <UpdateUser />,
            loader: () =>
              fetch(`${import.meta.env.VITE_API_URL}/api/users/`).then(
                (response) => response.json()
              ),
          },
        ],
      },
    ],
  },
]);

export default router;
