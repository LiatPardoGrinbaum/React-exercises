import React, { useState } from "react";
import "./style.css";

const ReadMore = ({ text, maxLength }) => {
  const [active, setActive] = useState(true);

  const myText = text.slice(0, maxLength);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className="text-box">
      <p>
        {active ? text : myText}
        <span onClick={handleClick}>{active ? "read less" : "read more"} </span>
      </p>
    </div>
  );
};

export default ReadMore;
