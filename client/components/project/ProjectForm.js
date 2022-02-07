import { React, useState } from 'react';
import Load from "../helpers/Load";
import Pop from "../helpers/Pop";
import {AddProject} from '../../Api/Api';
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
    // console.log(values);

    setIsLoadding(true);

    AddProject(values)
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
    <form className="w-full max-w-lg block mx-auto my-10 border-2 rounded-lg border-sky-800 p-4 ">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full  px-3 mb-6 md:mb-0 flex-col  gap-2">
          {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 " for="grid-first-name">
        Title
      </label> */}
          <p className='uppercase tracking-wide text-gray-700 text-xs font-bold mt-3.5'>Title</p>
          <input className="w-400 appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name='title' value={values.title} onChange={handleInputChange} id="title" type="text" placeholder="Notes App" required />
          <p className='uppercase tracking-wide text-gray-700 text-xs font-bold mt-3.5'>Link</p>
          <input className="w-400 appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name='demoLink' value={values.demoLink} onChange={handleInputChange} id="demoLink" type="text" placeholder="https://github.com/cameronmcnz/rock-paper-scissors.git" required />
        </div>

      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Description
          </label>
          <textarea rows={5} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='description' value={values.description} onChange={handleInputChange} id="description" placeholder="Please Enter a Short and Meaningful description about your project " />
        </div>

      </div>
      <div >
        <p className='uppercase tracking-wide text-gray-700 text-xs font-bold mt-3.5'>TechStack</p>
        <input className="block appearance-none  w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" value={values.tech} name='tech' onChange={handleInputChange} id="tech" type="text" placeholder="Enter Tech Stack seperated by , for e.g. Web,ML" required />
      </div>
      <button type='submit' onClick={save} className=' block mx-auto text-white bg-sky-800 hover:bg-sky-600 p-2 rounded-lg'>Submit</button>
    </form>

  </div>;
}
