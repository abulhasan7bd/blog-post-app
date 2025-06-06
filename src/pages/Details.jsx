import { MessageCircleOff } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const [emailf] = useState("abulhasan@gmail.com");
  const [emailb] = useState("abulhasan@gmail.com");
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

  const handleUpdate = () => {
    navigate(`/update-blog/333}`); // dynamic route with blog ID
  };

  return (
    <div className="font-Poppins">
      {/* profile description  */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          How Viruses Shape Health, Science, and Survival.
        </h1>

        <div className="mt-6 text-gray-600 text-sm grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Left column: author info */}
          <div className="flex items-center space-x-3">
            <img
              src="https://img.freepik.com/premium-photo/casual-young-man-shirt_146377-2992.jpg?uid=R90026751&ga=GA1.1.1322734213.1735572178&semt=ais_items_boosted&w=740"
              alt="Author"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium text-black">Adarsh Gupta</span>
            <button className="px-3 py-0.5 border border-gray-300 rounded-full hover:bg-red-300 transition text-sm">
              Follow
            </button>
          </div>

          {/* Right column: read time and date */}
          <div className="flex items-center justify-start md:justify-end space-x-2">
            <span>4 min read</span>
            <span>•</span>
            <span>Apr 21, 2025</span>
          </div>
        </div>

        {/* blog cover photo */}
        <div className="mt-[1.3rem]">
          <div className="max-w-4xl mx-auto">
            <img
              className="w-full mx-auto h-[23rem] object-cover rounded-md"
              src="https://img.freepik.com/free-vector/essential-vitamin-mineral-complex_23-2148487926.jpg?uid=R90026751&ga=GA1.1.1322734213.1735572178&semt=ais_items_boosted&w=740"
              alt=""
            />
          </div>
        </div>
        {/* title box 1 */}
        <div className="mt-4   ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            I Want to Live Here Like a Beautiful Virus Addiction
          </h2>
          <p className="mt-2 md:mt-3 text-justify text-base md:text-lg lg:text-xl leading-relaxed">
            Viruses are much more than just agents of disease. They have shaped
            human history, survival, and the very science we depend on today.
            While some viruses like influenza, HIV, or coronavirus have caused
            widespread illness, others have become tools for innovation in
            medicine and genetics. Through the study of viruses, scientists have
            developed life-saving vaccines, antiviral treatments, and even
            advanced gene therapy techniques that fight cancer and genetic
            disorders. Viruses also play a surprising role in evolution by
            transferring genetic material between species. In the modern world,
            understanding viruses is key not only for health and survival, but
            for unlocking future scientific breakthroughs.
          </p>
        </div>

        {/* title box 2 */}
        <div className="mt-6 ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            What We Should Do: A True Test of Awareness in Crisis
          </h2>
          <p className="mt-2 md:mt-3 text-justify text-base md:text-lg lg:text-xl leading-relaxed">
            In these challenging times, we face constant crises, diseases, and
            rapid changes in technology. What role should we play as
            individuals, families, and society? Awareness, empathy, and
            responsible behavior are more important now than ever before. This
            article discusses what we should do in the current reality and why
            it matters for a better future.
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
            {emailf === emailb ? (
              <button onClick={handleUpdate} className="btn btn-warning mt-4">
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

          {emailb === emailf ? (
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
