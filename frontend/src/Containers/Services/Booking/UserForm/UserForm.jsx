import React from "react";

const UserForm = ({ userData, setUserData }) => {
  return (
    <div className="user__container">
      <p className="content__title">
        <span>STEP 3</span>
      </p>
      <h1 className="head-text">Your Details</h1>
      <div className="details__form-top-row">
        <div className="input__container">
          <p className="p-text">First Name*</p>
          <input
            onChange={(e) => {
              setUserData((data) => ({
                ...data,
                firstName: e.target.value,
              }));
            }}
            type="text"
            required
            placeholder="Kegan"
          />
        </div>
        <div className="input__container">
          <p className="p-text">Last Name*</p>
          <input
            type="text"
            onChange={(e) => {
              setUserData((data) => ({
                ...data,
                lastName: e.target.value,
              }));
            }}
            required
            placeholder="Smith"
          />
        </div>
      </div>
      <div className="details__form-top-row">
        <div className="input__container">
          <p className="p-text">Email*</p>
          <input
            onChange={(e) => {
              setUserData((data) => ({
                ...data,
                email: e.target.value,
              }));
            }}
            type="email"
            required
            placeholder="Kegan123@gmail.com"
          />
        </div>
        <div className="input__container">
          <p className="p-text">Phone*</p>
          <input
            onChange={(e) => {
              setUserData((data) => ({
                ...data,
                phone: e.target.value,
              }));
            }}
            type="text"
            required
            placeholder="043 241 877"
          />
        </div>
        <div className="input__container">
          <p className="p-text">ABN</p>
          <input
            onChange={(e) => {
              setUserData((data) => ({
                ...data,
                abn: e.target.value,
              }));
            }}
            type="email"
            placeholder="51 824 753 556"
          />
        </div>
      </div>

      <div className="input__container">
        <p className="p-text">Street*</p>
        <input
          type="email"
          onChange={(e) => {
            setUserData((data) => ({
              ...data,
              address: e.target.value,
            }));
          }}
          required
          placeholder="7 JollyBerry Ave"
        />
        <div className="details__form-top-row">
          <div className="input__container">
            <p className="p-text">Postcode*</p>
            <input
              onChange={(e) => {
                setUserData((data) => ({
                  ...data,
                  postcode: e.target.value,
                }));
              }}
              type="email"
              required
              placeholder="3029"
            />
          </div>
          <div className="input__container">
            <p className="p-text">Suburb*</p>
            <input
              type="text"
              onChange={(e) => {
                setUserData((data) => ({
                  ...data,
                  suburb: e.target.value,
                }));
              }}
              required
              placeholder="Hoppers Crossing"
            />
          </div>
        </div>
        <div className="input__container">
          <p className="p-text">Instructions for our cleaner</p>
          <textarea
            type="email"
            placeholder="Eg. Use the side gate because we have 3 dogs at the front door. They are freindly though"
            onChange={(e) => {
              setUserData((data) => ({
                ...data,
                instructions: e.target.value,
              }));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserForm;
