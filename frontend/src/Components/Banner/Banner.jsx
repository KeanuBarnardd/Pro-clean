import React from "react";
import { images } from "../../Constants/images";

import "./Banner.scss";

const Banner = ({ button, title, text }) => {
  return (
    <div className="app__flex banner">
      <img src={images.logoGreen} alt="" />
      <div className="app__container banner__content"></div>
    </div>
  );
};

export default Banner;
