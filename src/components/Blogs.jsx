import React from "react";
import BlogCard from "../pages/BlogCard";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const allblog = useLoaderData();
  console.log("home",allblog)
  return (
  <div className="mt-[3rem] mx-[2%]">
  <h2 className="font-Poppins text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] font-[600]">
    Recently Published Blogs 
  </h2>
  <div className="grid lg:grid-cols-2 gap-[3rem]">
    {[...allblog].reverse().slice(0, 6).map((item, id) => {
      return <BlogCard blog={item} key={id} />;
    })}
  </div>
</div>

  );
};

export default Blogs;
