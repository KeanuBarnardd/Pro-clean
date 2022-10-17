import React, { useState } from "react";

import "./Booking.scss";

const Booking = () => {

  

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

  const [date, setData] = useState("00/00/0000");

  const [userData,setUserData] = useState({
    firstName:'',
    lastName:'',
    phone:'',
    address:'',
    suburb:'',
    state:'',
    postcode:'',
    instructions:''
  })

  const [cost, setCost] = useState



  return <div>Booking</div>;
};

export default Booking;
