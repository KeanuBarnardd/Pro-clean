import React, { useState } from "react";
import { HouseSelectInput, CheckBox, Dropdown } from "../../../../Components/index";
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
    <div className="detail__form">
      <p className="content__title">
        <span>STEP 1 </span>
      </p>
      <h1 className="head-text">Property Details </h1>
      <p className="p-text text-center">
        Moving out house? ProCleaner Melbourne is available here to provide you best end of lease
        cleaning services with 100% bond back guarantee. Start our booking form below to organise
        your next service with the best cleaning team in Melbourne.
      </p>
      <div className="details__form-top-row">
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
          prompt={'How many Stories ?'}
          icon={'fa-house'}
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
          prompt={'How many rooms ?'}
          icon={'fa-bed'}
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
          prompt={'How many Baths ?'}
          icon={'fa-shower'}
        />
      </div>
    
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

      <div className="information__container">
        <Dropdown title={"Bedrooms"} content={<p className="p-text">Hello this a test</p>} />
      </div>

      <p>{JSON.stringify(propertyData, null, 2)}</p>
      <p>{JSON.stringify(propertyPriceData, null, 2)}</p>
    </div>
  );
};

export default DetailsForm;
