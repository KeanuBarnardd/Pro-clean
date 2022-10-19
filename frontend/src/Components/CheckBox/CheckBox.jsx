import React, { useState } from "react";

import "./CheckBox.scss";

const CheckBox = ({ setPropertyData, valueType }) => {
  const [toggleState, setToggleState] = useState(false);

  const toggleCheckBox = () => {
    toggleState ? setToggleState(false) : setToggleState(true);
    setPropertyData((data) => ({
      ...data,
      [valueType]: toggleState,
    }));
  };

  return (
    <button className={` ${toggleState ? "active" : ""}`} onClick={toggleCheckBox}>
      {toggleState ?  <p>Check</p>: <p>Checked</p>}
    </button>
  );
};

export default CheckBox;
