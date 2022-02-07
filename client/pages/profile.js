import React from "react";
import AboutMe from "../components/AboutMe";
import HackathonCard from "../components/hackathonCard";
import ProfileCard from "../components/projectCard";
import SocialLinks from "../components/SocialLinks";
import Tab from "../components/tab";

const Profile = () => {
  return (
    <div>
      <div className="sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 ">
        <AboutMe />
        <SocialLinks />
      </div>
      <Tab />
      <div className="sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>

      <div className="sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3">
        <HackathonCard />
        <HackathonCard />
        <HackathonCard />
      </div>
    </div>
  );
};

export default Profile;
