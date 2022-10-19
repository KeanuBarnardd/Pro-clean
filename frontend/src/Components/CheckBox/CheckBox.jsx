import React, { useState } from "react";

import "./CheckBox.scss";

const CheckBox = ({ setPropertyData, valueType, text }) => {
  const [toggleState, setToggleState] = useState(false);

  const toggleCheckBox = () => {
    toggleState ? setToggleState(false) : setToggleState(true);
    setPropertyData((data) => ({
      ...data,
      [valueType]: toggleState,
    }));
  };

  return (
    <button className={`btn checkbox ${toggleState ? "" : "active"}`} onClick={toggleCheckBox}>
      {toggleState ? (
        <p>{text}</p>
      ) : (
        <p>
          <i className="fa-solid fa-check"></i> {text}
        </p>
      )}
    </button>
  );
};

export default CheckBox;
