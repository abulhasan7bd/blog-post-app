import React from "react";
import { Link } from "react-router-dom";

const WishListPage = ({ blog, getId }) => {
  const { _id, imgUrl, titleS, date, userName, shortDescription } = blog;

  const handleRemoveWishList = () => {
    getId(_id);
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 font-Poppins">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image Section */}
        <div className="relative    w-full md:w-1/3">
            <img
              src={imgUrl}
              alt={titleS}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Text Content Section */}
          <div className="md:w-2/3">
            <p className="text-sm text-gray-500 mb-1">{date}</p>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {titleS}
            </h2>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-[2px] bg-yellow-500" />
              <p className="text-sm font-medium uppercase text-gray-600">
                By {userName}
              </p>
            </div>

            <p className="text-gray-600 text-sm">{shortDescription}</p>

            <div className="btns flex gap-8 mt-4">
              <Link to={`/details/${_id}`}>
                <button className="px-4 py-2 bg-red-300 text-white rounded hover:bg-red-400 transition">
                  Details
                </button>
              </Link>
              <button
                onClick={handleRemoveWishList}
                className="px-4 py-2 bg-red-300 text-white rounded hover:bg-red-400 transition"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListPage;
