import React from "react";
import Pop from "../helpers/fun";
import {BsFillPersonFill} from 'react-icons/bs';

const AboutMe = ({data}) => {
  return (
    <div className="mx-20 my-10	">
      <div className="shadow-lg rounded-2xl  p-4 mx-auto bg-white">
        <div className="flex flex-row items-start gap-4">
          {/* <img src="/images/person/1.jpg" className="w-28 h-28 rounded-lg" /> */}
          <div className=" w-full flex flex-col justify-between">
            <div>
              <BsFillPersonFill size={40} className="block mx-auto bg-sky-500 text-white "/>
              <p className="text-gray-800 text-center  dark:text-white text-xl font-bold uppercase my-3">
                {data.name}
              </p>
              {/* <p className="text-gray-400 text-xs">FullStack dev</p> */}
            </div>
            <div className=" dark:bg-white p-2 w-full h-full">
              <div className="flex items-center justify-between text-xs dark:text-black">
                <p className=" text-xl text-center w-full">
                  
                  
                 <Pop text={data.bio}></Pop>

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button
        type="button"
        className="w-1/2 px-4 py-2 my-5 text-base justify-center align-center border rounded-lg text-white bg-indigo-500 hover:bg-indigo-700 ">
        Edit
      </button> */}
    </div>
  );
};

export default AboutMe;
