import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import { useLoaderData } from "react-router-dom";

const AllBlogs = () => {
  const dataX = useLoaderData();
  console.log(dataX, "dd");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState(""); // Sorting state
  const categories = [
    "All",
    "Health",
    "Science",
    "Technology",
    "Education",
    "Lifestyle",
  ];

  // All blog list
  const [blogList, setBlogList] = useState(dataX);
  const [filteredBlogs, setFilteredBlogs] = useState(dataX);

  // Fetch blogs from API when search or category changes
  const fetchBlogs = () => {
    if (!search && (!category || category === "All")) {
      setBlogList(dataX);
      return;
    }

    const query = encodeURIComponent(search || category);

    fetch(`https://abulhasem-blog-server.vercel.app/blogs?search=${query}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch blogs");
        return res.json();
      })
      .then((data) => {
        setBlogList(data);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err.message);
      });
  };

  // Fetch when search or category changes
  useEffect(() => {
    fetchBlogs();
  }, [search, category]);

  console.log(dataX);
  // Apply sorting & filtering locally
  useEffect(() => {
    console.log(sort);
    let updatedList = [...blogList];
    console.log(updatedList);
    // Sort by Price
    if (sort === "low-to-high") {
      updatedList.sort((a, b) => a.price - b.price);
    } else if (sort === "high-to-low") {
      updatedList.sort((a, b) => b.price - a.price);
    }

    setFilteredBlogs(updatedList);
  }, [sort, blogList]);

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-8">
      {/* Filters */}
      <div
        className="w-[90%] max-w-5xl mx-auto mt-4 rounded-2xl 
                   shadow-lg p-6 grid gap-4 sm:grid-cols-1 md:grid-cols-3 
                   bg-[#1E293B] text-white"
      >
        {/* Search */}
        {/* Search */}
        <input
          type="text"
          placeholder="Search by blog title..."
          className="w-full px-4 py-2 border border-[#38BDF8] bg-white text-black placeholder-gray-500 rounded-md outline-none focus:ring-2 focus:ring-[#38BDF8] transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 border border-[#38BDF8] bg-white text-black rounded-md outline-none focus:ring-2 focus:ring-[#38BDF8] transition"
        >
          {categories.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full px-4 py-2 border border-[#38BDF8] bg-white text-black rounded-md outline-none focus:ring-2 focus:ring-[#38BDF8] transition"
        >
          <option value="">Sort by Price</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>

      {/* Showcase */}
      <div className="flex flex-col items-center gap-4 p-4 mt-6">
        <h2 className="font-Poppins text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] font-[600] text-[#1E293B] w-full text-left pl-[1rem]">
          Showcase of all project : {filteredBlogs.length}
        </h2>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-[3rem] justify-center items-center">
          {filteredBlogs.map((item) => (
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
