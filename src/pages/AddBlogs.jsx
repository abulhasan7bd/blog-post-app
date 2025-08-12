import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import NotFound from "./NotFound";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddBlogs = () => {
  const { user } = useContext(AuthContext);
  const [error, setErrot] = useState("");
  const navigate = useNavigate();
  const categories = [
    "Health",
    "Science",
    "Technology",
    "Education",
    "Lifestyle",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const blog = Object.fromEntries(formData.entries());

    // Add some User Information
    blog.userName = user?.user?.displayName || "Anonymous";
    blog.userEmail = user?.user?.email || "unknown@example.com";
    blog.userPhoto = user?.user?.photoURL || "https://i.ibb.co/placeholder.png";

    // Date validation and formatting
    const now = new Date();
    const day = now.getDate();
    const year = now.getFullYear();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[now.getMonth()];
    const formattedDate = `${month} ${day}, ${year}`;
    blog.time = formattedDate;

    const handleSubmit = async () => {
      try {
        const response = await fetch(
          "https://abulhasem-blog-server.vercel.app/add-blog",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ blog, email: user.email }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to create blog");
        }

        const result = await response.json();
        Swal.fire({
          icon: "success",
          title: "Blog Created!",
          text: "Your blog post has been published successfully.",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        }).then(() => {
          navigate("/all-blogs");
        });

        console.log("Blog created successfully:", result);
      } catch (err) {
        setErrot(err.message);
        console.error("Server error:", err.message);
      }
    };

    handleSubmit();
  };
  if (error) {
    return <NotFound res={error} />;
  }
  return (
    <div className="max-w-5xl mx-auto my-[50px] p-6 bg-base-200 border border-base-300 rounded-lg shadow-md  ">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Create A New Blog
        </h2>

        {/* Grid container: 1 col on mobile, 2 cols on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div>
            <label className="label font-medium text-lg">Heading </label>
            <input
              type="text"
              name="heading"
              className="input input-bordered w-full"
              placeholder="Blog title"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="label font-medium text-lg">Image URL</label>
            <input
              type="text"
              name="imgUrl"
              className="input input-bordered w-full"
              placeholder="Image URL Thumnail"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="label font-medium text-lg">Category</label>
            <select
              className="select select-bordered w-full"
              required
              name="category"
            >
              <option value="" disabled>
                Select category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* title  */}
          <div>
            <label className="label font-medium text-lg">Tittle</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Short description"
              name="tittleS"
              required
            />
          </div>
          {/* Short Description */}
          <div>
            <label className="label font-medium text-lg">
              Short Description
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Short description"
              name="shortDescription"
              required
            />
          </div>
          <div>
            <label className="label font-medium text-lg">
              Tittle (optional)
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Long description"
              name="tittleL"
            />
          </div>

          {/* Long Description full width - span 2 cols */}
          <div className="md:col-span-2">
            <label className="label font-medium text-lg">
              Long Description
            </label>
            <textarea
              className="textarea textarea-bordered w-full resize-none"
              placeholder="Long description"
              required
              name="longDescription"
            ></textarea>
          </div>
        </div>
        {/* readeing time  */}
        <div>
          <label className="label font-medium text-lg">
            Reading Time (min)
          </label>
          <input
            type="number"
            className="input input-bordered w-full"
            placeholder="How many time this blog ..."
            name="red"
            min="1"
            max="10"
            required
          />
        </div>
        {/* Submit Button full width */}
        <button type="submit" className="btn btn-neutral w-full text-lg">
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlogs;
