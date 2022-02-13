import React , {useEffect, useState}from 'react';
import { BsBookmarkCheckFill } from 'react-icons/bs'
import { BiLike } from 'react-icons/bi';
import {FiExternalLink} from 'react-icons/fi';
import { UpdateProject, UpdateSource } from '../../Api/Api'
import { get } from '../../Api/url_data';



export default function ProjectPop({ data }) {
  console.log(data)
  return (
    <div className='flex flex-col  w-1/3  gap-2
     mx-auto mt-3 border-2 p-2 border-sky-800 rounded-xl shadow-lg shadow-sky-400 mb-5 hover:shadow-black'>
      <h1 className='text-center bg-sky-800 p-2  rounded-3xl font-serif text-white   text-3xl'>{data.title}</h1>
      <div className='flex gap-2 text-xl'>
        <div> Tech : </div>
        <div> {data.tech} </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='text-xl underline'> Project description:  </div>
        <div>
          {
            data.description.split('/n').map((data) => {
              return <div className='py-2'>{data}</div>
            })


          }
        </div>
        {
                    data.demoLink
                    &&


                    <a href={data.demoLink} target="_blank"> <FiExternalLink/></a>
                  }
      </div>

      
      <div className='flex items-center text-xl gap-2'>
        
        Up Votes :

        <div
          onClick={() => {

            UpdateProject({ title: data.title, type: "vote" })
              .then(() => {
                window.location.reload();
              })

          }}
          className='flex cursor-pointer  hover:bg-sky-400 rounded-lg p-2 hover:text-white w-fit  items-center text-2xl'>
           <BiLike  />

          <div


          >
            {data.upVote.length}
          </div>
        </div>
      </div>

     

    </div>
  )
}