import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import PostsLayout from "../layout/PostsLayout";
import CreatePosts from "../pages/posts/CreatePosts";
import Posts from "../pages/posts/Posts";
import PostFeed from "../pages/posts/PostFeed";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "posts",
        element: <PostsLayout />,
        children: [
          { index: true, element: <Posts /> },
          { path: "create-post", element: <CreatePosts /> },
          { path: "post-feed", element: <PostFeed /> },
        ],
      },
    ],
  },
]);
