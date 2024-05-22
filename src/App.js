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
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Banner />
        <div className="position-relative">
          <Qualities />
        </div>
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
