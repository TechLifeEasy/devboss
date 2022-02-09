import React from "react";
import {AiFillTwitterCircle,AiFillLinkedin,AiFillGithub,AiTwotoneFileImage} from 'react-icons/ai';
import {BsDiscord} from 'react-icons/bs';
import {SiFirefoxbrowser} from 'react-icons/si'

const SocialLinks = ({data}) => {
  console.log(data);
  return (
    <div className=" my-10 bg-sky-400 w-fit p-2 mx-auto   justify-center flex gap-3 flex-row">
    <a className="bg-white  p-2  hover:bg-sky-900 hover:text-white " href={data.github} target="_blank"><AiFillGithub size={30}/></a>
    <a className="bg-white p-2  hover:bg-sky-900 hover:text-white " href={data.twitter} target="_blank"><AiFillTwitterCircle size={30}/></a>
    <a className="bg-white p-2  hover:bg-sky-900 hover:text-white " href={data.linkedin} target="_blank"><AiFillLinkedin size={30}/></a>
    {/* <a className="bg-white p-2  hover:bg-sky-900 hover:text-white " href={data.discord} target="_blank"><BsDiscord size={30}/></a> */}
    <a className="bg-white p-2  hover:bg-sky-900 hover:text-white " href={data.resume} target="_blank"><AiTwotoneFileImage size={30}/></a>
    <a className="bg-white p-2  hover:bg-sky-900 hover:text-white " href={data.website} target="_blank"><SiFirefoxbrowser size={30}/></a>


     
    </div>
  );
};

export default SocialLinks;
