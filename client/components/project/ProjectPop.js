import React , {useEffect, useState}from 'react';
import { BsBookmarkCheckFill } from 'react-icons/bs'
import { BiLike } from 'react-icons/bi';
import {FiExternalLink} from 'react-icons/fi';
import { UpdateProject, UpdateSource } from '../../Api/Api'
import { get } from '../../Api/url_data';



export default function ProjectPop({ data }) {
  console.log(data)
  return (
    <div className='w-full h-full z-50 
    py-10  left-0 flex flex-col pl-7 bg-white gap-6
     overflow-auto border-2

     lg:w-11/12 lg:m-auto lg:left-1/2
    '>


      <h1 className='   text-3xl'>{data.title}</h1>

      <div className='flex gap-2 text-xl'>
        <div> Tech : </div>
        <div> {data.tech} </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='text-xl underline'> Path description:  </div>
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


                    <a href={data.demoLink} className="my-3" target="_blank"> <FiExternalLink/></a>
                  }
      </div>

      
      <div className='flex ml-2 items-center text-xl gap-2'>
        
        Up Votes :

        <div
          onClick={() => {

            UpdateProject({ title: data.title, type: "vote" })
              .then(() => {
                window.location.reload();
              })

          }}
          className='flex cursor-pointer  hover:bg-green-400 rounded-lg p-2 hover:text-white w-fit  items-center text-2xl'>
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