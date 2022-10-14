import React from "react";
import { Header } from "../../Components/index";
import { images } from "../../Constants/images";

import "./Home.scss";

const Home = () => {
  return (
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
  );
};

export default Home;
