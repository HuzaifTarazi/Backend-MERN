import React from "react";
import { Link, Outlet } from "react-router";

const PostsLayout = () => {
  return (
    <div className="bg-gray-800 min-h-screen text-white p-5">
      <div className="grid gap-6 md:grid-cols-2 ">
        <Link to={"create-post"}>
          <div className="rounded-lg border border-white/20 bg-white/5 p-6 hover:bg-gray-800 active:bg-gray-900" >
            <h2 className="text-xl font-semibold mb-3">Create Post</h2>
            <p className="text-sm text-white/70">
              Route to the create post page or form.
            </p>
          </div>
        </Link>
        <Link to={"post-feed"}>
          <div className="rounded-lg border border-white/20 bg-white/5 p-6 hover:bg-gray-800 active:bg-gray-900">
            <h2 className="text-xl font-semibold mb-3">Post Feed</h2>
            <p className="text-sm text-white/70">
              Route to the post feed or list of posts.
            </p>
          </div>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default PostsLayout;
