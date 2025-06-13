import React from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import NewsLetter from "../components/NewsLetter";
import Trips from "../components/extraSection/Trips";
import CommunitySpotlight from "../components/extraSection/CommunitySpotlight";
 
const Home = () => {
  return (
    <div>
      <Header />
      <Blogs />
      <NewsLetter />
      <Trips/>
      <CommunitySpotlight/>
 
    </div>
  );
};

export default Home;
