import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import { useLoaderData } from "react-router-dom";

const AllBlogs = () => {
  const dataX = useLoaderData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const categories = [
    "Health",
    "Science",
    "Technology",
    "Education",
    "Lifestyle",
  ];

  // allblog
  const [blogList, setBoglist] = useState(dataX);

  
  const fetchBlogs = () => {
    if (!search && !category) return;

    const query = encodeURIComponent(search || category);

    fetch(`https://abulhasem-blog-server.vercel.app/blogs?search=${query}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch blogs");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBoglist(data);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err.message);
      });
  };

  // side effect
  useEffect(() => {
    fetchBlogs();
  }, [search, category]);

  return (
    <div>
     <div className="w-[90%] max-w-4xl mx-auto mt-2 rounded-2xl shadow-lg p-6 grid gap-4
                sm:grid-cols-1
                md:grid-cols-2
                ">
  <input
    type="text"
    placeholder="Search by blog title..."
    className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500 transition"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500 transition"
  >
    {categories.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ))}
  </select>
</div>


      <div className="flex flex-col items-center gap-4 p-4 text-black shadow rounded-xl">
        <h2 className="font-Poppins text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] font-[600] text-left pl-[1rem] w-full">
          Showcase of all project : {blogList.length}
        </h2>
        <div className="grid lg:grid-cols-2 gap-[3rem]  ">
          {blogList.map((item) => {
            return <Blog blog={item} key={item._id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
