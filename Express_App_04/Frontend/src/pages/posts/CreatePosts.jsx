import React, { useState } from "react";

const CreatePosts = () => {
  const [input, setInput] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmission}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl"
      >
        <h2 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
          Create a Post
        </h2>
        <div className="mb-5 ">
          <label
            className="block text-sm font-medium text-slate-700 mb-2"
            htmlFor="caption"
          >
            Caption
          </label>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            id="caption"
            type="text"
            placeholder="Enter caption"
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-sm font-medium text-slate-700 mb-2"
            htmlFor="file"
          >
            Select file
          </label>
          <input
            id="file"
            type="file"
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-700 file:rounded-full file:border-0 file:bg-indigo-600 file:px-4 file:py-2 file:text-white file:transition file:hover:bg-indigo-700"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-2xl"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePosts;
