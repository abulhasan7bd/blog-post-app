import React from "react";
import Blog from "./Blog";
import { useLoaderData } from "react-router-dom";

const AllBlogs = () => {
  const dataX = useLoaderData();

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-8">
      {/* Filters */}

      {/* Showcase */}
      <div className="flex flex-col items-center gap-4 p-4 mt-6">
        <h2 className="font-Poppins text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] font-[600] text-[#1E293B] w-full text-left pl-[1rem]">
          Showcase of all project : {dataX.length}
        </h2>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-[3rem] justify-center items-center">
          {dataX.map((item) => (
            <div
              key={item._id}
              className="bg-white border border-[#38BDF8] shadow-lg hover:shadow-[#38BDF8]/50 
                         rounded-xl transition-shadow duration-300"
            >
              <Blog blog={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
