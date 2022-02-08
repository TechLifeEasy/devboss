import React from "react";
import Pop from "../helpers/fun";
import {BsFillPersonFill} from 'react-icons/bs';

const AboutMe = ({data}) => {
  return (
    <div className="mx-20 my-10	">
      <div class="shadow-lg rounded-2xl w-1/2 p-4 mx-auto bg-white dark:bg-gray-800">
        <div class="flex flex-row items-start gap-4">
          {/* <img src="/images/person/1.jpg" class="w-28 h-28 rounded-lg" /> */}
          <div class="h-28 w-full flex flex-col justify-between">
            <div>
              <BsFillPersonFill size={40} className="block mx-auto "/>
              <p class="text-gray-800 text-center  dark:text-white text-xl font-bold uppercase mb-3">
                {data.name}
              </p>
              {/* <p class="text-gray-400 text-xs">FullStack dev</p> */}
            </div>
            <div class="rounded-lg  dark:bg-white p-2 w-full h-full">
              <div class="flex items-center justify-between  text-xs text-gray-400 dark:text-black">
                <p class="text-gray-400 text-xl text-center w-full font-bold ">
                  <Pop text={data.bio}></Pop>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button
        type="button"
        class="w-1/2 px-4 py-2 my-5 text-base justify-center align-center border rounded-lg text-white bg-indigo-500 hover:bg-indigo-700 ">
        Edit
      </button> */}
    </div>
  );
};

export default AboutMe;
