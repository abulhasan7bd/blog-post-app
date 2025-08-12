import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UndateBlog = () => {
  const data = useLocation();
  const oldData = data.state;
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

    // ✅ Corrected User Information
    blog.userName = "Abul Hasan";
    blog.userEmail = "abulHasan@gmail.com";
    blog.userPhoto = "https://example.com/images/abul-hasan.jpg"; // valid image URL

    fetch(`https://abulhasem-blog-server.vercel.app/update/${oldData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate(-1, { state: { updated: true } });
        }
        console.log("Update success:", data);
      })
      .catch((err) => {
        console.error("Update error:", err);
      });
  };

  return (
    <div className="max-w-5xl mx-auto mt-[100px] p-6 bg-base-200 border border-base-300 rounded-lg shadow-md  ">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          You Can Updated Thsi Blog
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
              defaultValue={oldData.heading}
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
              placeholder="Image URL"
              defaultValue={oldData.imgUrl}
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
              defaultValue={oldData.category}
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
            <label className="label font-medium text-lg">Tittle (Short)</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Short description"
              name="tittleS"
              required
              defaultValue={oldData.titleS}
            />
          </div>
          {/* Short Description */}
          <div>
            <label className="label font-medium text-lg">
              {oldData.titleS}
            </label>
            <textarea
              type="text"
              className="input input-bordered w-full resize-none h-[100px] text-wrap text-justify "
              placeholder="Short description"
              name="shortDescription"
              defaultValue={oldData.shortDescription}
              required
            />
          </div>
          <div>
            <label className="label font-medium text-lg">Tittle (Long)</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Logn description"
              name="tittleL"
              defaultValue={oldData.titleL}
            />
          </div>

          {/* Long Description full width - span 2 cols */}
          <div className="md:col-span-2">
            <label className="label font-medium text-lg">
              Long Description
            </label>
            <textarea
              className="textarea textarea-bordered w-full h-[120px] resize-none"
              placeholder="Long description"
              required
              name="longDescription"
              defaultValue={oldData.longDescription}
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
            defaultValue={oldData.red}
            required
          />
        </div>
        {/* Submit Button full width */}
        <button type="submit" className="btn btn-neutral w-full text-lg">
          Update now
        </button>
      </form>
    </div>
  );
};

export default UndateBlog;
