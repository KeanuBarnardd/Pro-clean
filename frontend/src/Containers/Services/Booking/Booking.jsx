import React, { useState } from "react";

import "./Booking.scss";

const Booking = () => {
  const [priceArrays, setpriceArrays] = useState({
    stories: [0, 100, 200, 300, 400],
    rooms: [0, 75, 150, 225, 300, 375, 450, 525, 600],
    baths: [0, 50, 100, 150, 200, 250, 300, 350, 400],
  });

  const [valueArrays, setValueArrays] = useState({
    stories: [0, 1, 2, 3, 4],
    rooms: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    baths: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  });

  const [propertyPriceData, setPropertyPriceData] = useState({
    storiesPrice: 0,
    bedsPrice: 0,
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

  const [propertyData, setPropertyData] = useState({
    stories: 0,
    beds: 0,
    baths: 0,
    balconies: 0,
    garage: false,
    fridge: false,
    doubleFridge: false,
    living: false,
    carpetClean: false,
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

  return <div>Booking</div>;
};

export default Booking;
