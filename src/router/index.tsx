import React from "react";

import { createBrowserRouter } from "react-router-dom";
import componentLogger from "../utils/componentLogger";
import PostDetailPage from "../pages/PostDetailPage";
import PostsPage from "../pages/PostsPage";
import DefaultLayout from "../layout/DefaultLayout";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";

const propsmessage = "Hello from ";

const PostsPageWithLogger = componentLogger(PostsPage, propsmessage);
const PostDetailPageWithLogger = componentLogger(PostDetailPage, propsmessage);

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostsPageWithLogger />,
      },
      {
        path: "/post/:id",
        element: <PostDetailPageWithLogger />,
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
export default router;
