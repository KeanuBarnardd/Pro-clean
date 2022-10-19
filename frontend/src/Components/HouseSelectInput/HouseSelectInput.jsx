import React, { useState } from "react";

import "./HouseSelectInput.scss";

const HouseSelectInput = ({
  priceArrays,
  valueArrays,
  setPropertyPriceData,
  setPropertyData,
  valueType, // Is the type of Value we are changing eg. Room or Baths.
  typePrice, // Co-dependant on value Type- How much each value costs
  textValue,
  addMultiple,
  styleType,
  prompt,
  icon
}) => {
  const getSelectValue = (e) => {
    setPropertyData((data) => ({
      ...data,
      [valueType]: e.target.value,
    }));
    for (let x = 0; x < valueArrays[valueType].length; x++) {
      if (parseInt(e.target.value) === valueArrays[valueType][x]) {
        const newPrice = priceArrays[valueType][x];
        setPropertyPriceData((priceData) => ({
          ...priceData,
          [typePrice]: newPrice,
        }));
      }
    }
  };

  return (
    <div className="house__select-container">
      <p className="p-text"> <i className={`fa-solid ${icon}`}></i> {prompt}</p>
      <select className={`house__select-input ${styleType}`} onChange={getSelectValue}>
        {valueArrays[valueType].map((item, id) => (
          <option key={id} value={item}>
            {item} {addMultiple && item !== 1 ? textValue + "s" : textValue}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HouseSelectInput;
