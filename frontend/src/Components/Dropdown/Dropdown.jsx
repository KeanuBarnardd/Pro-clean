import React, { useState } from "react";

import "./Dropdown.scss";

const Dropdown = ({ title, content }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="dropdown__container">
      <div
        onClick={() => {
          toggle ? setToggle(false) : setToggle(true);
        }}
        className="dropdown__top-row"
      >
        <p>{title}</p>
        <button className="btn dropdown__btn">
          {toggle ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </button>
      </div>
      <hr />
      <div className={`dropdown__container ${toggle ? "active" : ""}`}>{content}
          
      </div>
    </div>
  );
};

export default Dropdown;
