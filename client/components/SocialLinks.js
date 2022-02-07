import React from "react";

const SocialLinks = () => {
  return (
    <div className="mx-20 my-10">
      <div class="shadow-lg rounded-2xl w-full p-4 bg-white dark:bg-gray-800">
        <div class="flex items-center justify-between gap-4 mt-6">
          <button
            type="button"
            class="w-1/2 px-4 py-2 text-base border rounded-lg text-grey-500 bg-white hover:bg-gray-200 ">
            <a href="#">Github</a>
          </button>
          <button
            type="button"
            class="w-1/2 px-4 py-2 text-base border rounded-lg text-white bg-indigo-500 hover:bg-indigo-700 ">
            <a href="#">Twitter</a>
          </button>
        </div>
        <div class="flex items-center justify-between gap-4 mt-6">
          <button
            type="button"
            class="w-1/2 px-4 py-2 text-base border rounded-lg text-grey-500 bg-white hover:bg-gray-200 ">
            <a href="#">Linkedin</a>
          </button>
          <button
            type="button"
            class="w-1/2 px-4 py-2 text-base border rounded-lg text-white bg-indigo-500 hover:bg-indigo-700 ">
            <a href="#">Portfolio</a>
          </button>
        </div>
        <div class="flex items-center justify-between gap-4 mt-6">
          <button
            type="button"
            class="w-1/2 px-4 py-2 text-base border rounded-lg text-grey-500 bg-white hover:bg-gray-200 ">
            <a href="#">Resume</a>
          </button>
          <button
            type="button"
            class="w-1/2 px-4 py-2 text-base border rounded-lg text-white bg-indigo-500 hover:bg-indigo-700 ">
            <a href="#">Discord</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
