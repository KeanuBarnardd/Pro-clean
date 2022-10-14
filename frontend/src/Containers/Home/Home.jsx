import React from "react";
import { Header, InfoCard } from "../../Components/index";
import { images } from "../../Constants/images";

import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="app__flex">
        <Header
          image={images.headerKitchenGreen}
          content={
            <>
              <h1>Professional and Affordable cleaning services in Melbourne.</h1>
              <p className="p-text">
                Here at ProCleaners we specialise in <span>commercial</span> , <span>domestic</span>{" "}
                and <span>upholstery restoration.</span> Get to know our Melbourne family, contact
                below.
              </p>
              <button className="btn btn-secondary btn-header">Book a Clean</button>
            </>
          }
        />
      </div>
      <div className="app__container app__flex">
        <div className="home__services-section app__container-width">
          <p className="content__title">
            <span>Our Services</span>
          </p>
          <h1 className="head-text">What do we Provide for you?</h1>
          <div className="home__services-grid">
            <InfoCard
              title={"Domestic Cleaning"}
              image={images.domesticInfoCard}
              content={
                <p className="p-text">
                  We provide complete home cleaning including kitchen, washrooms, bedrooms, balcony
                  and living rooms along with customised cleaning. We give top <span>quality</span>{" "}
                  services and customer support.
                </p>
              }
              link={"/homeCleaning"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
