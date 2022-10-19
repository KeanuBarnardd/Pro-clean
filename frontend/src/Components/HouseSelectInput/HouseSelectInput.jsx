import React from "react";

import "./HouseSelectInput.scss";

const HouseSelectInput = ({
  priceArrays,
  valueArrays,
  propertyPriceData,
  setPropertyPriceData,
  propertyData,
  setPropertyData,
}) => {

  const getSelectValue = (e) => {
    setPropertyData((data) => ({
      ...data,
      stories: e.target.value,
    }));
    for (let x = 0; x < valueArrays["stories"].length; x++) {
      if (parseInt(e.target.value) === valueArrays["stories"][x]) {
        const newPrice = priceArrays["stories"][x];
        setPropertyPriceData((priceData) => ({
          ...priceData,
          storiesPrice: newPrice,
        }));
      }
    }
  };


  return (
    <select onChange={getSelectValue} name="" id="">
      <option value="1">1 Story</option>
      <option value="2">2 Story</option>
      <option value="3">3 Story</option>
      <option value="4">4 Story</option>
    </select>
  );
};

export default HouseSelectInput;
