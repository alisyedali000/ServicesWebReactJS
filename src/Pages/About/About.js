import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

const Services = React.lazy(() => import("./888Services"));
const CoreValues = React.lazy(() => import("./CoreValues"));
const MissionVision = React.lazy(() => import("./Mission&Vision"));
const OurTeam = React.lazy(() => import("./OurTeam"));

function About() {
  return (
    <>
      <Routes>
        <Route path="/888 Services" element={<Services />} />
        <Route path="/Core Values" element={<CoreValues />} />
        <Route path="/Mission & Vision" element={<MissionVision />} />
        {/* <Route path="/Our Team" element={<OurTeam />} /> */}
      </Routes>
    </>
  );
}

export default About;
