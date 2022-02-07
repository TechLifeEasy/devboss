import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoMdDocument } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";

const bio = () => {
  return (
    <div>
      <section class=" bg-gray-100 bg-opacity-50 mt-10 mb-20 ">
        <form class="container max-w-2xl mx-auto shadow-md md:w-3/4">
          <div class="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
            <div class="max-w-sm mx-auto md:w-full md:mx-0">
              <div class="inline-flex items-center space-x-4">
                {/* <a href="#" class="block relative">
                  <img
                    alt="profil"
                    src="/images/person/1.jpg"
                    class="mx-auto object-cover rounded-full h-16 w-16 "
                  />
                </a> */}
                <h1 class="text-gray-600 font-black text-5xl ">
                  Let's Build Up Your Bio
                </h1>
              </div>
            </div>
          </div>
          <div class="space-y-6 bg-white">
            <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 class="max-w-sm mx-auto md:w-1/3">Full Name</h2>
              <div class="max-w-sm mx-auto md:w-2/3">
                <div class=" relative ">
                  <input
                    type="text"
                    id="username"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Enter Your Full Name"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 class="max-w-sm mx-auto md:w-1/3">Enter your Social IDs</h2>
              <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                <div>
                  <div class=" relative grid grid-cols-3">
                    <DiGithubBadge className="h-12 w-12 col-span-1" />
                    <input
                      type="url"
                      id="githubID"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent col-span-2"
                      placeholder="Github Link"
                    />
                  </div>
                </div>
                <div>
                  <div class=" relative grid grid-cols-3">
                    <AiFillLinkedin className="h-12 w-12 col-span-1" />
                    <input
                      type="url"
                      id="linkedinID"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent col-span-2"
                      placeholder="Linkedin Link"
                    />
                  </div>
                </div>
                <div>
                  <div class=" relative grid grid-cols-3">
                    <AiFillTwitterCircle className="h-12 w-12 col-span-1" />
                    <input
                      type="url"
                      id="twitterID"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent col-span-2"
                      placeholder="Twitter Link"
                    />
                  </div>
                </div>
                <div>
                  <div class=" relative grid grid-cols-3">
                    <IoMdDocument className="h-12 w-12 col-span-1" />
                    <input
                      type="url"
                      id="resumeLink"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent col-span-2"
                      placeholder="Resume Link"
                    />
                  </div>
                </div>
                <div>
                  <div class=" relative grid grid-cols-3">
                    <CgWebsite className="h-12 w-12 col-span-1" />
                    <input
                      type="url"
                      id="portfolioLink"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent col-span-2"
                      placeholder="Portfolio Link"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 class="max-w-sm mx-auto md:w-4/12">Tell About Yourself</h2>
              <div class="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex">
                <div class=" relative ">
                  <div class="col-span-2">
                    <label class="text-gray-700" for="aboutyou">
                      <textarea
                        class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none	"
                        id="aboutyou"
                        placeholder="Tell us about yourself"
                        name="aboutyou"
                        rows="5"
                        cols="40"></textarea>
                    </label>
                  </div>
                </div>
              </div>
              <div class="text-center md:w-3/12 md:pl-6"></div>
            </div>
            <hr />
            <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
              <button
                type="submit"
                class="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Save
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default bio;
