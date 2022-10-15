import React from "react";

import "./FeatureBox.scss";

const FeatureBox = ({ color, text, number }) => {
  return (
    <div className={`feature__box ${color}`}>
      <h1>{number}</h1>
      <p>{text}</p>
    </div>
  );
};

export default FeatureBox;
