import React from 'react';
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
  return <div>
    <form className="w-full max-w-lg block mx-auto my-10 border-2 rounded-lg border-sky-800 p-4 ">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full  px-3 mb-6 md:mb-0 flex-col  gap-2">
      {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 " for="grid-first-name">
        Title
      </label> */}
      <p className='uppercase tracking-wide text-gray-700 text-xs font-bold mt-3.5'>Title</p>
      <input className="w-400 appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="title" type="text" placeholder="Notes App" required/>
      <p className='uppercase tracking-wide text-gray-700 text-xs font-bold mt-3.5'>Link</p>
      <input className="w-400 appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="demoLink" type="text" placeholder="https://github.com/cameronmcnz/rock-paper-scissors.git" required/>
    </div>
    
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Description
      </label>
      <textarea rows={5} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" placeholder="Please Enter a Short and Meaningful description about your project "/>
    </div>
    
  </div>
  <div >
    <p className='uppercase tracking-wide text-gray-700 text-xs font-bold mt-3.5'>TechStack</p>
      <input className="block appearance-none  w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="tech" type="text" placeholder="Enter Tech Stack seperated by , for e.g. Web,ML" required/>
          </div>
    <button type='submit' className=' block mx-auto text-white bg-sky-800 hover:bg-sky-600 p-2 rounded-lg'>Submit</button>
</form>

  </div>;
}
