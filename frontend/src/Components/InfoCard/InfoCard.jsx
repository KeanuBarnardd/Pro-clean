import React from "react";
import { Link } from "react-router-dom";

import "./InfoCard.scss";

const InfoCard = ({ symbol, image, title, content, link, button }) => {
  return (
    <div className="info__card">
      <div className="info__card-img">
        <img className="info__card-stymbol" src="" alt="" />
      </div>
      <div className="info__card-content">
        <h2>{title}</h2>
      </div>
      {content}
      <div className="hr__container">
        <hr />
        <i className="fa-solid fa-star"></i>
        <hr />
      </div>
      <Link to={link}>Find more</Link>
    </div>
  );
};

export default InfoCard;
