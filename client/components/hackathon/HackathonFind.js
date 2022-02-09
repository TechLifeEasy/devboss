import { React, useState, useEffect } from 'react';
import Search from '../helpers/Search'
import { HiExternalLink, HiFilter } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';
import { GrPowerReset } from 'react-icons/gr';

export default function HackathonFind({ data }) {
  // const data=[{
  //     name:"webathon",
  //     creator:"Baburao",
  //     tech:"ML,Web,BlockChain",
  //     link:"https://dare2compete.com/hackathon/uber-hacktag-20-uber-technologies-inc-260528",
  //     contact:"https://www.linkedin.com/in/dhruvil-shah-444a92108/"
  // },
  // {
  //     name:"webathon",
  //     creator:"Baburao",
  //     tech:"ML,Web",
  //     link:"https://dare2compete.com/hackathon/uber-hacktag-20-uber-technologies-inc-260528",
  //     contact:"https://www.linkedin.com/in/dhruvil-shah-444a92108/"
  // },
  // {
  //     name:"webathon",
  //     creator:"Baburao",
  //     tech:"ML,Web",
  //     link:"https://dare2compete.com/hackathon/uber-hacktag-20-uber-technologies-inc-260528",
  //     contact:"https://www.linkedin.com/in/dhruvil-shah-444a92108/"
  // },
  // {
  //     name:"webathon",
  //     creator:"Baburao",
  //     tech:"ML,Web",
  //     link:"https://dare2compete.com/hackathon/uber-hacktag-20-uber-technologies-inc-260528",
  //     contact:"https://www.linkedin.com/in/dhruvil-shah-444a92108/"
  // },
  // {
  //     name:"webathon",
  //     creator:"Baburao",
  //     tech:"ML,Web",
  //     link:"https://dare2compete.com/hackathon/uber-hacktag-20-uber-technologies-inc-260528",
  //     contact:"https://www.linkedin.com/in/dhruvil-shah-444a92108/"
  // }]
  const [show, setShow] = useState(false);
  const [fdata, setFdata] = useState(data);
  const filterData = (dt) => {
    let newData = [];
    let arr = dt.split(",");
    arr = arr.map(name => name.toLowerCase());
    data.map((ele) => {
      let x = false;
      ele.tech.split(",").forEach((tec) => {
        if (arr.includes(tec.toLowerCase().trim())) {
          x = true;
        }
      })
      if (x)
        newData.push(ele)
    })
    setFdata(newData);
    console.log(newData);
  }

  // useEffect(() => {
  //   filterData(data)
  // }, []);

  return (

    <div>
      <div className='flex flex-row justify-center gap-2  flex-wrap   '>
        <Search alert={filterData}></Search>
        <button className='text-white  rounded-lg bg-sky-800 hover:bg-sky-600 px-3 h-10 mt-2'

          onClick={() => { setFdata(data) }}>
          Refetch
        </button>
        {/* <button onClick={()=>{setShow(true)}}><HiFilter className='my-auto mr-10 ' size={30} /></button> */}
      </div>
      <div className='flex flex-col gap-3 mt-3 justify-center  flex-wrap lg:flex-row'>
        {fdata?.map((ele, ind) => {
          return (
            <div key={ind} className='flex p-1 justify-center mt-3 shadow-lg shadow-blue-500/50 rounded-lg  flex-col w-3/4 lg:w-1/4 px-3 h-full hover:shadow-2xl'>
              <div className=' flex'>

                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-sky-900 text-white">
                  <AiOutlineUser></AiOutlineUser>

                </div>
                <a href={`/user/${ele.creator || 'zeel  prajapati'}`}>
                  <div className=' pt-2 pl-2 '>
                    {ele.creator || 'zeel  prajapati'}
                  </div>
                </a>
              </div>


              <p className='w-full mr-auto pl-2'>Name : {ele.web.title}</p>
              <div className='flex flex-row flex-wrzap items-center text-center gap-1 my-3'>
                <div className='p-2'>  Tech : </div>{(ele.tech).split(",").map((tc) => {
                  return (
                    <p className='bg-sky-200 p-2 '>{tc}</p>
                  );
                })}
              </div>

              {/* <p className='w-full mr-auto pl-2'>Link</p> */}

              <div className='flex flex-col items-center'>
                <a href={ele.link} target="_blank"> <HiExternalLink color='white' className='mt-3'></HiExternalLink></a>
                {/* <a href={ele.contact} target="_blank"> <AiFillLinkedin color='white' className='mt-3'></AiFillLinkedin></a> */}
              </div>
              <div className=' px-2 cursor-pointer text-center'>
                {
                  ele.web.title
                    ?


                    <a href={ele.link} target="_blank">
                      <div >{ele.web.title}</div>
                      {/* <div>{linkData.description}</div> */}
                      <img className='h-40 m-auto' src={ele.web.img ||
                        'https://opengraph.githubassets.com/a81023c8d62b3fabe6abccc6f8505069397a2d5bf3853f39c31a1b91e750fe23/TechLifeEasy/devboss'

                      }></img>
                    </a>
                    :
                    <a className=' m-auto ' href={ele.web.link} target="_blank">
                      <div >None</div>
                      {/* <div>{linkData.description}</div> */}
                      <img src='https://opengraph.githubassets.com/a81023c8d62b3fabe6abccc6f8505069397a2d5bf3853f39c31a1b91e750fe23/TechLifeEasy/devboss'></img>
                    </a>

                }
              </div>

            </div>
          )
        })}
      </div>



    </div>

  );
}