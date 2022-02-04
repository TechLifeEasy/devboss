import React from 'react';
import { BsBookmarkCheckFill } from 'react-icons/bs'
import {BiUpvote} from 'react-icons/bi';

const data = {
  title: 'Zeel React js Path ',
  tech: 'React js',
  description: `React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.
  /n
  JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.`,
  courses: [
    {
      link: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
      about: 'JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.'
    },
    {
      link: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
      about: 'JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.'

    },
    {
      link: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
      about: 'JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.'

    },
  ],
  upVote:['zeel','zeel123','zeel3222']
}



export default function SourcePop({ showPop }) {
  return (

    <div className='absolute w-full h-full z-50 top-0
    py-10  left-0 flex flex-col pl-7 bg-white gap-6
     overflow-auto
    '>


      <h1 className=' text-3xl'>{data.title}</h1>

      <div className='flex gap-2'>
        <div> Tech : </div>
        <div> {data.tech} </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div> Path description  </div>
        <div>
          {

            data.description.split('/n').map((data) => {
              return <div className='py-2'>{data}</div>
            })


          }
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <div> Cources  </div>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 my-5">
          {

            data.courses.map((data, index) => {

              return (
                <div className=" cursor-pointer flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
                  onClick={


                    () => {
                      showPop(index);
                    }

                  }>

                  <div className="p-5">
                    <div className=' flex'>

                      <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-sky-900 text-white">
                        <BsBookmarkCheckFill></BsBookmarkCheckFill>


                        <div className=''>
                          {index}
                        </div>

                      </div>
                    </div>

                    <p className="text-sm leading-5 text-gray-900">
                      {
                        data.about.split('/n').map((data) => {
                          return <div>{data}</div>
                        })
                      }
                    </p>

                    <p className="mt-2 font-bold">
                      <a href={data.link} target="_blank">
                        Link
                      </a>
                    </p>
                  </div>
                  <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                </div>
              )
            })


          }
        </div>
      </div>

      <div className='flex ml-2 items-center text-xl gap-2'>

        Up Votes :

      <div className='flex cursor-pointer  hover:bg-green-400 rounded-lg p-2 hover:text-white w-fit  items-center text-2xl'>
        <BiUpvote></BiUpvote>

        <div>
          {data.upVote.length}
        </div>
      </div>
      </div>

      <button
        className=" absolute text-white rounded-lg bg-red-500 hover:bg-red-600 px-5 right-10"

        onClick={() => showPop(-1)}
      > x</button>


    </div>
  );
}