import React, { useEffect, useState } from "react";
import axios from "axios";

const PostFeed = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const controller = new AbortController();
    const getApi = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts", {
          signal: controller.signal,
        });

        setPosts(response.data.posts);
        console.log(response.data.posts)
      } catch (err) {
        console.error(err);
      }
    };
    getApi();

    return () => {
      controller.abort();
    };
  }, []);

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
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostFeed;
