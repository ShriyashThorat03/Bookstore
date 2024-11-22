/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "./Banner";
import Topseller from "./Topseller";
import Recommened from "./Recommened";
import News from "./News";

const Home = () => {
  return (
    <>
      <Banner />
      <Topseller />
      <Recommened />
      <News />
    </>
  );
};

export default Home;
