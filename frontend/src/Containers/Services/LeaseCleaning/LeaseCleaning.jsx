import React from "react";
import { Banner, MissionCard } from "../../../Components/index";
import { images } from "../../../Constants/images";
import { Link } from "react-router-dom";
import "./LeaseCleaning.scss";

const LeaseCleaning = () => {
  return (
    <>
      <Banner
        title={"Lease Cleaning"}
        button="Book now"
        link={"/booking"}
        text={
          <p className="p-text">
            When your new tenants move into a cared-for, clean property, you're setting their
            expectations for how your property should be looked after. So if you want to leave high
            expectations for your tenants. Procleaners will get the job done for you.
          </p>
        }
      />

      <div className="app__container app__flex">
        <div className="app__container-width">
          <p className="content__title">
            <span>How we operate</span>
          </p>
          <div className="commercial__container">
            <img src={images.officeSpace1} alt="" />
            <div className="commercial__container-content">
              <h1 className="head-text">Getting ready for new tenants</h1>
              <p className="p-text">
                Cleaning for new tenants is an essential part of service as a succesful land lord.
                We make sure your unit is spotless upon finish. Sweeping, dusting, vacuuming,
                surfaces and rubbish removal is all done to ensure the location is ready for new
                tenants to move in.
              </p>
              <div className="commercial__grid">
                <p className="commercial-tag">
                  {" "}
                  <i className="fa-solid fa-check"></i> Vacuuming
                </p>
                <p className="commercial-tag">
                  {" "}
                  <i className="fa-solid fa-check"></i> Windows
                </p>
                <p className="commercial-tag">
                  {" "}
                  <i className="fa-solid fa-check"></i> Tidying
                </p>
                <p className="commercial-tag">
                  {" "}
                  <i className="fa-solid fa-check"></i> Wet Areas
                </p>
              </div>
              <Link className="btn btn-secondary" to={"/contact"}>
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="app__container app__flex bg-grey">
        <div className="app__container-width">
          <p className="content__title">
            <span>Process</span>
          </p>
          <h1 className="head-text">Our process of cleaning </h1>
          <div className="mission__grid">
            <MissionCard
              title={"Vaccuming & Mopping"}
              icon={"fa-broom"}
              content={
                <p className="p-text">
                  Getting straight to it provides we vacuum and mop your floors, so your tenants are pleased to have clean fresh floors for their new furniture.
                </p>
              }
            />
            <MissionCard
              title={"Surfaces"}
              icon={"fa-spray-can"}
              content={
                <p className="p-text">
                  Cleaning, dusting and wipeing down all surfaces through out the house.
                </p>
              }
            />
            <MissionCard
              title={"Mission"}
              icon={"fa-droplet"}
              content={
                <p className="p-text">
                  Washing everything, including walls, joinery, bathrooms, tiles, walls. Everything is done so that your tenant is happy moving in.
                </p>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaseCleaning;
