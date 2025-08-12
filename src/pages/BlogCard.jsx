import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const BlogCard = ({ blog }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleWishList = (wishListItem) => {
    const wishListEmail = user.email;
    wishListItem.wishListEmail = wishListEmail;
    fetch("https://abulhasem-blog-server.vercel.app/wishlist", {
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
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#F8FAFC] rounded-lg shadow-md p-6 mb-6 font-Poppins border border-gray-200"
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Section */}
        <div className="relative w-full md:w-1/3">
          <PhotoProvider>
            <PhotoView src={blog.imgUrl}>
              <img
                src={blog.imgUrl}
                alt={blog.title}
                className="w-full h-full object-cover rounded-md cursor-pointer 
              transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-black/30"
              />
            </PhotoView>
          </PhotoProvider>
        </div>

        {/* Text Content Section */}
        <div className="md:w-2/3">
          <p className="text-sm text-gray-500 mb-1">{blog.time}</p>
          <h2 className="text-xl font-semibold text-[#1E293B] mb-2">
            {blog.title}
          </h2>

          {/* Author line */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-[2px] bg-[#38BDF8]" />
            <p className="text-sm font-medium uppercase text-gray-600">
              By {blog.userName}
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm">{blog.shortDescription}</p>

          {/* Buttons */}
          <div className="btns flex gap-[2rem] mt-[1rem]">
            <Link to={`/details/${blog._id}`}>
              <button className="btn capitalize bg-[#38BDF8] text-white border-none hover:bg-[#1E293B]">
                Details
              </button>
            </Link>
            <button
              onClick={() => handleWishList(blog)}
              className="btn capitalize bg-[#1E293B] text-white border-none hover:bg-[#38BDF8]"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
