import React from "react";

import "./MissionCard.scss";

const MissionCard = ({ icon, content, title }) => {
  return (
    <div className="mission__card">
     <div className="hr__container">
        <hr />
        <i className={`fa-solid ${icon} icon`}></i>
        <hr />
      </div>
      <h2 className="mission__card-title">{title}</h2>
      {content}
      
    </div>
  );
};

export default MissionCard;
