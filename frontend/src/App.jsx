import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Services,
  Contact,
  About,
  Booking,
  CommercialCleaning,
  HomeCleaning,
  LeaseCleaning,
  UpholsteryCleaning,
  Pricing,
} from "./Containers/index";

import { Navbar, Footer } from "./Components/index";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="booking" element={<Booking />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="commercialCleaning" element={<CommercialCleaning />} />
          <Route path="homeCleaning" element={<HomeCleaning />} />
          <Route path="leaseCleaning" element={<LeaseCleaning />} />
          <Route path="upholsteryCleaning" element={<UpholsteryCleaning />} />
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
