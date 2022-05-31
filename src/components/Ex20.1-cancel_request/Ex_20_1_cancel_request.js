import React, { useState, useEffect } from "react";

import FextchData from "./FextchData";

const Ex_20_1_cancel_request = () => {
  const [showData, setShowData] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setShowData((prev) => {
            return !prev;
          });
        }}>
        Show/hide
      </button>
      {showData && <FextchData />}
    </div>
  );
};

export default Ex_20_1_cancel_request;
