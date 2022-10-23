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
          prompt={"How many Stories ?"}
          icon={"fa-house"}
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
          prompt={"How many rooms ?"}
          icon={"fa-bed"}
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
          prompt={"How many Baths ?"}
          icon={"fa-shower"}
        />
      </div>
      <div className="details__form-content">
        <div className="details__form-inclusions">
          <p className="content__title one">
            <span>Inclusions</span>
          </p>
          <div className="inclusions__container">
            <Dropdown
              title={"Bathrooms"}
              content={
                <div className="dropdown__grid">
                  <li>Cleaning of all tiled floors</li>
                  <li>Clean mirrors & glass surfaces</li>
                  <li>Clean all tile surfaces</li>
                  <li>Clean bathtub, shower & toilet</li>
                  <li>Clean inside all joinery & cupboards</li>
                  <li>Clean all door & window frames</li>
                </div>
              }
            />
            <Dropdown
              title={"Bedrooms/Entrance/Living"}
              content={
                <div className="dropdown__grid">
                  <li>Clean Fixtures(switches/doorbell/handles/locks)</li>
                  <li>Clean high touch areas </li>
                  <li>Clean all electrical outlets & switches</li>
                  <li>Clean all door and window frames</li>
                  <li>Vacuum/mop flooring (as required)</li>
                </div>
              }
            />
            <Dropdown
              title={"Kitcehn/Laundry"}
              content={
                <div className="dropdown__grid">
                  <li>Degrease and wipe down all surfaces</li>
                  <li>Clean external cupboards/handles </li>
                  <li>Clean all sinks and taps</li>
                  <li>Clean all appliances including dishwasher</li>
                  <li>Full detail of stove top</li>
                  <li>Full detail of exhaust fan/range hood</li>
                  <li>Full detail of splash backs</li>
                  <li>Clean high touch areas</li>
                  <li>Clean light fittings where accessible</li>
                </div>
              }
            />
            <Dropdown
              title={"Oven"}
              content={
                <div className="dropdown__grid">
                  <li>Oven cleaned using proper oven cleaner</li>
                  <li>Internal clean of oven/grill including glass </li>
                  <li>All grease/grime and evidence of use is removed</li>
                  <li>Degrease and clean grill and grill plates</li>
                  <li>Wipe down and clean on front of oven</li>
                </div>
              }
            />
            <Dropdown
              title={"Pantry/Cupboards"}
              content={
                <div className="dropdown__grid">
                  <li>Clean all shelves</li>
                  <li>Clean all drawers </li>
                  <li>Clean all doors/handles</li>
                </div>
              }
            />
          </div>
        </div>
        <div className="extras__container">
          <p className="content__title">
            <span>Extras</span>
          </p>
          <p className="p-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quas, quis quisquam
            tempora harum{" "}
          </p>
          <div className="checkbox__container">
            <CheckBox
              setPropertyData={setPropertyData}
              valueType={"garage"}
              text={"Garage Clean"}
            />
            <CheckBox
              setPropertyData={setPropertyData}
              valueType={"fridge"}
              text={"Fridge Clean"}
            />
            <CheckBox
              setPropertyData={setPropertyData}
              valueType={"doubleFridge"}
              text={"Double Fridge Clean"}
            />
            <CheckBox
              setPropertyData={setPropertyData}
              valueType={"living"}
              text={"Clean Living"}
            />
          </div>
          <div className="inputs__container">
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
              prompt="Do you want blinds, If so how many  ?"
              icon={"fa-rug"}
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
              icon={"fa-broom"}
              prompt="Do you want carpet cleaning, If so how many ? "
            />
            <HouseSelectInput
              styleType={"sub"}
              priceArrays={priceArrays}
              valueArrays={valueArrays}
              propertyPriceData={propertyPriceData}
              setPropertyPriceData={setPropertyPriceData}
              propertyData={propertyData}
              setPropertyData={setPropertyData}
              valueType={"balconies"}
              typePrice={"balconiesPrice"}
              textValue={"Alfresco"}
              addMultiple={true}
              icon={"fa-broom"}
              prompt="Do you want alfresco areas cleaned , If so how many ? "
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
              prompt="Do you want walls washed, If so how many ? "
              icon={"fa-soap"}
            />
          </div>
        </div>
      </div>
      {/* 
      <p>{JSON.stringify(propertyData, null, 2)}</p>
      <p>{JSON.stringify(propertyPriceData, null, 2)}</p> */}
    </div>
  );
};

export default DetailsForm;
