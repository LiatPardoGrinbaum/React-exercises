import React, { useState } from "react";

import "./style.css";

// not finished!!!!! see mordis solution (end day video from 29.5.22)- !!!!!!!!!
const Ex18_3_time = () => {
  const [value, setValue] = useState(0);
  const handleChange = () => {};
  return (
    <div className="outer-container">
      <div className="inside-contianer">
        <span>seconds</span>
        {/*         <input onChange={handleChange} value=/> */}
      </div>
      <div className="inside-contianer">
        <span>minutes</span>
        <input />
      </div>
      <div className="inside-contianer">
        <span>hours</span>
        <input />
      </div>
    </div>
  );
};

export default Ex18_3_time;
