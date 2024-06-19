import React from "react";
import "../../App.css";
import Banner from "../../Components/BannerSection/Banner";
import Qualities from "../../Components/Quality/qualities";
import Services from "../../Components/Services/Services";
import Items from "../../Components/Item/items";
import Trip from "../../Components/Trip/Trip";
import Away from "../../Components/Away/Away";
import Crousel from "../../Components/Crousel/Crousel";
import Detail from "../../Components/Detail/Detail";
import Experience from "../../Components/Experience/Experience";
import Dynamic from "../Dynamic/Dynamic";

function Home() {
  return (
    <>
       
        {/* <Dynamic /> */}
        {/* <Items /> */}
        <Banner />
        <div className="qualities-bg">
          <Qualities />
          <Services
            title="Our Services"
            text="Everything You Need for Your Home, All in One Place"
          />
          <Items />
        </div>
        <Trip />
        <Away />
        {/* <Services title="What our Customers  Say!" />
        <Crousel /> */}
        <Experience />

    </>
  );
}

export default Home;
