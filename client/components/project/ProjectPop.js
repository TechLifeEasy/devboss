import React , {useEffect, useState}from 'react';
import { BsBookmarkCheckFill } from 'react-icons/bs'
import { BiLike } from 'react-icons/bi';
import {FiExternalLink} from 'react-icons/fi';
import { UpdateProject, UpdateSource } from '../../Api/Api'
import { get } from '../../Api/url_data';

import { DeleteSource } from '../../Api/Api';



export default function ProjectPop({ data }) {
  console.log( data.description.split('\n'))

  const [userName, setuserName] = useState('');

  useEffect(()=>{

    let userName_e= (localStorage.getItem('User')?JSON.parse(localStorage.getItem('User')).data.name :'')

    setuserName(userName_e)
  },[])


  return (
    <div className='flex flex-col  w-10/12 gap-8 p-5
     mx-auto mt-3 border-2 p-2 mb-5 hover:shadow-black'>
      <h1 className='text-center bg-sky-800 p-2  rounded-3xl font-serif text-white   text-3xl'>{data.title}</h1>
      <div className='flex gap-2 text-xl'>
        <div> Name : </div>
        <div> {data.creator} </div>
      </div>
      <div className='flex gap-2 text-xl'>
        <div> Tech : </div>
        <div> {data.tech} </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='text-xl underline'> Project description:  </div>
        <div className='p-2'>
          {
            data.description.split('\n').map((data) => {
              return <div >{data}</div>
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
        <div>
          {
            data.creator==userName

            &&
          <button  className='p-4 bg-red-500  text-white' onClick={
            ()=>{

              DeleteSource({title:data.title}).then(()=>
              {

                window.location.href='/project'

              }).catch((e)=>console.log(e))

          }}>
            Delete
          </button>
          }

        </div>

     

    </div>
  )
}