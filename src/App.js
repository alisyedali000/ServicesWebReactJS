import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experience from "./Components/Experience/Experience";
import Banner from "./Components/BannerSection/Banner";
import Qualities from "./Components/Quality/qualities";
import Services from "./Components/Services/Services";
import Items from "./Components/Item/items";
import Trip from "./Components/Trip/Trip";
import Away from "./Components/Away/Away";
import Crousel from "./Components/Crousel/Crousel";
function App() {
  return (
    <>
      <Router>
        <Navbar />
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
        <Services title="What our Customers  Say!" />
        <Crousel />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Experience />
        <Footer />
      </Router>
    </>
  );
}

export default App;
