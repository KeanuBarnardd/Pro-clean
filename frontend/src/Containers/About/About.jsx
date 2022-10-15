import React from "react";
import { Header, Banner, FeatureBox } from "../../Components/index";
import { images } from "../../Constants/images";

import "./About.scss";

const About = () => {
  return (
    <>
      <div className="app__flex">
        <Header
          image={images.headerKitchenGreen}
          content={
            <>
              <h1>More about us</h1>
              <p className="p-text">
                We pride ourselves on offering our customers the best possible service at the best
                possible price, and on being upfront and honest about all the details regarding our
                services and the care of your cleaning needs. We Serve Cleaning Services ’s
                environmentally friendly cleaning products are free of chlorine, ammonia,
                phthalates, phosphates, and synthetic fragrances.
              </p>
            </>
          }
        />
      </div>
      <div className="app__container app__flex">
        <div className="app__container-width about__container">
          <p className="content__title">
            <span>About ProCleaners</span>
          </p>
          <h1 className="head-text">Getting to know the cleaning family</h1>
          <div className="about__container-content">
            <p className="p-text">
              We are a homegrown and business <span>cleaning specialist</span> company based and
              operating in Melbourne. We serve all the encompassing<span> metro</span> as well as
              rural areas of Melbourne. We endeavour to consolidate the accepted procedures in the
              business and consequently, live up to our clients’ most elevated desires. Pro Clean
              Melbourne is the main stage for associating people searching for family benefits with
              top-quality, pre-screened cleaning experts. From home cleaning to different
              administrations, we’re in a flash book your enquiry and<span> designate</span> an{" "}
              <span>expert</span> for a few cleaning services. The groups of cleaners are completely
              proficient and persistently go through preparing to work on their abilities.
              <br></br>
              <br></br>We put efficiently in gear and current devices to react to a wide scope of
              housekeeping prerequisites that you, the customer, may have. We have fostered our
              administrations with the prospect of being more proficient, yet reasonable.
              Consequently, our organization tries to offer bespoke cleaning arrangements at
              <span> rates</span> and simultaneously, render our ideal home support help to the best
              quality.
              <br></br>
              <br></br>
              At <span>Pro Clean Melbourne</span>, we pursue refining the effectiveness and
              dependability of our team by observation crafted by the professionals with on-site
              check ups. We additionally have confidence in working with <span>industry-tried</span>
              , pet and kid amicable cleaning items and cleansers, so you can have confidence that
              your home and family are protected a lot.
            </p>
            <div className="about__content-right">
              <img src={images.aboutImage} alt="" />
              <div className="about__content-right-stats">
                <FeatureBox text={"Windows cleaned"} number={"894"} color="" />
                <FeatureBox text={"Valued customers"} number={"40"} color="light-green" />
                <FeatureBox text={"Commerical Projects"} number={"5"} color="white" />
                <FeatureBox text={"Completed Projects"} number={"780"} color="light-green" />
                <FeatureBox text={"Locations reached"} number={"30"} color="light-green" />
                <FeatureBox text={"Chairs restored"} number={"50"} color="white" />
                <FeatureBox text={"5 star reviews"} number={"31"} color="light-green" />
                <FeatureBox text={"Domestic Projects"} number={"250"} color="" />
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <div className="app__container app__flex">
        <div className="app__container-width mission__container">
          <p className="content__title">
            <span>
              Mission Statement
            </span>
          </p>
          <h1 className="head-text">Objectives as a company</h1>
          <div className="mission__grid">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
