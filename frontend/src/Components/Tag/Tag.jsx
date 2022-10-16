import React from "react";

import "./Tag.scss";

const Tag = ({ icon, text, color }) => {
  return (
    <div className={`tag-container ${color}`}>
      <i className={`fa-solid ${icon}`}></i>
      <p>{text}</p>
    </div>
  );
};

export default Tag;
