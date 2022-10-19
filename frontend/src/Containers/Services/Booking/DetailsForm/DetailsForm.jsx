import React from "react";

import "./DetailsForm.scss";

const DetailsForm = ({
  priceArrays,
  setPriceArrays,
  valueArrays,
  setValueArrays,
  propertyPriceData,
  setPropertyPriceData,
  propertyData,
  setPropertyData,
}) => {

  // TIME TO MAKE THIS INTO A REPEATABLE COMPONENT

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
    <div>
      <h1>Details Form Test Container</h1>
      <p className="p-text">Number of Stories</p>
      <select onChange={getSelectValue} name="" id="">
        <option value="1">1 Story</option>
        <option value="2">2 Story</option>
        <option value="3">3 Story</option>
        <option value="4">4 Story</option>
      </select>
      <p>{JSON.stringify(propertyData, null, 2)}</p>
      <p>{JSON.stringify(propertyPriceData, null, 2)}</p>
    </div>
  );
};

export default DetailsForm;
