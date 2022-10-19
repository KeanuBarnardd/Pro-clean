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
  });

  const [valueArrays, setValueArrays] = useState({
    stories: [1, 2, 3, 4],
    rooms: [1, 2, 3, 4, 5, 6, 7, 8],
    baths: [1, 2, 3, 4, 5, 6, 7, 8],
    // Sub Categories
    blinds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    walls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    carpets: [0, 1, 2, 3, 4, 5, 6, 7, 8],
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
    carpetClean: 0,
    wallWash: 0,
    blinds: 0,
  });

  // DATE FORM CONTAINER
  const [date, setData] = useState("00/00/0000");
  const [conditions, setConditions] = useState({
    userHome: "",
    propertyType: "",
    powerAvailable: "",
  });

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    suburb: "",
    state: "",
    postcode: "",
    instructions: "",
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
      <div className="app__container app__flex">
        <div className="app__container-width">
          <DateForm/>
        </div>
      </div>
    </>
  );
};

export default Booking;
