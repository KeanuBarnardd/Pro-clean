import React from "react";

import "./GridItem.scss";

const GridItem = ({ image, title, content }) => {
  return (
    <div className="grid__item">
      <img src={image} alt="" />
      <div className="grid__item-content">
        <h1 className="title">{title}</h1>
        {content}
        <div className="hr__container">
          <hr />
          <i className="fa-solid fa-star"></i>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default GridItem;
