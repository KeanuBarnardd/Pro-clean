import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../Constants/images";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="app__flex footer">
        <footer className="app__container-width">
          <div className="footer__details">
            <h2>ProCleaners</h2>
            <p className="p-text">
              Proffesional cleaning services in Melbourne. The best in town and all around.
            </p>
            <div className="footer__socials-container">
              <a href="">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <p className="p-text">@2022 Copyright ProCleaners</p>
          </div>

          <div className="footer__content">
            <p className="footer-title">Quick Links</p>
            <Link className="footer-link" to={"about"}>
              Home
            </Link>
            <Link className="footer-link" to={"services"}>
              Services
            </Link>
            <Link className="footer-link" to={"contact"}>
              Contact
            </Link>
            <Link className="footer-link" to={"pricing"}>
              Pricing
            </Link>
          </div>
          <div className="footer__content">
            <p className="footer-title">Cleaning Services</p>
            <Link className="footer-link" to={"commercialCleaning"}>
              Commercial Cleaning
            </Link>
            <Link className="footer-link" to={"homeCleaning"}>
              Home Cleaning
            </Link>
            <Link className="footer-link" to={"leastCleaning"}>
              Lease Cleaning
            </Link>
            <Link className="footer-link" to={"upholsteryCleaning"}>
              Upholstery Cleaning
            </Link>
          </div>
          <div className="footer__content">
            <p className="footer-title">Cleaning Services</p>
            <p className="footer-text-dark">Open hours: </p>
            <p className="footer-text-dark">Cleaning 7 days per week</p>
            <p className="footer-text-dark">8:00AM - 8:00PM</p>
            <p className="footer-text-green">info@proCleaners.com.au</p>
            <p className="footer-text-green">+432 846 256</p>
          </div>
        </footer>
      </div>
      <div className="app__flex footer-bottom">
        <p>@2022 ProCleaners Melbourne | Cleaning Melbourne | GDPR and cookie conset</p>
      </div>
    </>
  );
};

export default Footer;
