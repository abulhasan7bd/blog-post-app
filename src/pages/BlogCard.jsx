import React, { use } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const BlogCard = ({ blog }) => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const handleWishList = (wishListItem) => {
    console.log(wishListItem)
    const wishListEmail = user.email;
    wishListItem.wishListEmail = wishListEmail;
 
 
    fetch("http://localhost:5000/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wishListItem),
    })
      .then((res) => {
        console.log(res);
        navigate("/wishlist");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 font-Poppins ">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Section */}
        <div className="relative w-full md:w-1/3">
          <img
            src={blog.imgUrl}
            alt={blog.title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Text Content Section */}
        <div className="md:w-2/3">
          <p className="text-sm text-gray-500 mb-1">{blog.time}</p>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {blog.time}
          </h2>

          {/* Author line */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-[2px] bg-yellow-500" />
            <p className="text-sm font-medium uppercase text-gray-600">
              By {blog.userName}
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm">{blog.shortDescription}</p>
          <div className="btns flex gap-[2rem] mt-[1rem]">
            <Link to={`/details/${blog._id}`} state={{ blog }}>
              <button className="btn  capitalize bg-red-300">details </button>
            </Link>
            <button
              onClick={() => handleWishList(blog)}
              className="btn  capitalize bg-red-300 border-none outline-none"
            >
              wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
