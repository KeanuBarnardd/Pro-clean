import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { images } from "../../Constants/images";
import {MobileNavbar} from '../index';

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="app__flex navbar">
      <MobileNavbar/>
      <div className="navbar__content app__container-width">
        <div className="main__container">
          <Link to={"/"} className="home-link">
            <img src={images.logoGreenSmall} />
          </Link>
        </div>
        <div className="nav__links">
          <div className="navigation">
            <NavLink className="nav-link" to={"/services"}>
              Services
              <i className="fa-solid fa-chevron-down"></i>
            </NavLink>
            <div className="sub-nav">
              <div>
                <Link className="sub-nav-link" to={"/commercialCleaning"}>
                  <i className="fa-solid fa-building-columns"></i> Commercial Cleaning
                </Link>
                <Link className="sub-nav-link" to={"/homeCleaning"}>
                  <i className="fa-solid fa-house"></i>
                  Home cleaning
                </Link>
                <Link className="sub-nav-link" to={"/leaseCleaning"}>
                  <i className="fa-solid fa-calendar-check"></i>
                  Lease cleaning
                </Link>
                <Link className="sub-nav-link" to={"/upholsteryCleaning"}>
                  <i className="fa-solid fa-chair"></i>
                  Upholstery cleaning
                </Link>
              </div>
              <Link className="booking-btn" to={"/booking"}>
                <p>Get a free quote</p>
                <span>Booking</span>
              </Link>
            </div>
          </div>
          <NavLink className="nav-link" to={"/about"}>
            About
          </NavLink>
          <NavLink className="nav-link" to={"/contact"}>
            Contact
          </NavLink>
          <NavLink className="nav-link" to={"/pricing"}>
            Pricing
          </NavLink>
        </div>
        <Link className="btn btn-secondary" to={"/booking"}>
          Booking
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
