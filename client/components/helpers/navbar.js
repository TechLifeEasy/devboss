import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { BiExit } from "react-icons/bi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [user, setUser] = useState('')

  useEffect(() => {

    if (localStorage.getItem('User')) {
      setUser(JSON.parse(localStorage.getItem('User')).data.name)
      // setUser('zeel')
    }

  }, [])





  return (
    <div className={` show_pp ${!isMenuOpen && 'px-4 py-5'} mx-auto md:px-24 lg:px-8 shadow z-50`}>
      <div className="relative flex items-center justify-between">
        <div className="flex items-center">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center mr-8">
            <span className="ml-2 	 font-black text-3xl tracking-wide text-gray-800 uppercase">
              Dev Boss
            </span>
          </a>
          <ul className="flex items-center hidden px-10 space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="Find Project Idea"
                title="Find Project Idea"
                className="font-medium tracking-wide px-5 text-gray-700 transition-colors duration-200 hover:text-sky-400 ">
                Home
              </a>
            </li>
            <li>
              <a
                href="/source"
                aria-label="Find Resources"
                title="Find Resources"
                className="font-medium tracking-wide px-5 text-gray-700 transition-colors duration-200 hover:text-sky-400 ">
                Find Resources
              </a>
            </li>
            <li>
              <a
                href="/project"
                aria-label="Find Partners"
                title="Find Partners"
                className="font-medium tracking-wide px-5 text-gray-700 transition-colors duration-200 hover:text-sky-400 ">
                Find Project
              </a>
            </li>
            <li>
              <a
                href="/hackathon"
                aria-label="Find Partners"
                title="Find Partners"
                className="font-medium tracking-wide px-5 text-gray-700 transition-colors duration-200 hover:text-sky-400 ">
                Find Partners
              </a>
            </li>

          </ul>
        </div>
        <ul className="flex items-center hidden space-x-8 lg:flex">

          {
            user.length == 0
              ?
              <>
                <li>
                  <a
                    href="/login"
                    aria-label="Sign in"
                    title="Sign in"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-700 hover:bg-sky-800 focus:shadow-outline focus:outline-none">
                    Log In
                  </a>
                </li>
                <li>
                  <a
                    href="/signup"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-700 hover:bg-sky-800 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up">
                    Sign up
                  </a>
                </li>
              </>
              :
              <>
                <li>
                  <a
                    href={`/user/`+user}
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-700 hover:bg-sky-800 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up">
                    <CgProfile className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <div
                    href={`/user/${user}`}
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-700 hover:bg-sky-800 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                    onClick={() => {

                      localStorage.removeItem('User');
                      window.location.href = '/'

                    }}
                  >
                    <BiExit className="w-6 h-6" />
                  </div>
                </li>
              </>
          }

        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}>
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="show_pp absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center">
                      <span className="ml-2 	 font-black text-3xl tracking-wide text-gray-800 uppercase">
                        Dev Boss
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}>
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                  {/* <ul className="flex items-center hidden px-10 space-x-8 lg:flex"> */}
            <li>
              <a
                href="/"
                aria-label="Find Project Idea"
                title="Find Project Idea"
                className="font-medium tracking-wide px-5 text-gray-700 transition-colors duration-200 hover:text-sky-400 ">
                Home
              </a>
            </li>
            <li>
              <a
                href="/source"
                aria-label="Find Resources"
                title="Find Resources"
                className="font-medium tracking-wide px-5 text-gray-700 transition-colors duration-200 hover:text-sky-400 ">
                Find Resources
              </a>
            </li>
            <li>
              <a
                href="/project"
                aria-label="Find Partners"
                title="Find Partners"
                className="font-medium tracking-wide px-5 text-gray-700 transition-colors duration-200 hover:text-sky-400 ">
                Find Project
              </a>
            </li>
            <li>
              <a
                href="/hackathon"
                aria-label="Find Partners"
                title="Find Partners"
                className="font-medium tracking-wide px-5 text-gray-700 transition-colors duration-200 hover:text-sky-400 ">
                Find Partners
              </a>
            </li>

          
                    {
                      user.length == 0
                        ?
                        <>
                          <li>
                            <a
                              href="/login"
                              aria-label="Sign in"
                              title="Sign in"
                             className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-700 hover:bg-sky-800 focus:shadow-outline focus:outline-none">
                              Log In
                            </a>
                          </li>
                          <li>
                            <a
                              href="/signup"
                              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-700 hover:bg-sky-800 focus:shadow-outline focus:outline-none"
                              aria-label="Sign up"
                              title="Sign up">
                              Sign up
                            </a>
                          </li>
                        </>
                        :
                        <>
                          <li>
                            <a
                              href={`/user/${user}`}
                              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-700 hover:bg-sky-800 focus:shadow-outline focus:outline-none"
                              aria-label="Sign up"
                              title="Sign up">
                              <CgProfile className="w-6 h-6" />
                            </a>
                          </li>
                          <li>
                            <div
                              href={`/user/${user}`}
                              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-700 hover:bg-sky-800 focus:shadow-outline focus:outline-none"
                              aria-label="Sign up"
                              title="Sign up"
                              onClick={() => {

                                localStorage.removeItem('User');
                                window.location.href = '/'

                              }}
                            >
                              <BiExit className="w-6 h-6" />
                            </div>
                          </li>
                        </>
                    }
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
