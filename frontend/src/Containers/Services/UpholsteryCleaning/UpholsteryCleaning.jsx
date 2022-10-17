import React from "react";
import { Banner, MissionCard, InfoCard } from "../../../Components/index";
import { Link } from "react-router-dom";
import { images } from "../../../Constants/images";
import "./UpholsteryCleaning.scss";

const UpholsteryCleaning = () => {
  return (
    <>
      <Banner
        title={"Upholstery Cleaning"}
        button="Book now"
        link={"/booking"}
        text={
          <p className="p-text">
            If you have a beloved chair or table that you want restored back to it original glory,
            book a clean with us to make sure it will get there. We follow a precise strategy to
            restore antique or worn items.
          </p>
        }
      />
      <div className="app__container app__flex">
        <div className="app__container-width">
          <p className="content__title">
            <span>Furniture</span>
          </p>
          <h1 className="head-text">What is included in upholstery restoration</h1>
          <div className="grid__container">
            <InfoCard
              title={"Tables & Stands"}
              image={images.table}
              symbol={"fa-solid fa-broom"}
              showHr={true}
              content={
                <p className="p-text">
                 If you have a table that has been meaning to have a good clean to bring it back to life.  We will have your table ready in weeks time to put food back on your dinner table.
                </p>
              }
              link={"/booking"}
              button={"Book now"}
            />
            <InfoCard
              title={"Chairs & Sofas"}
              image={images.chairWood}
              symbol={"fa-solid fa-chair"}
              showHr={true}
              content={
                <p className="p-text">
                 Chair's & sofas are essential to a living in a warm and comfortable home. If your chairs are'nt bringing the warmth they should be. We can restore them for you and so you can live in comfort. 
                </p>
              }
              link={"/booking"}
              button={"Book now"}
            />
            <InfoCard
              title={"Beds"}
              image={images.bed}
              symbol={"fa-solid fa-bed"}
              showHr={true}
              content={
                <p className="p-text">
                  Getting a good night rest just got even better with Pro Clean. To get a good rest you need a good bed and a good bed needs to be clean. Thats where we step in to bring you the sleep you desire.
                </p>
              }
              link={"/booking"}
              button={"Book now"}
            />
          </div>
        </div>
      </div>
      <div className="app__container app__flex bg-grey">
        <div className="app__container-width">
          <p className="content__title">
            <span>cleaning furniture</span>
          </p>
          <div className="commercial__container">
            <img src={images.chair1} alt="" />
            <div className="commercial__container-content upholstery">
              <h1 className="head-text">Restoring your loved furniture</h1>
              <p className="p-text">
                If you have that piece in your house that has a bit of wear and tear. Or you've just
                added a new antique piece to your inventory. Get ProCleaners to restore it to all
                its original glory. What we do:
                <ul>
                  <li>Wipe down surfaces</li>
                  <li>Vaccum and remove all grime, dirt & grease</li>
                  <li>Wash & carpet clean if needed</li>
                  <li>
                    Find replacement parts and sort fixing for mechanical or structural parts.{" "}
                  </li>
                </ul>
              </p>

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

export default UpholsteryCleaning;
