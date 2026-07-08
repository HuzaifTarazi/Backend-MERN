import React, { useEffect, useState } from "react";
import axios from "axios";

const PostFeed = () => {
  const [posts, setPosts] = useState([]);

  const DeletePost = async (id) => {
    await axios.delete(`http://localhost:3000/delete-post/${id}`);
  };

  useEffect(() => {
    const controller = new AbortController();
    const getApi = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts-feed", {
          signal: controller.signal,
        });

        setPosts(response.data.posts);
      } catch (err) {}
    };
    getApi();

    return () => {
      controller.abort();
    };
  }, [DeletePost]);

  return (
    <>
      <div className="max-w-2xl my-10 mx-auto">
        <h1 className="text-4xl font-bold  mb-8 text-white ">Post Feed</h1>

        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                {post.imageUrl && (
                  <img
                    src={post.imageUrl}
                    alt={post._id}
                    className="w-full rounded-lg object-cover mb-4 max-h-96"
                  />
                )}
                <p className="text-gray-800 text-base leading-relaxed">
                  {post.imageCaption}
                </p>
                <button
                  type="button"
                  onClick={() => DeletePost(post._id)}
                  className="mt-4 inline-flex items-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostFeed;
