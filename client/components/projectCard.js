import React from "react";
import { AiFillGithub, AiOutlineFundProjectionScreen } from "react-icons/ai";

const ProfileCard = () => {
  return (
    <div className="mx-10 my-10">
      <a class="block overflow-hidden bg-white shadow-xl rounded-2xl" href="">
        <img
          class="object-cover w-full h-56"
          src="https://www.hyperui.dev/photos/university-4.jpeg"
          alt=""
        />

        <div class="relative pt-20 text-center">
          <div
            class="
        absolute
        w-24
        h-24
        bg-gray-900
        rounded-lg
        shadow-xl
        transform
        -translate-x-1/2
        -top-10
        left-1/2
      "></div>

          <div class="px-6 sm:px-12">
            <h5 class="text-xl font-bold text-gray-900">Project Name</h5>

            <p class="mt-2 text-sm text-gray-500">
              About Project Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Consectetur commodi eligendi officiis laboriosam autem
              eveniet.
            </p>
          </div>

          <dl
            class="
        flex flex-col
        items-center
        justify-center
        px-6
        py-4
        mt-6
        border-t border-gray-100
        sm:flex-row sm:items-start sm:px-12
      ">
            <div class="flex items-center">
              <span class="flex-shrink-0 p-1 text-white bg-green-600 rounded-full">
                <AiFillGithub />
              </span>

              <span
                class="
            flex
            ml-3
            text-sm
            font-medium
            text-gray-600
            space-x-1 space-x-reverse
          ">
                <div>Github</div>
              </span>
            </div>

            <div class="flex items-center mt-3 sm:ml-6 sm:mt-0">
              <span class="flex-shrink-0 p-1 text-white bg-green-600 rounded-full">
                <AiOutlineFundProjectionScreen />
              </span>
              <span
                class="
            flex
            ml-3
            text-sm
            font-medium
            text-gray-600
            space-x-1 space-x-reverse
          ">
                <div>Live Project</div>
              </span>
            </div>
          </dl>
        </div>
      </a>
    </div>
  );
};

export default ProfileCard;
