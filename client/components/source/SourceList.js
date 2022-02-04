import React, { useEffect, useState } from 'react';
import Search from '../helpers/Search'
import SourceForm from './SourceForm';
import { AiOutlineUser } from 'react-icons/ai';
import SourcePop from './SourcePop';


export default function SourceList() {

  const [showForm, setShowForm] = useState(false);

  const [showPopPage, setShowPopPage] = useState({ show: false, index: -1 });

  function showPop(index) {

    console.log(index)

    setShowPopPage({ show: !showPopPage.show, index })

  }

  return (
    <>




      {

        showPopPage.show

          ?
          <SourcePop
            showPop={showPop}

          ></SourcePop>
          :


          <div>
            <div className={`flex align-middle justify-between 
      `}>

              <Search></Search>
              <button
                className="h-10 text-white rounded-lg bg-red-500 hover:bg-red-600 px-2"
                onClick={() => {
                  setShowForm(!showForm);
                }}

              >Add Source</button>
            </div>

            {
              showForm && <SourceForm></SourceForm>
            }



            <Sources showPop={showPop}></Sources>



          </div>
      }
    </>

  );
}

const demo = [1, 2, 3, 4, 4, 5, 6, 7]

function Sources({ showPop }) {
  return (

    <div>


      <div className={`relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 my-5 `}>
        {
          demo.map((data, index) => {
            return <Source showPop={showPop} index={index}
            ></Source>
          })
        }
      </div>

    </div>

  );
}


function Source({ showPop, index }) {

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
            <AiOutlineUser></AiOutlineUser>

          </div>
          <div className=' pt-2 pl-2'>
            zeel prajapati
          </div>
        </div>
        <p className="mb-2 font-bold">Football Sports</p>
        <p className="text-sm leading-5 text-gray-900">
          Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>
      <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
    </div>

  )

}
