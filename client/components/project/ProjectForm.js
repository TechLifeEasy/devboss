import { React, useState } from 'react';
import Load from "../helpers/Load";
import Pop from "../helpers/Pop";
import { AddProject } from '../../Api/Api';
// title: String,
// description: String,
// demoLink: String,
// upVote: [String],
// comment: [CommentSchema],
// creator: String,
// state:String,
// tech:[String],
// isIdea:Boolean
export default function ProjectForm() {
  const [values, setValues] = useState({
    title: "",
    description: "",
    demoLink: "",
    tech: "",

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

  const save = (e) => {
    e.preventDefault();
    // all values gathered here make post req 
    // //console.log(values);

    setIsLoadding(true);

    AddProject(values)
      .then((data) => {
        window.location.reload()
      }).catch((e) => {
        //console.log(e);
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
    <form className="w-full max-w-lg block mx-auto my-10  rounded-lg  p-4 ">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full  px-3 mb-6 md:mb-0 flex-col  gap-2">
          {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 " for="grid-first-name">
        Title
      </label> */}
          <p className='text-lg tracking-wide my-3 text-gray-700  '>Title</p>
          <input className=" mt-3 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent
                md:w-full
                " name='title' value={values.title} onChange={handleInputChange} id="title" type="text" placeholder="Notes App" required />
          <p className='text-lg tracking-wide my-3 text-gray-700   mt-3.5'>Link</p>
          <input className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent
                md:w-full
                " name='demoLink' value={values.demoLink} onChange={handleInputChange} id="demoLink" type="text" placeholder="https://github.com/cameronmcnz/rock-paper-scissors.git" required />
        </div>

      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className='text-lg tracking-wide my-3 text-gray-700   mt-3.5' >
            Description
          </label>
          <textarea rows={5} className="mt-3 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent" id="comment"  cols="40" name='description' value={values.description} onChange={handleInputChange}  placeholder="Please Enter a Short and Meaningful description about your project " />
        </div>

      </div>
      <div >
        <p className='text-lg tracking-wide my-3 text-gray-700   mt-3.5'>TechStack</p>
        <input className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-900 focus:border-transparent
                md:w-full
                " value={values.tech} name='tech' onChange={handleInputChange} id="tech" type="text" placeholder="Enter Tech Stack seperated by , for e.g. Web,ML" required />
      </div>
      <button type='submit' onClick={save} className="my-7 w-full py-3 text-white rounded-lg bg-sky-800 hover:bg-sky-600 px-2"
>Submit</button>
    </form>

  </div>;
}
