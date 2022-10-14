import React from "react";

import "./InfoCard.scss";

const InfoCard = ({symbol,image,title}) => {
  return (
    <div className="info__card">
      <div className="info__card-img">
        <img className="info__card-stymbol" src="" alt="" />
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default InfoCard;
