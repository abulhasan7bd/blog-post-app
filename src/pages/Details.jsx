import { MessageCircleOff } from "lucide-react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const data = useLocation();
  const blog = data.state.blog;
  console.log(blog)
  const [userEmail] = useState(blog.userEmail);
  const [blogEmail] = useState(blog.userEmail);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    {
      name: "রিফাত হোসেন",
      avatar: "https://i.pravatar.cc/150?img=3",
      comment: "দারুণ পোস্ট! অনেক কিছু শিখলাম। ধন্যবাদ।",
    },
    {
      name: "তামান্না আফরোজ",
      avatar: "https://i.pravatar.cc/150?img=5",
      comment: "আপনার লেখার ধরন খুব ভালো লাগে। অপেক্ষায় থাকবো পরের লেখার জন্য।",
    },
    {
      name: "জুবায়ের ইসলাম",
      avatar: "https://i.pravatar.cc/150?img=8",
      comment: "খুব সুন্দরভাবে ব্যাখ্যা করেছেন। এইভাবে চালিয়ে যান!",
    },
  ]);

  const handlePost = () => {
    if (comment.trim()) {
      setComments([comment, ...comments]);
      setComment("");
    } else {
      alert("Comment cannot be empty!");
    }
  };

  const handleUpdate = (blog) => {
    navigate(`/update-blog/${blog._id}`,{state:blog});
  };

  return (
    <div className="font-Poppins">
      {/* profile description  */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          {blog.heading}
        </h1>

        <div className="mt-6 text-gray-600 text-sm grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Left column: author info */}
          <div className="flex items-center space-x-3">
            <img
              src={blog.userPhoto}
              alt="Author"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium text-black">{blog.userName}</span>
            <button className="px-3 py-0.5 border border-gray-300 rounded-full hover:bg-red-300 transition text-sm">
              Follow
            </button>
          </div>

          {/* Right column: read time and date */}
          <div className="flex items-center justify-start md:justify-end space-x-2">
            <span>{blog.red} min read</span>
            <span>•</span>
            <span>{blog.time}</span>
          </div>
        </div>

        {/* blog cover photo */}
        <div className="mt-[1.3rem]">
          <div className="max-w-4xl mx-auto">
            <img
              className="w-full mx-auto h-[23rem] object-cover rounded-md"
              src={blog.imgUrl}
              alt=""
            />
          </div>
        </div>
        {/* title box 1 */}
        <div className="mt-4   ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            {blog.titleL}
          </h2>
          <p className="mt-2 md:mt-3 text-justify text-base md:text-lg lg:text-xl leading-relaxed">
            {blog.longDescription}
          </p>
        </div>

        {/* title box 2 */}
        <div className="mt-6 ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            {blog.titleS}
          </h2>
          <p className="mt-2 md:mt-3 text-justify text-base md:text-lg lg:text-xl leading-relaxed">
            {blog.shortDescription}
          </p>
        </div>
      </div>

      {/* like comment section  */}
      <div className="flex max-w-4xl mx-auto px-4 py-8items-center justify-between border-t border-b py-4  text-gray-600 text-sm">
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-1 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M14 9V5a3 3 0 10-6 0v4H5.5A2.5 2.5 0 003 11.5v6A2.5 2.5 0 005.5 20H19a2 2 0 002-2v-7a2 2 0 00-2-2h-5z" />
            </svg>
            <span>2.7K</span>
          </button>

          <button className="flex items-center space-x-1 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
            </svg>
            <span>105</span>
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <div>
            {/* Conditional Update Button */}
            {userEmail === blogEmail ? (
              <button
                onClick={() => handleUpdate(blog)}
                className="btn btn-warning mt-4"
              >
                Update Blog
              </button>
            ) : (
              <button className="hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 12v3a1 1 0 001 1h3m10-5h-3a1 1 0 00-1 1v3m-4 4h6m2 0a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h2" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* comment profile   */}
      <div className="max-w-4xl mx-auto mt-[1rem]">
        <div className="flex justify-between items-center">
          <h2 className="text-[1.3rem] font-[600]">
            Comments ({comments.length})
          </h2>
          <button className="cursor-pointer">
            <MessageCircleOff />
          </button>
        </div>
      </div>
      {/* comment input  */}
      <div className="max-w-4xl mx-auto  p-4">
        <div className="flex items-start flex-col space-x-3">
          <div className="flex gap-[1rem] items-center">
            <img
              src="https://i.pravatar.cc/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <p className="text-sm font-semibold mb-1">আলোচনা অতিথি</p>
          </div>

          {userEmail === blogEmail ? (
            <p
              style={{ color: "red" }}
              className="mt-1.5 w-full p-2 flex items-center justify-center rounded bg-gray-100 focus:outline-none h-[100px] resize-none focus:ring-2 focus:ring-blue-500"
            >
              Can not comment on own blog
            </p>
          ) : (
            <div className="flex flex-col  gap-2 mt-2 w-full">
              <textarea
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="What are your thoughts?"
                className="w-full p-2 rounded bg-gray-100 focus:outline-none h-[100px] resize-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                className="bg-blue-600 text-white   py-1 rounded hover:bg-blue-700 w-fit px-[2rem] ml-auto cursor-pointer"
                onClick={handlePost}
              >
                Post
              </button>
            </div>
          )}
        </div>
      </div>

      {/* current comment  */}
      <div className="max-w-4xl my-[1.3rem] mx-auto p-4">
        <div className="mt-4 space-y-2">
          {comments.map((c, index) => (
            <div
              key={index}
              className="bg-gray-100 p-3 rounded shadow-sm flex items-start space-x-3"
            >
              <img
                src={c.avatar}
                alt={c.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">{c.name}</p>
                <p className="text-gray-800 text-sm">{c.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
