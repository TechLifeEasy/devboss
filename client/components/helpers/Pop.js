import React from 'react';

export default function Pop({text,remove}) {
  return (
      <div className='flex fixed top-13 bg-sky-800  right-0 text-white'>
          <div className='px-5 py-5'>

          {text}
          </div>

          <div className='px-5 py-5 border-x-2 cursor-pointer text-center' onClick={()=>{remove('')}}>
              x
          </div>
      </div>
  );
}
