import React from "react";

import "./DetailsForm.scss";

const DetailsForm = ({
  priceArrays,
  setPriceArrays,
  valueArrays,
  setValueArrays,
  propertPriceData,
  setPropertyPriceData,
  propertyData,
  setPropertyData,
}) => {
  const getSelectValue = (e) => {
    setPropertyData((data) => ({
      ...data,
      // Change Stories to PROP-DATA-TYPE
      stories: e.target.value,
    }));

    for (let x = 0; x < valueArrays.stories.length; x++) {
      if (parseInt(e.target.value) === valueArrays.stories[x]) {
        console.log(
          `Select Value: ${e.target.value} Property Data : ${valueArrays.stories[x]} ITS A MATCH!`
        );
      }
    }
  };

  // Update the our price
  const updatePrice = () => {};

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
    </div>
  );
};

export default DetailsForm;
