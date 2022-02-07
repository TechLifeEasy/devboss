import React, { useState } from "react";
import image from "../../assets/signup.svg";
import { SingUp } from "../../Api/user";
import { Link } from "react-router-dom";
import Load from "../helper/Loading";

const SignUpP = () => {
  const [data, setData] = useState({
    email: "",
    name: "",
    password: "",
  });

  //   const router = useRouter();

  const [isLoading, setIsLoadding] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = () => {
    console.log(data);
    // e.preventDefault();
    setIsLoadding(true);
    SingUp(data.email, data.password, data.name)
      .then(() => {
        // window.location.href='/'
      })
      .finally(() => {
        setIsLoadding(false);
      });
  };

  return (
    <section>
      {isLoading && <Load></Load>}
      <div className="flex min-h-screen overflow-hidden">
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
          <div className="w-full max-w-xl mx-auto lg:w-96">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
                Sign Up.
              </h2>
            </div>
            <div className="mt-8">
              <div className="mt-6">
                <div>
                  <label
                    for="name"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autocomplete="name"
                      required=""
                      placeholder="Your Name"
                      value={data.name}
                      onChange={handleChange}
                      className="
                          block
                          w-full
                          px-5
                          py-3
                          text-base
                          placeholder-gray-300
                          transition
                          duration-500
                          ease-in-out
                          transform
                          border border-transparent
                          rounded-lg
                          text-neutral-600
                          bg-gray-50
                          focus:outline-none
                          focus:border-transparent
                          focus:ring-2
                          focus:ring-white
                          focus:ring-offset-2
                          focus:ring-offset-gray-300
                        "
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="email"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    Email address
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
                      className="
                          block
                          w-full
                          px-5
                          py-3
                          text-base
                          placeholder-gray-300
                          transition
                          duration-500
                          ease-in-out
                          transform
                          border border-transparent
                          rounded-lg
                          text-neutral-600
                          bg-gray-50
                          focus:outline-none
                          focus:border-transparent
                          focus:ring-2
                          focus:ring-white
                          focus:ring-offset-2
                          focus:ring-offset-gray-300
                        "
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label
                    for="password"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    Password
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
                      className="
                          block
                          w-full
                          px-5
                          py-3
                          text-base
                          placeholder-gray-300
                          transition
                          duration-500
                          ease-in-out
                          transform
                          border border-transparent
                          rounded-lg
                          text-neutral-600
                          bg-gray-50
                          focus:outline-none
                          focus:border-transparent
                          focus:ring-2
                          focus:ring-white
                          focus:ring-offset-2
                          focus:ring-offset-gray-300
                        "
                    />
                  </div>
                </div>

                {/* <div className="flex items-center justify-end my-3">
                  <Link to="/login">Log In Hear</Link>
                </div> */}
               

                <div>
                  <button
                    onClick={handleSubmit}
                    className="
                        flex
                        items-center
                        justify-center
                        w-full
                        px-10
                        py-4
                        text-base
                        font-medium
                        text-center text-white
                        transition
                        duration-500
                        ease-in-out
                        transform
                        bg-blue-600
                        rounded-xl
                        hover:bg-blue-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-blue-500
                      "
                  >
                    {isLoading ? "Loadding" : "Sign Up"}
                  </button>
                </div>
                <div className="flex items-center justify-center my-4">
                  <Link
                    to="/login"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Log In Hear
                  </Link>
                </div>
                {/* 
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-neutral-600">
                      Or continue with
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="
                      w-full
                      items-center
                      block
                      px-10
                      py-3.5
                      text-base
                      font-medium
                      text-center text-blue-600
                      transition
                      duration-500
                      ease-in-out
                      transform
                      border-2 border-white
                      shadow-md
                      rounded-xl
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-gray-500
                    "
                  >
                    <div className="flex items-center justify-center">
                      <span className="ml-4"> Log in with Google</span>
                    </div>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1 hidden w-0 overflow-hidden lg:block">
          <img
            className="absolute inset-0 object-cover w-full h-full object-fill"
            src={image}
            alt="Sign Up"
          />
        </div>
      </div>
    </section>
  );
};

export default SignUpP;

// import React from 'react';

// const Index = () => {
//   return (
//     <div>
//       zeel
//     </div>
//   );
// }

// export default Index;
