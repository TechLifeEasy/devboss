import { React, useState } from 'react';
import { AddFind } from '../../Api/Api';
//Make schema like these
// name:String
// tech:String
// link:String
// contact:String

import Load from "../helpers/Load";
import Pop from "../helpers/Pop";

export default function HackathonShow() {
  const [values, setValues] = useState({
    name: "",
    tech: "",
    contact: ""
  });
  const [isLoading, setIsLoadding] = useState(false);
  const [isPop, setIsPop] = useState('');
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const save = () => {

    // make a server side post request from here
    // console.log(values);

    setIsLoadding(true);

    AddFind(values)
      .then((data) => {
        window.location.reload()
      }).catch((e) => {
        console.log(e);
        setIsPop('Some Thing Went Wrong !!')
      })
      .finally(() => {
        setIsLoadding(false);
      });

  }
  return <div>
    {
      isLoading && <Load></Load>
    }
    {
      isPop.length != 0 && <Pop text={isPop} remove={setIsPop}></Pop>
    }
    <form className="w-full max-w-lg block mx-auto my-10  p-4 ">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full  px-3 mb-6 md:mb-0 flex-col  gap-2">
          {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 " for="grid-first-name">
        Title
      </label> */}
          <p className='text-lg tracking-wide my-3 text-gray-700  '>Full Name</p>
          <input className=" mt-3 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent
                md:w-full
                " name="name" id="name" value={values.name} onChange={handleInputChange} type="text" placeholder="Barun Prajapati" required />
          <p className='text-lg tracking-wide my-3 text-gray-700  '>TechStack</p>
          <input className=" mt-3 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent
                md:w-full
                " name="tech" id="tech" value={values.tech} onChange={handleInputChange} type="text" placeholder="Web,ML" required />
        </div>

      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className='text-lg tracking-wide my-3 text-gray-700  ' >
            Hackathon Website Link
          </label>
          <input className=" mt-3 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent
                md:w-full
                " name="link" id="link" value={values.link} onChange={handleInputChange} type="link" placeholder='https://dare2compete.com/competition/amrita-business-innovation-challenge-amrita-school-of-business-258552' required />
        </div>

      </div>

      <button type='submit' onClick={save} className=' block mx-auto text-white bg-sky-800 hover:bg-sky-600 p-2 rounded-lg'>Submit</button>
    </form>

  </div>;

}