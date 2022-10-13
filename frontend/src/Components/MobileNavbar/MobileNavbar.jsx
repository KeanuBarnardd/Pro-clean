import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { images } from "../../Constants/images";
import "./MobileNavbar.scss";

const MobileNavbar = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(true);
  const [toggleSubMenu, setToggleSubMenu] = useState(false);

  const toggleNav = () => {
    toggleMobileNav ? setToggleMobileNav(false) : setToggleMobileNav(true);
  };

  return (
    <div className="mobile__nav app__container-width">
      <div className="mobile__nav-top">
        <Link to={"/"} className="home-link">
          <img src={images.logoGreenSmall} />
        </Link>
        <button
          onClick={() => {
            toggleNav();
          }}
        >
          X
        </button>
      </div>
      <div className={`mobile__navigation ${toggleMobileNav ? "active" : ""}`}>
        <NavLink className="mobile-nav-link" to={"/about"}>
          <p>About</p>
        </NavLink>
        <NavLink className="mobile-nav-link" to={"/contact"}>
          <p>Contact</p>
        </NavLink>
        <NavLink className="mobile-nav-link" to={"/pricing"}>
          <p>Pricing</p>
        </NavLink>
        <div className={`mobile__sub-nav ${toggleSubMenu ? "active" : ""}`}>
          <div className="services__btn">
            <NavLink to={"services"} className="mobile-nav-link">
              Services
            </NavLink>
            <button
              onClick={() => {
                toggleSubMenu ? setToggleSubMenu(false) : setToggleSubMenu(true);
              }}
            >
              {toggleSubMenu ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i> }
            </button>
          </div>
          <div className={`sub__nav-list ${toggleSubMenu ? "active" : ""}`}>
            <Link className="sub-nav-link" to={"/commercialCleaning"}>
              <p> Commercial Cleaning</p>
            </Link>
            <Link className="sub-nav-link" to={"/homeCleaning"}>
              <p>Home cleaning</p>
            </Link>
            <Link className="sub-nav-link" to={"/leaseCleaning"}>
              <p>Lease cleaning</p>
            </Link>
            <Link className="sub-nav-link" to={"/upholsteryCleaning"}>
              <p> Upholstery cleaning</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
