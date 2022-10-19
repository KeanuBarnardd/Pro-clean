import React, { useState } from "react";

import "./Dropdown.scss";

const Dropdown = ({ title, content }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="dropdown__container">
      <h2>{title}</h2>
      <button className="btn btn-secondary" onClick={()=>{
        toggle ? setToggle(false) : setToggle(true)
      }}>
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      <div className={`dropdown__container ${toggle ? "active" : ""}`}>{content}</div>
    </div>
  );
};

export default Dropdown;
