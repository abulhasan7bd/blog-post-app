import React, { useState } from "react";
import Blog from "./Blog";

const AllBlogs = () => {
  const [searchText, setSearchText] = useState("");
  const [category, setCatagory] = useState("");
  console.log(category);
  const handleSearch = () => {};

  const dummyBlog = [
    {
      id: Date.now().toString() + Math.random().toString(36).substring(2),

      image:
        "https://img.freepik.com/premium-photo/full-length-young-man-with-ball-grass_1048944-25301156.jpg?uid=R90026751&ga=GA1.1.1322734213.1735572178&semt=ais_items_boosted&w=740",
      title: "Women in Triathlon Unite During the COVID-19",
      date: "June 11, 2021",
      author: "Chris Foster",
      description:
        "A strong thread of motivation connects the women’s triathlon community around the world. The World Triathlon and the ITU Women’s Committee introduces these...",
    },
    {
      id: Date.now().toString() + Math.random().toString(36).substring(2),

      image:
        "https://img.freepik.com/premium-photo/full-length-young-man-with-ball-grass_1048944-25301156.jpg?uid=R90026751&ga=GA1.1.1322734213.1735572178&semt=ais_items_boosted&w=740",
      title: "Women in Triathlon Unite During the COVID-19",
      date: "June 11, 2021",
      author: "Chris Foster",
      description:
        "A strong thread of motivation connects the women’s triathlon community around the world. The World Triathlon and the ITU Women’s Committee introduces these...",
    },
    {
      id: Date.now().toString() + Math.random().toString(36).substring(2),

      image:
        "https://img.freepik.com/premium-photo/full-length-young-man-with-ball-grass_1048944-25301156.jpg?uid=R90026751&ga=GA1.1.1322734213.1735572178&semt=ais_items_boosted&w=740",
      title: "Women in Triathlon Unite During the COVID-19",
      date: "June 11, 2021",
      author: "Chris Foster",
      description:
        "A strong thread of motivation connects the women’s triathlon community around the world. The World Triathlon and the ITU Women’s Committee introduces these...",
    },
    {
      id: Date.now().toString() + Math.random().toString(36).substring(2),

      image:
        "https://img.freepik.com/premium-photo/full-length-young-man-with-ball-grass_1048944-25301156.jpg?uid=R90026751&ga=GA1.1.1322734213.1735572178&semt=ais_items_boosted&w=740",
      title: "Women in Triathlon Unite During the COVID-19",
      date: "June 11, 2021",
      author: "Chris Foster",
      description:
        "A strong thread of motivation connects the women’s triathlon community around the world. The World Triathlon and the ITU Women’s Committee introduces these...",
    },
  ];
  return (
    <div>
      <div className="  w-[80%] mx-auto rounded-2xl shadow p-[2rem] flex gap-[1rem] mt-[100px]">
        <input
          type="text"
          placeholder="Search by blog title..."
          className="w-full px-4 py-2 border rounded-l-md outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={()=>setCatagory("")}
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
   Showcase of all project : {dummyBlog.length}
</h2>
        <div className="grid lg:grid-cols-2 gap-[3rem]  ">
          {dummyBlog
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
