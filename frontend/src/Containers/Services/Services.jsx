import React from "react";
import { Tag, Banner, GridItem } from "../../Components/index";
import { images } from "../../Constants/images";
import "./Services.scss";

const Services = () => {
  return (
    <>
      <Banner
        title={"Services"}
        button="Home cleaning"
        link={"/homeCleaning"}
        text={
          <p className="p-text">
            We cover an array of services from floor cleaning, mopping, surfaces, windows, rubbish
            removal and more. If you want to learn more about what we do seek below for more
            information.
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
                <Tag color={""} icon={"fa-bell-concierge"} text="Best Services" />
                <Tag color={""} icon={"fa-clock"} text="On-time working" />
                <Tag color={"light-green"} icon={"fa-headset"} text="24/7 Customer Support" />
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
          <p className="p-text">
            Confused on what our cleaning packages containers, heres a guide to understanding what
            you are buying when you work with ProCleaners Melbourne. We cover an array of areas from
            surface cleaning, rubbish removal to industrial warehouse cleaning operations. There is
            no job too big or too small for Pro Cleaners.{" "}
          </p>
          <div className="grid__container">
            <GridItem
              image={images.servicesImg1}
              title={"Commercial & Industrial"}
              content={
                <p className="p-text">
                  All aspects of commercial and industrial cleaning are done with ProCleaners. From
                  office windows, to retail floors we use the best disinfectant and floor polish.
                </p>
              }
            />
            <GridItem
              image={images.servicesImg2}
              title={"Surfaces & Organising"}
              content={
                <p className="p-text">
                  Our teams are cleaning every surface with commercial grade, no harmful chemicals
                  cleaning products. We wipe, polish, disinfect and organise every area cleaned.
                </p>
              }
            />
            <GridItem
              image={images.servicesImg3}
              title={"Kitchens & Wet areas"}
              content={
                <p className="p-text">
                  Taking the time to make sure your wet areas are sparkling clean for guests is what
                  we do. We get out all the grit in every crevice, so your kitchens spotless.
                </p>
              }
            />
            <GridItem
              image={images.servicesImg4}
              title={"Mopping & Vacuuming"}
              content={
                <p className="p-text">
                  Our domestic floor cleaning process is unmatched. We first sweep, then vacuum and
                  finish with a nice floor polish mop to spice up your floorboards or tiles.
                </p>
              }
            />
            <GridItem
              image={images.servicesImg6}
              title={"Rubbish Removal"}
              content={
                <p className="p-text">
                  We get rid of everything in your home that you don't need. We are eco friendly so
                  we make sure everything is going where it needs to be.
                </p>
              }
            />
            <GridItem
              image={images.servicesImg5}
              title={"Window Cleaning"}
              content={
                <p className="p-text">
                  Having a good view is key to a brigt home, so we take care of all your windows.
                  Making sure they are cyrstal clear and smelling good is apart of our plan.
                </p>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
