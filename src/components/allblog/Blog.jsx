import React from "react";
import { Link } from "react-router-dom";

const Blog = ({blog}) => {
 
  return (
    <div className="mt-[3rem] mx-[2%]">
      <h2 className="font-Poppins text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] font-[600]">
        This is project
      </h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 font-Poppins ">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image Section */}
          <div className="relative w-full md:w-1/3">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Text Content Section */}
          <div className="md:w-2/3">
            <p className="text-sm text-gray-500 mb-1">{blog.date}</p>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {blog.title}
            </h2>

            {/* Author line */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-[2px] bg-yellow-500" />
              <p className="text-sm font-medium uppercase text-gray-600">
                By {blog.author}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm">{blog.description}</p>
            <div className="btns flex gap-[2rem] mt-[1rem]">
              <Link to={`/details/${blog.id}`}>
                <button className="btn  capitalize bg-red-300">details </button>
              </Link>
              <button className="btn  capitalize bg-red-300 border-none outline-none">
                wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
