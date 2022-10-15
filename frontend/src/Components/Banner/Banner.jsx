import React from "react";
import { images } from "../../Constants/images";
import { Link } from "react-router-dom";
import "./Banner.scss";

const Banner = ({ link, button, title, text }) => {
  return (
    <div className="app__flex banner">
      <img src={images.logoSvg} alt="" />
      <div className="app__container-width banner__content">
        <h1 className="head-text">{title}</h1>
        {text}
        <Link className="btn btn-white" to={`${link}`}>
          {button}
        </Link>
      </div>
    </div>
  );
};

export default Banner;
