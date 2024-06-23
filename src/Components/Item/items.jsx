import React, { useEffect, useState } from "react";
import acImg from "../../images/ac.png";
import plumberImg from "../../images/plumber.png";
import hammerImg from "../../images/hammer.png";
import watertankImg from "../../images/watertank.png";
import pestImg from "../../images/pest.png";
import washingMachineImg from "../../images/washingmachine.png";
import paintRollerImg from "../../images/paintroller.png";
import handspadeImg from "../../images/handspade.png";
import brickImg from "../../images/brick.png";
import ropeImg from "../../images/facadeCleaning.png";
import electrical1 from "../../images/electrical1.png";
import elevator from "../../images/elevator.png";
import { NavLink } from "react-router-dom";
import "./items.css";

const generateLink = (title) => {
  return title.toLowerCase().replace(/\s+/g, "-");
};

const itemsData = [
  {
    img: acImg,
    alt: "AC",
    title: "Air Conditioning",
    description: "Keep your home cool",
    link: generateLink("Air Conditioning"),
  },
  {
    img: electrical1,
    alt: "AC",
    title: "Electrical",
    description: "Safe and reliable power",
    link: generateLink("Electrical"),
  },
  {
    img: plumberImg,
    alt: "Plumbing",
    title: "Plumbing",
    description: "Reliable water flow",
    link: generateLink("Plumbing"),
  },
  {
    img: hammerImg,
    alt: "Handyman",
    title: "Handyman",
    description: "Fixes for your home",
    link: generateLink("Handyman"),
  },
  {
    img: watertankImg,
    alt: "Water Tank",
    title: "Water Tank",
    description: "Clean and healthy water",
    link: generateLink("Water Tank"),
  },
  {
    img: pestImg,
    alt: "Pest Control",
    title: "Pest Control",
    description: "Keep pests away",
    link: generateLink("Pest Control"),
  },
  {
    img: washingMachineImg,
    alt: "Appliances",
    title: "Appliances",
    description: "Keep your home running",
    link: generateLink("Appliances"),
  },
  {
    img: paintRollerImg,
    alt: "Painting",
    title: "Painting",
    description: "Fresh and vibrant walls",
    link: generateLink("Painting"),
  },
  {
    img: handspadeImg,
    alt: "LandScaping",
    title: "LandScaping",
    description: "Beautiful outdoor spaces",
    link: generateLink("LandScaping"),
  },
  {
    img: brickImg,
    alt: "Civil Work",
    title: "Civil Work",
    description: "Strong and durable structures",
    link: generateLink("Civil Work"),
  },
  {
    img: ropeImg,
    alt: "Facade Cleaning",
    title: "Facade Cleaning",
    description: "Sparkling clean exteriors",
    link: generateLink("Facade Cleaning"),
  },
  {
    img: elevator,
    alt: "Elevators ",
    title: "Elevators ",
    description: "Smooth and safe rides",
    link: generateLink("Elevators"),
  },
];

const Items = () => {
  const [innerWidth, setInnerWidth] = useState();

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, [window.innerWidth]);
  console.log(innerWidth);
  return (
    <div className="container py-sm-5">
      <div className='row one-trip-row px-sm-0 px-3 item-card'>
        {itemsData.map((item, index) => (
          <div
            className={`col-12 col-sm-6 p-2 ${innerWidth<768 ? 'col-md-3' : 'item-sub-card' }`}
            key={index}
          >
            <div className="bg-white w-100 d-flex align-items-center justify-content-center py-5">
              <NavLink
                to={`services/${item.link}`}
                style={{
                  textDecoration: "none",
                  background: "white",
                  textAlign: "center",
                }}
              >
                <img src={item.img} alt={item.alt} style={{ height: "7rem" }} />
                <div className="grid-text-container">
                  <h5 className="poppin" style={{ color: "black" }}>
                    {item.title}
                  </h5>
                  <small className="lato" style={{ color: "#A5A5A5" }}>
                    {item.description}
                  </small>
                </div>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
