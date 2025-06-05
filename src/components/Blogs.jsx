import React from "react";
import BlogCard from "../pages/BlogCard";
const Blogs = ( ) => {
  const dummyBlog = {
    id: Date.now().toString() + Math.random().toString(36).substring(2),

    image:
      "https://img.freepik.com/premium-photo/full-length-young-man-with-ball-grass_1048944-25301156.jpg?uid=R90026751&ga=GA1.1.1322734213.1735572178&semt=ais_items_boosted&w=740",
    title: "Women in Triathlon Unite During the COVID-19",
    date: "June 11, 2021",
    author: "Chris Foster",
    description:
      "A strong thread of motivation connects the women’s triathlon community around the world. The World Triathlon and the ITU Women’s Committee introduces these...",
  };
  return (
    <div className="mt-[3rem] mx-[2%]">
      <h2 className="font-Poppins text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] font-[600]">
Thsi is ikdikd
      </h2>
      <div className="grid lg:grid-cols-2 gap-[3rem]">
        <BlogCard dummyBlog={dummyBlog} />
        <BlogCard dummyBlog={dummyBlog} />
        <BlogCard dummyBlog={dummyBlog} />
        <BlogCard dummyBlog={dummyBlog} />
        <BlogCard dummyBlog={dummyBlog} />
        <BlogCard dummyBlog={dummyBlog} />
      </div>
    </div>
  );
};

export default Blogs;
