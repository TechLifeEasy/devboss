import {React,useState} from 'react';
import Search from '../helpers/Search'
import {HiExternalLink,HiFilter} from 'react-icons/hi';
import {AiFillLinkedin} from 'react-icons/ai';
import {GrPowerReset} from 'react-icons/gr';

export default function HackathonFind(){
    const data=[{
        name:"webathon",
        creator:"Baburao",
        tech:"ML,Web,BlockChain",
        link:"https://dare2compete.com/hackathon/uber-hacktag-20-uber-technologies-inc-260528",
        contact:"https://www.linkedin.com/in/dhruvil-shah-444a92108/"
    },
    {
        name:"webathon",
        creator:"Baburao",
        tech:"ML,Web",
        link:"https://dare2compete.com/hackathon/uber-hacktag-20-uber-technologies-inc-260528",
        contact:"https://www.linkedin.com/in/dhruvil-shah-444a92108/"
    },
    {
        name:"webathon",
        creator:"Baburao",
        tech:"ML,Web",
        link:"https://dare2compete.com/hackathon/uber-hacktag-20-uber-technologies-inc-260528",
        contact:"https://www.linkedin.com/in/dhruvil-shah-444a92108/"
    },
    {
        name:"webathon",
        creator:"Baburao",
        tech:"ML,Web",
        link:"https://dare2compete.com/hackathon/uber-hacktag-20-uber-technologies-inc-260528",
        contact:"https://www.linkedin.com/in/dhruvil-shah-444a92108/"
    },
    {
        name:"webathon",
        creator:"Baburao",
        tech:"ML,Web",
        link:"https://dare2compete.com/hackathon/uber-hacktag-20-uber-technologies-inc-260528",
        contact:"https://www.linkedin.com/in/dhruvil-shah-444a92108/"
    }]
const[show,setShow]=useState(false);
const[fdata,setFdata]=useState(data);
const filterData=(dt)=>{
    let newData=[];
    let arr=dt.split(",");
    arr = arr.map(name => name.toLowerCase());
    data.map((ele)=>{
        let x=false;
        ele.tech.split(",").forEach((tec)=>{
            if(arr.includes(tec.toLowerCase())){
                x=true;
            }
        })
        if(x)
        newData.push(ele)
    })
    setFdata(newData);
    console.log(newData);
}

  return(

  <div>
    <div className='flex flex-row justify-center gap-2   '>
  <Search  alert={filterData}></Search>
  <button onClick={()=>{setFdata(data)}}><GrPowerReset size={20} className='my-auto'/></button>
  {/* <button onClick={()=>{setShow(true)}}><HiFilter className='my-auto mr-10 ' size={30} /></button> */}
  </div>
  <div className='flex flex-row  gap-3 mt-3 justify-center items-center flex-wrap '>
    {fdata.map((ele,ind)=>{
      return(
        <div key={ind} className='flex p-1 justify-center items-center  mt-3 shadow-lg shadow-blue-500/50 rounded-lg bg-sky-800 flex-col w-1/4 '>
        <div className='flex flex-row w-full  '>
          <h1 className='font-bold w-full  text-center text-white'>{ele.name}</h1>
          </div>
          <p className='font-bold  text-center w-full mr-auto text-white'>{ele.creator}</p>
          <div className='flex flex-row flex-wrzap items-center text-center justify-center gap-1 '>
          {(ele.tech).split(",").map((tc)=>{
            return(
              <p className='bg-sky-200 p-1 mt-2 rounded-xl '>{tc}</p>
            );
          })}
          </div>
          <div className='flex flex-col items-center'>
            <a   href={ele.link} target="_blank"> <HiExternalLink color='white' className='mt-3'></HiExternalLink></a>
            <a   href={ele.contact} target="_blank"> <AiFillLinkedin color='white' className='mt-3'></AiFillLinkedin></a>
          </div>
           
        </div>
      )
    })}
  </div>



  </div>
  
  );
}