import React, { Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import GetAQuote from "./Pages/GetAQuote/GetAQuote";

const Home = React.lazy(() => import("./Pages/Home/Home"));
const Dynamic = React.lazy(() => import("./Pages/Dynamic/Dynamic"));
const Service = React.lazy(() => import("./Pages/Services"));
const EnquiryForm = React.lazy(() => import("./Pages/Contact/EnquiryForm"));


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dynamic" element={<Dynamic />} />
            <Route path="/services/:id" element={<Service />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/contact" element={<EnquiryForm />} />
            <Route path="/quote" element={<GetAQuote />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
}

export default App;
