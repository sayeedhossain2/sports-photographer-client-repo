import React from "react";
import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import Service from "../Service/Service";
import Subcribe from "../Subcribe/Subcribe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <ExtraSection></ExtraSection>
      <Subcribe></Subcribe>
    </div>
  );
};

export default Home;
