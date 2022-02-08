import {React,useEffect} from 'react';
import AboutMe from './AboutMe';
import SocialLinks from './SocialLinks';
import Tab from './tab'


export default function User({data}) {

  
  return (
    <>
    <AboutMe data={data}></AboutMe>
    <SocialLinks data={data}></SocialLinks>
    <Tab data={data}/>
    </>


  );
}
