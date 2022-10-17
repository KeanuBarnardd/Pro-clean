import React from "react";
import { Header , Banner} from "../../Components/index";
import { images } from "../../Constants/images";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <div className="app__flex app__container contact ">
        <div className="app__container-width">
          <p className="content__title">
            <span>contact</span>
          </p>
          <h1 className="head-text">Get in Touch</h1>
          <p className="p-text text-center">
            Looking to touch base,want a quote on your project or have a question to ask. We always like to keep an open connection with all past, current and future clients. We look forward to hearing from you.
          </p>
          <div className="form__container">
            <div className="form__socials-container">
              <h1>Contact Information</h1>
              <p className="p-text">
                Get in touch with us through our socials or give us a call if you need an urgent clean. We have on hand staff ready to get the job done at a moments notice.
              </p>
              <div className="socials__container">
                <i className="fa-solid fa-phone"></i>
                <p className="p-text">+0456 847 719</p>
              </div>
              <div className="socials__container">
                <i className="fa-solid fa-envelope"></i>
                <p className="p-text"> proClean@melbprocleaners.com.au</p>
              </div>
              <div className="socials__container">
                <i className="fa-solid fa-location-dot"></i>
                <p className="p-text">Melbourne, Hoppers Crossing 3029</p>
              </div>
              <img src={images.logoSvg} alt="" />
            </div>

            <form action="">
              <div className="row">
                <div className="input__container">
                  <p className="p-text">Your Name</p>
                  <input type="text" placeholder="Johnathon" />
                </div>
                <div className="input__container">
                  <p className="p-text">Your Name</p>
                  <input type="text" placeholder="Sharp" />
                </div>
              </div>
              <div className="input__container">
              <p className="p-text">Your Subject</p>
                <input type="text" placeholder="Looking for a quote for 2 bed house" />
              </div>
              <div className="input__container">
              <p className="p-text">Message</p>
                <textarea type="text" placeholder="Looking for a quote for 2 bed house" />
              </div>
              <button className="btn btn-secondary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
