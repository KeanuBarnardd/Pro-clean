import React from "react";
import { Header, InfoCard, FeatureBox } from "../../Components/index";
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
              symbol={"fa-solid fa-broom"}
              content={
                <p className="p-text">
                  We provide complete home cleaning including kitchen, washrooms, bedrooms, balcony
                  and living rooms along with customised cleaning. We give top <span>quality</span>{" "}
                  services and customer support.
                </p>
              }
              link={"/homeCleaning"}
            />
            <InfoCard
              title={"Commercial Cleaning"}
              image={images.commercialInfoCard}
              symbol={"fa-solid fa-soap"}
              content={
                <p className="p-text">
                  We have out-of-business hours cleaning options, all our professionals are{" "}
                  <span>police checked</span> and insured. All our cleaning essentials are
                  chemical-free. We provide <span>special</span> offers for our regular customers.
                </p>
              }
              link={"/homeCleaning"}
            />
            <InfoCard
              title={"Upholstery restoration"}
              image={images.upholstCleanInfo}
              symbol={"fa-solid fa-chair"}
              content={
                <p className="p-text">
                  Keeping care of your expensive home wares is apart of our misson to provide the{" "}
                  <span>complete service.</span> Pet damages, general wear and tear or stains. We
                  can get the job done, we even have membership options.
                </p>
              }
              link={"/homeCleaning"}
            />
          </div>
        </div>
      </div>
      <div className="app__container app__flex bg-grey">
        <div className="app__container-width">
          <p className="content__title">
            <span>Features</span>
          </p>
          <h1 className="head-text">Best quality cleaning services in Melbourne</h1>
          <div className="features__container">
            <div className="features__content">
              <h1 className="head-text">Over 1,000 satisfied customers</h1>
              <p className="p-text">
                When you live in such an amazing city as Melbourne you need a lot of time to enjoy
                its beauty. That's why Pro Cleaners services are here to give you that time.you need
                a lot of time to enjoy its beauty. That's why Pro Cleaners services are here to give
                you that time.
              </p>
              <button className="btn btn-secondary">Book a clean</button>
            </div>
            <div className="features__grid">
              <div className="col">
                <FeatureBox text={"Average Rating"} number={"4.9"} color="light-green" />
                <FeatureBox text={"Our cleaners"} number={"32"} color="white" />
              </div>
              <div className="col col-2">
                <FeatureBox text={"Success Rate"} number={"90%"} color="" />
                <FeatureBox text={"Avg Price Tag"} number={"$80"} color="green" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
