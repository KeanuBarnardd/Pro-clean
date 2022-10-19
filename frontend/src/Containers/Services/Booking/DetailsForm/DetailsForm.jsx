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
        styleType={"main"}
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
        styleType={"main"}
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
        styleType={"main"}
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

      <HouseSelectInput
        styleType={"sub"}
        priceArrays={priceArrays}
        valueArrays={valueArrays}
        propertyPriceData={propertyPriceData}
        setPropertyPriceData={setPropertyPriceData}
        propertyData={propertyData}
        setPropertyData={setPropertyData}
        valueType={"blinds"}
        typePrice={"blindsPrice"}
        textValue={"Blind"}
        addMultiple={true}
      />
      <HouseSelectInput
        styleType={"sub"}
        priceArrays={priceArrays}
        valueArrays={valueArrays}
        propertyPriceData={propertyPriceData}
        setPropertyPriceData={setPropertyPriceData}
        propertyData={propertyData}
        setPropertyData={setPropertyData}
        valueType={"carpets"}
        typePrice={"carpetCleanPrice"}
        textValue={"Carpet"}
        addMultiple={true}
      />

      <HouseSelectInput
        styleType={"sub"}
        priceArrays={priceArrays}
        valueArrays={valueArrays}
        propertyPriceData={propertyPriceData}
        setPropertyPriceData={setPropertyPriceData}
        propertyData={propertyData}
        setPropertyData={setPropertyData}
        valueType={"walls"}
        typePrice={"wallWashPrice"}
        textValue={"Wall"}
        addMultiple={true}
      />

      <p>{JSON.stringify(propertyData, null, 2)}</p>
      <p>{JSON.stringify(propertyPriceData, null, 2)}</p>
    </div>
  );
};

export default DetailsForm;
