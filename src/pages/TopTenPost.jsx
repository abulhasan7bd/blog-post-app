import React from "react";

const TopTenPost = ({ posts }) => {


  const wordLength = (description) => {
    let wordSlice = description.split(" ").length;
    return wordSlice;
  };

  const topPost = [...posts];
  const shortData = topPost
    .sort((a, b) => wordLength(b.longDescription) - wordLength(a.longDescription))
    .slice(0, 10);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Top 10 Blog Posts (by Word Count)
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border-b">#</th>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">Title</th>
              <th className="px-4 py-2 border-b">Word Count</th>
            </tr>
          </thead>
          <tbody>
            {shortData.map((post, index) => (
              <tr key={post.id || index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{index + 1}</td>
                <td className="px-4 py-2 border-b">{post.name}</td>
                <td className="px-4 py-2 border-b">{post.email}</td>
                <td className="px-4 py-2 border-b">{post.title}</td>
                <td className="px-4 py-2 border-b">
                  {wordLength(post.longDescription)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopTenPost;
