import React from "react";
import { Link } from "react-router-dom";

import "./InfoCard.scss";

const InfoCard = ({ symbol, image, title, content, link, button }) => {
  return (
    <div className="info__card">
      <div className="info__card-img" style={{ backgroundImage: `url(${image})` }}>
        <span>
          <i className={`${symbol}`}>
            {" "}
            <span></span>{" "}
          </i>
        </span>
      </div>
      <div className="info__card-content">
        <h2>{title}</h2>

        {content}
        <div className="hr__container">
          <hr />
          <i className="fa-solid fa-star"></i>
          <hr />
        </div>

        <Link className="btn btn-outline" to={link}>Find more</Link>
      </div>
    </div>
  );
};

export default InfoCard;
