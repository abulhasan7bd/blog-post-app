import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
const NewsLetterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let message = "Thank you for subscribing to our newsletter.";
    toast.success(message, {
      progress: undefined,
      closeOnClick: true,
    });
    e.target.name.value = ""
    e.target.email.value = ""
  };
  return (
 <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: false }}
  transition={{ duration: 0.9 }}
  className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-[1rem] p-4 mt-[20px] 
             bg-gradient-to-br from-[#1E293B] via-[#243B55] to-[#38BDF8]"
>
  <ToastContainer />

  {/* Left Image */}
  <div className="w-[74%] md:w-[50%] lg:w-[30%] flex justify-center items-center">
    <img
      src="https://img.freepik.com/free-vector/developer-activity-concept-illustration_114360-2801.jpg?uid=R90026751&ga=GA1.1.1322734213.1735572178&semt=ais_items_boosted&w=740"
      className="w-full rounded-lg shadow-lg"
      alt="Developer Illustration"
    />
  </div>

  {/* Form Section */}
  <form
    onSubmit={handleSubmit}
    className="rounded-xl w-full md:w-[50%] lg:w-[40%] p-6 space-y-4 bg-[#F8FAFC] shadow-lg"
  >
    <fieldset className="space-y-3">
      <legend className="text-[1.3rem] md:text-[1.6rem] lg:text-[2rem] font-semibold text-[#1E293B] mb-2">
        📰 Please Comment Your Idea and Send
      </legend>

      {/* Feedback */}
      <div>
        <label className="block text-sm font-medium text-[#1E293B] mb-1">
          Your Feedback
        </label>
        <input
          className="w-full border border-gray-300 rounded-md p-3 
                     focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
          placeholder="Write your feedback"
          required
          name="name"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-[#1E293B] mb-1">
          Email
        </label>
        <input
          type="email"
          className="w-full border border-gray-300 rounded-md p-3 
                     focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
          placeholder="Your email"
          required
          name="email"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full md:w-auto cursor-pointer bg-[#38BDF8] hover:bg-[#1E293B] 
                   text-white font-semibold py-2 px-[2rem] rounded-md transition duration-300"
      >
        Submit
      </button>
    </fieldset>
  </form>
</motion.div>

  );
};

export default NewsLetterForm;
