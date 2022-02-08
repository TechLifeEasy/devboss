/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState,useEffect } from "react";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoMdDocument } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import Load from "../components/helpers/Load";
import Pop from "../components/helpers/Pop";

import { SingUp } from "../Api/Api";

const SignUp = () => {
  const [data, setData] = useState({
    "name": "",
    "bio": "",
    "image": ".",
    "email": "",
    "password": "",
    "github":"",
    "twitter":"",
    "linkedin":"",
    "website":"",
    "resume":"",
    "discord":""
  });
  const [isLoading, setIsLoadding] = useState(false);
  const [isPop, setIsPop] = useState('');

  useEffect(()=>{
    if(localStorage.getItem('User')){
      window.location.href='/';
    }
  })

  // const [isLoading, setIsLoadding] = useState(false);

  //   const router = useRouter();

  //   const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = () => {
    console.log(data)

    setIsLoadding(true);

    SingUp(data)
      .then((data) => {
        localStorage.setItem('User',JSON.stringify(data.data));
        window.location.href='/'
      }).catch((e)=>{
        console.log(e);
        setIsPop('Some Thing Went Wrong !!')
      })
      .finally(() => {
        setIsLoadding(false);
      });



  };

  return (
    <section>
      {
        isLoading && <Load></Load>
      }
      {
        isPop.length!=0 && <Pop text={isPop} remove={setIsPop}></Pop>
      }

      <div className="flex items-center justify-center overflow-hidden">

        <div
          className="
            flex flex-col
            justify-center
            flex-1
            px-4
            py-12
            sm:px-6
            lg:flex-none lg:px-20
            xl:px-24
          "
        >
          <div className="w-full max-w-xl mx-auto lg:w-96 gap-3">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
                {" "}
                Sign Up{" "}
              </h2>
            </div>
            <div className="mt-8">
              <div className="mt-6 flex flex-col gap-4">

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Name{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autocomplete="name"
                      required=""
                      placeholder="Your Name"
                      onChange={handleChange}
                      value={data.Name}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required=""
                      placeholder="Your Email"
                      onChange={handleChange}
                      value={data.email}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Password{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autocomplete="current-password"
                      required=""
                      placeholder="Your Password"
                      onChange={handleChange}
                      value={data.password}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent"
                    />
                  </div>
                </div>


                <div className=" flex-col w-full  md:inline-flex md:space-y-0">
                  <h2 className="block my-5 text-sm font-medium ">Tell About Yourself</h2>
                  <div className="w-full ">
                    <div className=" relative ">
                      <div className="col-span-2">
                        <label className="text-gray-700" htmlFor="aboutyou">
                          <textarea
                            className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent resize-none	"
                            id="bio"
                            placeholder="Tell us about yourself"
                            name="bio"
                            onChange={handleChange}
                            rows="5"
                            cols="40"></textarea>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="text-center md:w-3/12 md:pl-6"></div>
                </div>
                <div className=" flex-col w-full  text-gray-500 md:inline-flex md:space-y-0">
                  <h2 className="block my-5 text-sm font-medium text-neutral-600">Enter your Social IDs</h2>
                  <div className="max-w-sm my-5 mx-auto space-y-5 md:w-3/3">
                    <div>
                      <div className=" relative grid grid-cols-3">
                        <DiGithubBadge className="h-12 w-12 col-span-1" />
                        <input
                          type="url"
                          id="githubID"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent col-span-2"
                          placeholder="Github Link"
                          name="github"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <div className=" relative grid grid-cols-3">
                        <AiFillLinkedin className="h-12 w-12 col-span-1" />
                        <input
                          type="url"
                          id="linkedinID"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent col-span-2"
                          placeholder="Linkedin Link"
                          name="linkedin"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <div className=" relative grid grid-cols-3">
                        <AiFillTwitterCircle className="h-12 w-12 col-span-1" />
                        <input
                          type="url"
                          id="twitterID"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent col-span-2"
                          placeholder="Twitter Link"
                          name="twitter"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <div className=" relative grid grid-cols-3">
                        <IoMdDocument className="h-12 w-12 col-span-1" />
                        <input
                          type="url"
                          id="resumeLink"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent col-span-2"
                          placeholder="Resume Link"
                          name="resume"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <div className=" relative grid grid-cols-3">
                        <CgWebsite className="h-12 w-12 col-span-1" />
                        <input
                          type="url"
                          id="portfolioLink"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent col-span-2"
                          placeholder="Portfolio Link"
                          name="website"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="mt-5 m-auto w-full py-3 text-white rounded-lg bg-sky-800 hover:bg-sky-600 px-2"

                    onClick={handleSubmit}
                  >
                    {

                      'Sign Up'
                    }
                  </button>
                </div>
                <div className="flex items-center justify-center my-4">
                  <a
                    href="/signup"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Log In Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;


// import React from 'react';

// const Index = () => {
//   return (
//     <div>
//       LOgin
//     </div>
//   );
// }

// export default Index;
