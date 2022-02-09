import React from 'react';

export default function Pop({text,remove}) {
  return (
      <div className='flex fixed top-13 bg-sky-800  right-0 text-white z-40'>
          <div className='px-5 py-5 capitalize'>

          {text}
          </div>

          <div className='px-5 py-5 border-x-2 cursor-pointer text-center' onClick={()=>{remove('')}}>
              x
          </div>
      </div>
  );
}
