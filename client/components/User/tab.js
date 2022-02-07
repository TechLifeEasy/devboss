import React from "react";

const Tab = () => {
  return (
    <ul class="bg-pink-100 rounded-xl p-1.5 flex mx-7 my-5">
      <li class="flex-1">
        <a
          class="block p-2 text-sm text-pink-700 bg-white rounded-lg shadow-sm"
          href="">
          <span class="flex items-center justify-center ml-3 text-2xl font-bold text-gray-900">
            {" "}
            Projects{" "}
          </span>
        </a>
      </li>

      <li class="flex-1">
        <a
          class="block p-2 text-sm font-medium text-pink-700 rounded-lg"
          href="">
          <span class="flex items-center justify-center ml-3 text-2xl font-bold text-gray-900">
            {" "}
            Hackathons{" "}
          </span>
        </a>
      </li>
    </ul>
  );
};

export default Tab;
