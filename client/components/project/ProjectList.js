import {React,useState} from 'react';
import Search from '../helpers/Search'
import {FiExternalLink} from 'react-icons/fi'
import {IoIosArrowDropdown,IoIosArrowDropup} from 'react-icons/io'
import {MdOutlineThumbUpOffAlt,MdOutlineThumbDown} from 'react-icons/md';

export default function ProjectList() {
  const [show,setShow]=useState(false);
  const [index,setIndex]=useState(-1);
  const data=[{
title: "Stock Market Prediction",
description: "dassdas asdasdnjasnd asdhjsadnjds nsjadknasdn jdsjnjsadn",
demoLink: "https://github.com/zeel-codder/aces_web",
upVote:0,
comment: ["Good One","Nice"],
creator: "Harshad Mehta",
// state:String,
tech:"ML,Web,Blockchain",
// isIdea:Boolean
},
{
title: "abc",
description: "dassdas asdasdnjasnd asdhjsadnjds nsjadknasdn jdsjnjsadn",
demoLink: "https://github.com/zeel-codder/aces_web",
upVote:0,
comment: ["Good One","Nice"],
creator: "Me",
// state:String,
tech:"ML,Web",
// isIdea:Boolean
},
{
title: "abc",
description: "dassdas asdasdnjasnd asdhjsadnjds nsjadknasdn jdsjnjsadn",
demoLink: "https://github.com/zeel-codder/aces_web",
upVote:0,
comment: ["Good One","Nice"],
creator: "Me",
// state:String,
tech:"ML,Web",
// isIdea:Boolean
},
{
title: "abc",
description: "dassdas asdasdnjasnd asdhjsadnjds nsjadknasdn jdsjnjsadn",
demoLink: "https://github.com/zeel-codder/aces_web",
upVote:0,
comment: ["Good One","Nice"],
creator: "Me",
// state:String,
tech:"ML,Web",
// isIdea:Boolean
},
{
title: "abc",
description: "dassdas asdasdnjasnd asdhjsadnjds nsjadknasdn jdsjnjsadn",
demoLink: "https://github.com/zeel-codder/aces_web",
upVote:0,
comment: ["Good One","Nice"],
creator: "Me",
// state:String,
tech:"ML,Web",
// isIdea:Boolean
},
{
title: "abc",
description: "dassdas asdasdnjasnd asdhjsadnjds nsjadknasdn jdsjnjsadn",
demoLink: "https://github.com/zeel-codder/aces_web",
upVote:0,
comment: ["Good One","Nice"],
creator: "Me",
// state:String,
tech:"ML,Web",
// isIdea:Boolean
}
                
            
        
    
  
]

  return(

  <div>

  <Search></Search>
  <div className='flex flex-row gap-3 mt-3 justify-center items-center flex-wrap '>
    {data.map((ele,ind)=>{
      return(
        <div key={ind} className='flex p-1 justify-center items-center  mt-3 shadow-lg shadow-blue-500/50 rounded-lg bg-sky-800 flex-col w-1/4 '>
        <div className='flex flex-row w-full  '>
          <h1 className='font-bold w-full  text-center text-white'>{ele.creator}</h1>
          </div>
          <p className='font-bold  text-center w-full mr-auto text-white'>{ele.title}</p>
          <div className='flex flex-col items-center'>
          <p className='shadow-sky-900 font-bold text-center shadow-lg m-2 bg-sky-200  rounded-sm mt-2 p-2'>{ele.description}</p>
          {/* {(show===true) && (ind==index) ?<>
            <IoIosArrowDropup onClick={()=>{setShow(!show);setIndex(-1)}} size={25} color='white' className='block mt-2 '/>
          {/* </>:
          <>
              <IoIosArrowDropdown onClick={()=>{setShow(!show); setIndex(ind)}} size={25} color='white' className='block mt-2 '/>
          </>}
             */}
            <a   href={ele.demoLink} target="_blank"> <FiExternalLink color='white' className='mt-3'></FiExternalLink></a>
          </div>
          <div className='flex flex-row flex-wrap items-center text-center justify-center gap-1 '>
          {(ele.tech).split(",").map((tc)=>{
            return(
              <p className='bg-sky-200 p-1 mt-2 rounded-xl '>{tc}</p>
            );
          })}
          </div>
            {/* <h1 className='text-white  text-right'>{ele.tech}</h1> */}
          <div className='flex flex-row items-center '>
          <button className=' p-1'><MdOutlineThumbUpOffAlt color='white'/></button>
          <p className='p-2 mt-0  text-white'>{ele.upVote}</p>
          </div>

          <br/>
          
           
        </div>
      )
    })}
  </div>



  </div>
  
  );
}
