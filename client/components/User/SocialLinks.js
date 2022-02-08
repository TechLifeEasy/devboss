import React from "react";
import {AiFillTwitterCircle,AiFillLinkedin,AiFillGithub,AiTwotoneFileImage} from 'react-icons/ai';
import {BsDiscord} from 'react-icons/bs';
import {SiFirefoxbrowser} from 'react-icons/si'

const SocialLinks = ({data}) => {
  console.log(data);
  return (
    <div className=" my-10 bg-sky-600 w-1/4 rounded-full p-2 mx-auto   justify-center flex gap-3 flex-row">
    <a className="bg-white rounded-xl p-1 shadow-lg shadow-black" href={data.github} target="_blank"><AiFillGithub size={30}/></a>
    <a className="bg-white rounded-xl p-1 shadow-lg shadow-black" href={data.twitter} target="_blank"><AiFillTwitterCircle size={30}/></a>
    <a className="bg-white rounded-xl p-1 shadow-lg shadow-black" href={data.linkedin} target="_blank"><AiFillLinkedin size={30}/></a>
    <a className="bg-white rounded-xl p-1 shadow-lg shadow-black" href={data.discord} target="_blank"><BsDiscord size={30}/></a>
    <a className="bg-white rounded-xl p-1 shadow-lg shadow-black" href={data.resume} target="_blank"><AiTwotoneFileImage size={30}/></a>
    <a className="bg-white rounded-xl p-1 shadow-lg shadow-black" href={data.website} target="_blank"><SiFirefoxbrowser size={30}/></a>


     
    </div>
  );
};

export default SocialLinks;
