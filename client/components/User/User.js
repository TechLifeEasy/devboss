import React from 'react';
import AboutMe from './AboutMe';
import SocialLinks from './SocialLinks';


export default function User({data}) {
  return (

    <>

    <AboutMe data={data}></AboutMe>
    <SocialLinks data={data}></SocialLinks>
    </>


  );
}
