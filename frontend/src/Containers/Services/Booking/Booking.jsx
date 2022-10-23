import React, { useState } from "react";
import { DetailsForm, UserForm, PaymentForm, DateForm } from "../../index";
import "./Booking.scss";

const Booking = () => {
  const [priceArrays, setPriceArrays] = useState({
    stories: [100, 200, 300, 400],
    rooms: [75, 150, 225, 300, 375, 450, 525, 600],
    baths: [75, 150, 225, 300, 375, 450, 525, 600],
    // Sub Categories
    blinds: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
    walls: [0, 20, 40, 80, 100, 120, 140, 160, 180, 200],
    carpets: [75, 150, 225, 300, 375, 450, 525, 600],
    balconies: [0, 20, 30, 40, 50],
  });

  const [valueArrays, setValueArrays] = useState({
    stories: [1, 2, 3, 4],
    rooms: [1, 2, 3, 4, 5, 6, 7, 8],
    baths: [1, 2, 3, 4, 5, 6, 7, 8],
    // Sub Categories
    blinds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    walls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    carpets: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    balconies: [0, 1, 2, 3, 4],
  });

  const [propertyPriceData, setPropertyPriceData] = useState({
    storiesPrice: 0,
    roomsPrice: 0,
    bathsPrice: 0,
    balconiesPrice: 0,
    garagePrice: 0,
    fridgePrice: 0,
    doubleFridgePrice: 0,
    livingPrice: 0,
    carpetCleanPrice: 0,
    wallWashPrice: 0,
    blindsPrice: 0,
  });
  // Component 1 - Pass this down as a prop so we can access it in component 2
  const [propertyData, setPropertyData] = useState({
    stories: 0,
    rooms: 0,
    baths: 0,
    balconies: 0,
    garage: false,
    fridge: false,
    doubleFridge: false,
    living: false,
    carpets: 0,
    walls: 0,
    blinds: 0,
  });

  // DATE FORM CONTAINER
  const [date, setDate] = useState("00/00/0000");
  const [conditions, setConditions] = useState({
    userHome: "",
    propertyType: "",
    powerAvailable: "",
  });

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    suburb: "",
    postcode: "",
    instructions: "",
    abn: "",
  });

  const [priceTotal, setPriceTotal] = useState(0);

  return (
    <>
      <div className="app__container app__flex">
        <div className="app__container-width">
          <DetailsForm
            priceArrays={priceArrays}
            setPriceArray={setPriceArrays}
            valueArrays={valueArrays}
            setValueArrays={setValueArrays}
            propertyPriceData={propertyPriceData}
            setPropertyPriceData={setPropertyPriceData}
            propertyData={propertyData}
            setPropertyData={setPropertyData}
          />
        </div>
      </div>
      <div className="app__container app__flex  bg-grey">
        <div className="app__container-width">
          <DateForm setDate={setDate} setConditions={setConditions} conditions={conditions} />
        </div>
      </div>
      <div className="app__container app__flex">
        <div className="app__container-width">
          <UserForm userData={userData} setUserData={setUserData} />
        </div>
      </div>
      <div className="app__container app__flex">
        <div className="app__container-width">
          <p className="content__title">
            <span>Final Step</span>
          </p>
          <h1 className="head-text">Confirm & Submit</h1>
          <div className="receipt__container">
            <h2>Booking Details</h2>
            <ul className="receipt__list">
              <li className="p-text">
                How many Story : <span>{`${propertyData.stories}`}</span>
              </li>
              <li className="p-text">How many bedrooms : {`${propertyData.rooms}`}</li>
              <li className="p-text">How many bathrooms : {`${propertyData.baths}`}</li>
              <li className="p-text">Date of Booking* : {`${date}`}</li>
              <li className="p-text">Will you be home : {`${conditions.userHome}`}</li>
              <li className="p-text">How many Story : {`${conditions.propertyType}`}</li>
              <li className="p-text">How many Story : {`${conditions.powerAvailable}`}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
