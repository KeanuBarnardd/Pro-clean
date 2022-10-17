import React from "react";
import { MissionCard, Banner } from "../../../Components/index";
import { images } from "../../../Constants/images";
import { Link } from "react-router-dom";
import "./CommercialCleaning.scss";

const CommercialCleaning = () => {
  return (
    <>
      <Banner
        title={"Commercial Cleaning"}
        button="Book now"
        link={"/booking"}
        text={
          <p className="p-text">
            Have a large commercial project you need cleaned? We have the tools to get the job done.
            From retail, office spaces to large industrial units. Work with a team of cleaning
            experts that will be at that ready 24/7.
          </p>
        }
      />
      <div className="app__flex app__container">
        <div className="app__container-width">
          <p className="content__title">
            <span>Commercial Projects</span>
          </p>

          <div className="commercial__container">
            <img src={images.officeSpace1} alt="" />
            <div className="commercial__container-content">
              <h1 className="head-text">Office spaces</h1>
              <p className="p-text">
                At Pro clean we love taking on large office spaces, we have plenty of vacuum
                cleaners on hand to get the job done. We come prepared with computer screen friendly
                wipes and disinfectent. So you can ensure that your expensive computer wares won't
                be damaged.
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
                  <i className="fa-solid fa-check"></i> Eating Areas
                </p>
                <p className="commercial-tag">
                  {" "}
                  <i className="fa-solid fa-check"></i> Car Parks
                </p>
              </div>
              <Link className="btn btn-secondary" to={"/contact"}>
                Get a quote
              </Link>
            </div>
          </div>
          <div className="commercial__container">
            <img src={images.retail1} alt="" />
            <div className="commercial__container-content">
              <h1 className="head-text">Retail </h1>
              <p className="p-text">
                If you have a store that you want to bring to life, we have the solution for you. We
                can organise, re-pack, mop, vacuum and clean your entire store. Leaving your space
                feeling brand new and welcome to customers. Your customers will thank you and your
                staff will too. So take your time to contact us so we can give you a quote on your
                store.
              </p>
              <div className="commercial__grid">
                <p className="commercial-tag">
                  {" "}
                  <i className="fa-solid fa-check"></i> Packing
                </p>
                <p className="commercial-tag">
                  {" "}
                  <i className="fa-solid fa-check"></i> Windows
                </p>
                <p className="commercial-tag">
                  {" "}
                  <i className="fa-solid fa-check"></i> Vacuuming
                </p>
                <p className="commercial-tag">
                  {" "}
                  <i className="fa-solid fa-check"></i> Tidy
                </p>
              </div>
              <Link className="btn btn-secondary" to={"/contact"}>
                Get a quote
              </Link>
            </div>
          </div>
          <div className="commercial__container">
            <img src={images.industrial1} alt="" />
            <div className="commercial__container-content">
              <h1 className="head-text">Industrial & Warehouse</h1>
              <p className="p-text">
                We have all the gear to attack huge industrial units so you can always trust to work
                with the best cleaning team in Melbourne. We have large units to tackle open floor
                spaces that can mop & vacuum. We also clean eating spaces and office spaces for the
                complete package.
              </p>
              <div className="commercial__grid">
                <p className="commercial-tag">
                  <i className="fa-solid fa-check"></i> Vacuuming
                </p>
                <p className="commercial-tag">
                  <i className="fa-solid fa-check"></i> Floor polish
                </p>
                <p className="commercial-tag">
                  <i className="fa-solid fa-check"></i> Rubbish removal
                </p>
                <p className="commercial-tag">
                  <i className="fa-solid fa-check"></i> Packing
                </p>
              </div>
              <Link className="btn btn-secondary" to={"/contact"}>
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommercialCleaning;
