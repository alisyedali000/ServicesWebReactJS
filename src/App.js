import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Dynamic from "./Pages/Dynamic/Dynamic";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Service from "./Pages/Services";

function App() {
  return (
    <div className="bg-white">
      <Router>
      {/* <Navbar /> */}
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dynamic" element={<Dynamic />} />
          <Route path="/services/:id" element={<Service />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
