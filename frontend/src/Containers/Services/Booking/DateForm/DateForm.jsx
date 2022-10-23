import React from "react";

import "./DateForm.scss";

const DateForm = ({ setDate, setConditions, conditions }) => {
  const getDateHandler = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="date__form-container">
      <p className="content__title">
        <span>STEP 2</span>
      </p>
      <h1 className="head-text">Date & Time</h1>
      <p className="p-text text-center">Select the date that best suits you to have us clean.</p>
      <div className="select__container">
        <p className="p-text">Data of booking*</p>
        <input onChange={getDateHandler} type="date" name="" id="" />
      </div>

      <div className="date__row-container">
        <div className="select__container">
          <p className="p-text">Will you be home ?</p>
          <select
            onChange={(e) => {
              setConditions((data) => ({
                ...data,
                userHome: e.target.value,
              }));
            }}
          >
            <option value="Yes, I will be home">Yes, I will be home</option>
            <option value="No, I won't be home">No, I won't be home</option>
          </select>
        </div>
        <div className="select__container">
          <p className="p-text">Is your house furnished ?</p>
          <select
            onChange={(e) => {
              setConditions((data) => ({
                ...data,
                propertyType: e.target.value,
              }));
            }}
          >
            <option value="Furnished">Furnished</option>
            <option value="Unfurnished">Unfurnished</option>
          </select>
        </div>
        <div className="select__container">
          <p className="p-text">Is there power available ?</p>
          <select>
            <option value="Yes, Power is available">Yes, Power is available</option>
            <option value="No, Power is not available">No, Power is not available</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DateForm;
