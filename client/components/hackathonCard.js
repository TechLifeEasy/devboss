import React from "react";
import { AiFillTrophy } from "react-icons/ai";

const hackathonCard = () => {
  return (
    <div className="mx-10 my-10">
      <a href="" class="relative block group h-96">
        <span class="absolute inset-0 border-2 border-black border-dashed"></span>

        <div class="relative flex items-end h-full transition-transform transform bg-white border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div class="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
            <AiFillTrophy className="w-12 h-12" />{" "}
            <h2 class="mt-4 text-2xl font-medium">Hackathon Name</h2>
            <h4 class="mt-4 text-sm font-medium">Winner</h4>
          </div>

          <div class="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
            <h2 class="mt-4 text-2xl font-medium">Hackathon Name</h2>

            <p class="mt-4">
              About hackathon and project - Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cupiditate, praesentium voluptatem
              omnis atque culpa repellendus.
            </p>

            <a href="#" class="mt-8 font-bold ">
              Project Repo
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default hackathonCard;
