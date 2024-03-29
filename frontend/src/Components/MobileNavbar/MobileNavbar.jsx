import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { images } from "../../Constants/images";
import "./MobileNavbar.scss";

const MobileNavbar = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);
  const [toggleSubMenu, setToggleSubMenu] = useState(false);

  const toggleNav = () => {
    toggleMobileNav ? setToggleMobileNav(false) : setToggleMobileNav(true);
  };

  return (
    <div className="mobile__nav app__container-width">
      <div className="mobile__nav-top">
        <Link to={"/home"} className="home-link">
          <img src={images.logoGreenSmall} />
        </Link>
        <button
          className=""
          onClick={() => {
            toggleNav();
            setToggleSubMenu(false);
          }}
        >
          <i className={`fa-solid fa-x x-icon${toggleMobileNav ? "active" : ""}`}></i>
          <i className={`fa-solid fa-bars bar-icon ${toggleMobileNav ? "" : "active"}`}></i>
        </button>
      </div>
      <div className={`mobile__navigation ${toggleMobileNav ? "active" : ""}`}>
        <NavLink
          onClick={() => {
            setToggleMobileNav(false);
          }}
          className="mobile-nav-link"
          to={"/about"}
        >
          <p>About</p>
        </NavLink>
        <NavLink
          onClick={() => {
            setToggleMobileNav(false);
          }}
          className="mobile-nav-link"
          to={"/contact"}
        >
          <p>Contact</p>
        </NavLink>
        <NavLink
          onClick={() => {
            setToggleMobileNav(false);
          }}
          className="mobile-nav-link"
          to={"/booking"}
        >
          <p>Booking</p>
        </NavLink>
        <div className={`mobile__sub-nav ${toggleSubMenu ? "active" : ""}`}>
          <div className="services__btn">
            <NavLink
              onClick={() => {
                setToggleMobileNav(false);
              }}
              to={"services"}
              className="mobile-nav-link service"
            >
              Services
            </NavLink>
            <button
              onClick={() => {
                toggleSubMenu ? setToggleSubMenu(false) : setToggleSubMenu(true);
              }}
            >
              {toggleSubMenu ? (
                <i className="fa-solid fa-chevron-up"></i>
              ) : (
                <i className="fa-solid fa-chevron-down"></i>
              )}
            </button>
          </div>
          <div className={`sub__nav-list ${toggleSubMenu ? "active" : ""}`}>
            <Link
              onClick={() => {
                setToggleMobileNav(false);
              }}
              className="sub-nav-link mobile"
              to={"/commercialCleaning"}
            >
              <p> Commercial Cleaning</p>
            </Link>
            <Link
              onClick={() => {
                setToggleMobileNav(false);
              }}
              className="sub-nav-link mobile"
              to={"/homeCleaning"}
            >
              <p>Home cleaning</p>
            </Link>
            <Link
              onClick={() => {
                setToggleMobileNav(false);
              }}
              className="sub-nav-link mobile"
              to={"/leaseCleaning"}
            >
              <p>Lease cleaning</p>
            </Link>
            <Link
              onClick={() => {
                setToggleMobileNav(false);
              }}
              className="sub-nav-link mobile"
              to={"/furnitureCleaning"}
            >
              <p> Furniture cleaning</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
