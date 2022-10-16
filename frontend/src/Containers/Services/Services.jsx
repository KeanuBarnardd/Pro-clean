import React from "react";
import { Tag, Banner } from "../../Components/index";
import { images } from "../../Constants/images";
import "./Services.scss";

const Services = () => {
  return (
    <>
      <Banner
        title={"Join with the best in Melbourne, Pro cleaners"}
        button="Contact team"
        link={"/contact"}
        text={
          <p className="p-text">
            Looking to work with our team, get in touch below so we can get your spring cleaning
            done, every weekend. Get inspired with the best in Melbourne.
          </p>
        }
      />
      <div className="app__flex app__container">
        <div className="app__container-width">
          <p className="content__title">
            <span>Our services</span>
          </p>
          <h1 className="head-text">Services we provide for you </h1>
          <div className="services__intro">
            <div className="services__intro-gallery">
              <img src={images.servicesImg1} alt="" />
              <img className="img-2" src={images.servicesImg2} alt="" />
              <img src={images.servicesImg3} alt="" />
              <img className="img-2" src={images.servicesImg4} alt="" />
            </div>
            <div className="services__intro-content">
              <h1 className="head-text">Trained & Professional team for quality service.</h1>
              <p className="p-text">
                Welcome to <span>ProCleaners</span> cleaning Services , which offers superior
                cleaning services, as well as house cleaning, driveway cleaning, and many more. We
                believe in a simple approach to cleaning, whether it be in your home, a vacation
                property, or your workspace. Make the property the very finest version of itself,
                using natural, cruelty free and sustainably sourced cleaners. Also we do residential
                and commercial Cleanings.
                <ul>
                  <li>
                    Join up with us <span>today</span> and get 100$ off your first clean.
                  </li>
                  <li>
                    We do <span> 24/7</span> services Monday to Sunday
                  </li>
                  <li>Cover every aspect of cleaning</li>
                  <li>
                    Call out services for when you need <span> urgent </span> cleaning services.
                  </li>
                  <li>
                    <span>Always</span> a customer support specialist on hand to assit you.{" "}
                  </li>
                </ul>
              </p>

              <h3>There should be a reason to choose us.</h3>
              <div className="services__intro-grid">
                <Tag color={"light-green"} icon={"fa-comments-dollar"} text="Free Quote" />
                <Tag color={""} icon={"fa-comments-dollar"} text="Best Services" />
                <Tag color={""} icon={"fa-comments-dollar"} text="On-time working" />
                <Tag
                  color={"light-green"}
                  icon={"fa-comments-dollar"}
                  text="24/7 Customer Support"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app__flex app__container bg-grey">
        <div className="app__container-width">
          <p className="content__title">
            <span>Included</span>
          </p>
          <h1 className="head-text">What does your cleaning package include</h1>
        </div>
      </div>
    </>
  );
};

export default Services;
