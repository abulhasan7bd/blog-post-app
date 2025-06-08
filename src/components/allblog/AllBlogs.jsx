import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import { useLoaderData } from "react-router-dom";

const AllBlogs = () => {
  const [searchText, setSearchText] = useState("");
  const [category, setCatagory] = useState("");
  const dataX = useLoaderData();

  // allblog
  const [blogList, setBoglist] = useState(dataX);
console.log(blogList)

  const handleSearch = () => {
    setBoglist([]);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/search?q=${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Search result:", data);
      })
      .catch((err) => {
        console.error("Search error:", err.message);
      });
  }, [searchText]);

  return (
    <div>
      <div className="  w-[80%] mx-auto rounded-2xl shadow p-[2rem] flex gap-[1rem] mt-[100px]">
        <input
          type="text"
          placeholder="Search by blog title..."
          className="w-full px-4 py-2 border rounded-l-md outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setCatagory("")}
        />
        <select name="" id="" onChange={(e) => setCatagory(e.target.value)}>
          <option value="Food">Food</option>
          <option value="Food1">Food</option>
          <option value="Food2">Food</option>
          <option value="Food">Food</option>
        </select>
        <button
          onClick={handleSearch}
          className="btn btn-accent   text-white px-4 py-2 rounded-r-md  transition"
        >
          Search
        </button>
      </div>

      <div className="flex flex-col items-center gap-4 p-4 text-black shadow rounded-xl">
        <h2 className="font-Poppins text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] font-[600] text-left pl-[1rem] w-full">
          Showcase of all project : {blogList.length}
        </h2>
        <div className="grid lg:grid-cols-2 gap-[3rem]  ">
          {blogList
            .filter((item) => {
              return searchText === ""
                ? item
                : item.title
                    .toLocaleLowerCase()
                    .includes(searchText.toLocaleLowerCase());
            })
            .filter((item) => {
              return category === ""
                ? item
                : item.title
                    .toLocaleLowerCase()
                    .includes(category.toLocaleLowerCase());
            })
            .map((item) => {
              return <Blog blog={item} key={item.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
