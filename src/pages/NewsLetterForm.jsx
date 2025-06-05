import React from "react";

const NewsLetterForm = () => {
  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
  <form className="bg-white shadow-md border border-gray-300 rounded-xl w-full max-w-md p-6 space-y-4">
    <fieldset className="space-y-3">
      <legend className="text-lg font-semibold text-gray-700 mb-2">
        📰 Newsletter — Please Comment Your Feedback
      </legend>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Your Feedback
        </label>
        <textarea
          className="w-full h-[130px] resize-none border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
      >
        Submit
      </button>
    </fieldset>
  </form>
</div>

  );
};

export default NewsLetterForm;
