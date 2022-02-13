/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState ,useEffect} from "react";
// // import image from "../../assets/login.svg";
// import { SingIn } from "../../Api/user";
// import { Link } from "react-router-dom";
// import Load from '../helper/Loading'
import Load from "../components/helpers/Load";
import Pop from "../components/helpers/Pop";
import { SingIn } from "../Api/Api";
import { isEmpty } from "../components/helpers/isEmpty";

const SignUp = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoadding] = useState(false);
  const [isPop, setIsPop] = useState('');
  //   const router = useRouter();

  //   const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = () => {
    //console.log(data)

    setIsLoadding(true);

    if(isEmpty(data)){
      setIsPop('All Fields are require')
      setIsLoadding(false);
      return;
    }

    SingIn(data)
      .then((data) => {

        localStorage.setItem('User',JSON.stringify(data.data));
        window.location.href='/'
      }).catch((e)=>{
        //console.log(e);
        setIsPop('Some Thing Went Wrong !!')
      })
      .finally(() => {
        setIsLoadding(false);
      });



  };
  useEffect(()=>{
    if(localStorage.getItem('User')){
      window.location.href='/';
    }
  })

  return (
    <section>
      {
        isLoading && <Load></Load>
      }
      {
        isPop.length != 0 && <Pop text={isPop} remove={setIsPop}></Pop>
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
                Log In{" "}
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
                    Email address{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
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
                      autoComplete="current-password"
                      required=""
                      placeholder="Your Password"
                      onChange={handleChange}
                      value={data.password}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="mt-5 m-auto w-full py-3 text-white rounded-lg bg-sky-800 hover:bg-sky-600 px-2"

                    onClick={handleSubmit}
                  >
                    {

                      'Log In'
                    }
                  </button>
                </div>
                <div className="flex items-center justify-center my-4">
                  <a
                    href="/signup"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Already Have an Account? SignUp Here
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
