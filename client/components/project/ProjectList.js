import { React, useState } from 'react';
import Search from '../helpers/Search'
import { FiExternalLink } from 'react-icons/fi'
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io'
import { MdOutlineThumbUpOffAlt, MdOutlineThumbDown } from 'react-icons/md';
import {GrPowerReset} from 'react-icons/gr';
import { AiOutlineUser } from 'react-icons/ai'
import { UpdateProject } from '../../Api/Api';

export default function ProjectList({ data }) {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(-1);
  const [fdata, setFdata] = useState(data);
  const filterData = (dt) => {
    let newData = [];
    let arr = dt.split(",");
    arr = arr.map(name => name.toLowerCase());
    data.map((ele) => {
      let x = false;
      ele.tech.split(",").forEach((tec) => {
        //console.log(tec);
        if (arr.includes(tec.toLowerCase().trim())) {
          x = true;
        }
      })
      if (x)
        newData.push(ele)
    })
    //console.log(newData);
    setFdata(newData);
    //console.log(newData);
  }
  // const data=[{
  // title: "Stock Market Prediction",
  // description: "dassdas asdasdnjasnd asdhjsadnjds nsjadknasdn jdsjnjsadn",
  // demoLink: "https://github.com/zeel-codder/aces_web",
  // upVote:0,
  // comment: ["Good One","Nice"],
  // creator: "Harshad Mehta",
  // // state:String,
  // tech:"ML,Web,Blockchain",
  // // isIdea:Boolean
  // },
  // {
  // title: "abc",
  // description: "dassdas asdasdnjasnd asdhjsadnjds nsjadknasdn jdsjnjsadn",
  // demoLink: "https://github.com/zeel-codder/aces_web",
  // upVote:0,
  // comment: ["Good One","Nice"],
  // creator: "Me",
  // // state:String,
  // tech:"ML,Web",
  // // isIdea:Boolean
  // },
  // {
  // title: "abc",
  // description: "dassdas asdasdnjasnd asdhjsadnjds nsjadknasdn jdsjnjsadn",
  // demoLink: "https://github.com/zeel-codder/aces_web",
  // upVote:0,
  // comment: ["Good One","Nice"],
  // creator: "Me",
  // // state:String,
  // tech:"ML,Web",
  // // isIdea:Boolean
  // },
  // {
  // title: "abc",
  // description: "dassdas asdasdnjasnd asdhjsadnjds nsjadknasdn jdsjnjsadn",
  // demoLink: "https://github.com/zeel-codder/aces_web",
  // upVote:0,
  // comment: ["Good One","Nice"],
  // creator: "Me",
  // // state:String,
  // tech:"ML,Web",
  // // isIdea:Boolean
  // },
  // {
  // title: "abc",
  // description: "dassdas asdasdnjasnd asdhjsadnjds nsjadknasdn jdsjnjsadn",
  // demoLink: "https://github.com/zeel-codder/aces_web",
  // upVote:0,
  // comment: ["Good One","Nice"],
  // creator: "Me",
  // // state:String,
  // tech:"ML,Web",
  // // isIdea:Boolean
  // },
  // {
  // title: "abc",
  // description: "dassdas asdasdnjasnd asdhjsadnjds nsjadknasdn jdsjnjsadn",
  // demoLink: "https://github.com/zeel-codder/aces_web",
  // upVote:0,
  // comment: ["Good One","Nice"],
  // creator: "Me",
  // // state:String,
  // tech:"ML,Web",
  // // isIdea:Boolean
  // }
  // ]

  return (

    <div>
 <div className='flex flex-row justify-center gap-2  flex-wrap'>
      <Search alert={filterData}></Search>
      <button className='text-white  rounded-lg bg-sky-800 hover:bg-sky-600 px-3 h-10 mt-2'
      
      onClick={() => { setFdata(data) }}>
        Refetch
      </button>
      </div>
      <div className='relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 my-5 w-10/12 m-auto'>
        {fdata !== null ?
          fdata.map((ele, ind) => {
            return (
              <div key={ind} className='flex p-1   mt-3 shadow-lg shadow-blue-5 cursor-pointer rounded-lg  justify-between flex-col hover:shadow-2xl pl-4'>

                <div className=' flex'>

                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-sky-900 text-white">
                    <AiOutlineUser></AiOutlineUser>

                  </div>
                  <a href={`/user/${ele.creator || 'zeel  prajapati'}`}>

                    <div className=' pt-2 pl-2 '>
                      {ele.creator}
                    </div>
                  </a>
                </div>


                {/* <div className='flex flex-row w-full  '>
                <h1 className='font-bold w-full  '>{ele.creator}</h1>
              </div> */}
                <p className='font-bold   w-full mr-auto '>{ele.title}</p>
                <div className='flex flex-col  '>

                  <p className='shadow-sky-900 rounded-sm mt-2 '>{ele.description.substring(0, 100) + `${ele.description.length>100 && '...'}`}</p>
                  {/* {(show===true) && (ind==index) ?<>
            <IoIosArrowDropup onClick={()=>{setShow(!show);setIndex(-1)}} size={25} color='white' className='block mt-2 '/>
          {/* </>:
          <>
              <IoIosArrowDropdown onClick={()=>{setShow(!show); setIndex(ind)}} size={25} color='white' className='block mt-2 '/>
          </>}
             */}
                  {
                    ele.demoLink
                    &&


                    <a href={ele.demoLink} className="my-3" target="_blank"> <FiExternalLink/></a>
                  }
                </div>
                <div className='flex flex-row flex-wrap items-center text-center  gap-1 '>
                  {(ele.tech).split(",").map((tc) => {
                    return (
                      <p className='bg-sky-200 p-2 mt-2 '>{tc}</p>
                    );
                  })}
                </div>
                {/* <h1 className='text-white  text-right'>{ele.tech}</h1> */}
                <div className='flex flex-row items-center mt-4 text-xl'
                  onClick={() => {

                    UpdateProject({ title: ele.title, type: "vote" })
                      .then(() => {
                        window.location.reload();
                      }).catch((e) => {
                        {
                          //console.log(e);
                        }
                      })

                  }}


                >
                  <button className=' p-1 '><MdOutlineThumbUpOffAlt /></button>
                  <p className='p-1 mt-0  '>{ele.upVote.length}</p>
                </div>

                <br />


              </div>
            )
          }) : null}
      </div>



    </div>

  );
}
