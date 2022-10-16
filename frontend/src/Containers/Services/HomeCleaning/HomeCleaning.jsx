import React from "react";
import { Banner, InfoCard, MissionCard } from "../../../Components/index";
import { images } from "../../../Constants/images";
import "./HomeCleaning.scss";

const HomeCleaning = () => {
  return (
    <>
      <Banner
        title={"Domestic Cleaning"}
        button="Book now"
        link={"/booking"}
        text={
          <p className="p-text">
            If your home is in need of a regular or one time off clean. ProCleaners will come to the
            rescue. We offer the most competive home cleaning rates and the highest quality service.
            So book your home clean with us now through the button below.
          </p>
        }
      />
      <div className="app__flex app__container">
        <div className="app__container-width">
          <p className="content__title">
            <span>Packages</span>
          </p>
          <h1 className="head-text">Check out our home cleaning packages</h1>
          <p className="p-text">
            Offering afforable and reasonable prices has always been apart of company motto. We have
            packages that range from cheap to expensive to cover every range of customers. So we are
            bringing the best bang for your buck services for every customer demographic.
          </p>
          <div className="grid__container home__cleaning">
            <InfoCard
              title={"Coin Package"}
              image={images.houseSmall}
              symbol={"fa-solid fa-coins"}
              content={
                <>
                  <p className="p-text">
                    Our <span>coin package</span> is the best bargain for people with a small home
                    that don't want to spend too much money on all the extras. This includes a total
                    clean; surfaces,mop, vacuum and rubbish removal.
                  </p>
                  <p className="p-text">
                    <span>-Requirments-</span>{" "}
                  </p>
                  <div className="info__card-grid">
                    <p className="p-tag">
                      <span>Max 2 Bed</span>
                    </p>
                    <p className="p-tag">
                      <span>Max 1 Bed</span>
                    </p>
                    <p className="p-tag">
                      <span>Max 1 Garage</span>
                    </p>
                    <p className="p-tag">
                      <span>Max 1 Outdoor</span>
                    </p>
                  </div>
                </>
              }
              link={"/booking"}
              button={"Book now "}
            />
            <InfoCard
              title={"Bill Package"}
              image={images.houseMed}
              symbol={"fa-solid fa-money-bill"}
              content={
                <>
                  <p className="p-text">
                    Looking to upsize then the <span> Bill package</span> is calling your name, for
                    more sizeable houses we offer a bigger package to take care of your upstair and
                    downstairs needs. Complete with all the coin bonuses plus a free carpet clean.
                  </p>
                  <p className="p-text">
                    <span>-Requirments-</span>{" "}
                  </p>
                  <div className="info__card-grid">
                    <p className="p-tag">
                      <span>Max 4 Bed</span>
                    </p>
                    <p className="p-tag">
                      <span>Max 2 Bed</span>
                    </p>
                    <p className="p-tag">
                      <span>Max 2 Garage</span>
                    </p>
                    <p className="p-tag">
                      <span>Max 1 Outdoor</span>
                    </p>
                  </div>
                </>
              }
              link={"/booking"}
              button={"Book now "}
            />
            <InfoCard
              title={"Bag package "}
              image={images.houseLarge}
              symbol={"fa-solid fa-sack-dollar"}
              content={
                <>
                  <p className="p-text">
                    Finnally our <span>Bag package</span> includes all previous extras plus a check
                    up maid service for each month for the next free months. This is for the
                    go-geters with a big home ready to make some extra savings for beautiful
                    results.
                  </p>
                  <p className="p-text">
                    <span>-Requirments-</span>{" "}
                  </p>
                  <div className="info__card-grid">
                    <p className="p-tag">
                      <span>Max 2 Bed</span>
                    </p>
                    <p className="p-tag">
                      <span>Max 1 Bed</span>
                    </p>
                    <p className="p-tag">
                      <span>Max 1 Garage</span>
                    </p>
                    <p className="p-tag">
                      <span>Max 1 Outdoor</span>
                    </p>
                  </div>
                </>
              }
              link={"/booking"}
              button={"Book now "}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCleaning;
