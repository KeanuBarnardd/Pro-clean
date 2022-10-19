import React, { useState } from "react";
import { HouseSelectInput, CheckBox } from "../../../../Components/index";
import "./DetailsForm.scss";

const DetailsForm = ({
  priceArrays,
  valueArrays,
  propertyPriceData,
  setPropertyPriceData,
  propertyData,
  setPropertyData,
}) => {
  return (
    <div>
      <HouseSelectInput
        priceArrays={priceArrays}
        valueArrays={valueArrays}
        propertyPriceData={propertyPriceData}
        setPropertyPriceData={setPropertyPriceData}
        propertyData={propertyData}
        setPropertyData={setPropertyData}
        valueType={"stories"}
        typePrice={"storiesPrice"}
        textValue={"Story"}
      />
      <HouseSelectInput
        priceArrays={priceArrays}
        valueArrays={valueArrays}
        propertyPriceData={propertyPriceData}
        setPropertyPriceData={setPropertyPriceData}
        propertyData={propertyData}
        setPropertyData={setPropertyData}
        valueType={"rooms"}
        typePrice={"roomsPrice"}
        textValue={"Room"}
        addMultiple={true}
      />
      <HouseSelectInput
        priceArrays={priceArrays}
        valueArrays={valueArrays}
        propertyPriceData={propertyPriceData}
        setPropertyPriceData={setPropertyPriceData}
        propertyData={propertyData}
        setPropertyData={setPropertyData}
        valueType={"baths"}
        typePrice={"bathsPrice"}
        textValue={"Bath"}
        addMultiple={true}
      />

      <CheckBox setPropertyData={setPropertyData} valueType={"garage"} />
      <CheckBox setPropertyData={setPropertyData} valueType={"fridge"} />
      <CheckBox setPropertyData={setPropertyData} valueType={"doubleFridge"} />
      <CheckBox setPropertyData={setPropertyData} valueType={"living"} />
      <CheckBox setPropertyData={setPropertyData} valueType={"carpetClean"} />

      <p>{JSON.stringify(propertyData, null, 2)}</p>
      <p>{JSON.stringify(propertyPriceData, null, 2)}</p>
    </div>
  );
};

export default DetailsForm;
