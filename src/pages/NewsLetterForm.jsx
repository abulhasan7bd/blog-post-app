import React from "react";
import { ToastContainer, toast } from "react-toastify";

const NewsLetterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    let message = "Thank you for subscribing to our newsletter.";
    toast.success(message,{
 
        progress: undefined,
        closeOnClick: true,
    });
  };
  return (
    <div className="  min-h-screen flex flex-col md:flex-row items-center justify-center gap-[1rem] p-4 mt-[20px]">
      <ToastContainer/>
      <div className="  w-[74%] md:w-[50%] lg:w-[30%] flex justify-center items-center">
        <img
          src="https://img.freepik.com/free-vector/developer-activity-concept-illustration_114360-2801.jpg?uid=R90026751&ga=GA1.1.1322734213.1735572178&semt=ais_items_boosted&w=740"
          className="w-full "
          alt=""
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className=" rounded-xl w-full md:w-[50%] lg:w-[40%] p-6 space-y-4"
      >
        <fieldset className="space-y-3">
          <legend className="text-[1.3rem] md:text-[1.6rem] lg:text-[2rem] font-semibold text-gray-700 mb-2">
            📰 Please Comment Your Idea ans send
          </legend>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Your Feedback
            </label>
            <input
              className="w-full  border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your feedback"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-[2rem] rounded-md transition duration-300"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default NewsLetterForm;
