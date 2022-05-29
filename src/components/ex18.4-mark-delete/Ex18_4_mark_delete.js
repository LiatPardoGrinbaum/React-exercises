import React, { useState } from "react";

// import "./style.css";
const arr = ["one", "two", "three", "four", "five"];

const Ex18_4_mark_delete = () => {
  const [arrNum, setArrNum] = useState(arr);
  const [checkedState, setCheckedState] = useState(new Array(arr.length).fill(false));

  const insertCheckBox = () => {
    return arrNum.map((num, index) => {
      return (
        <li>
          <input type="checkbox" checked={checkedState[index]} onChange={handleChange} key={index} id={index} />
          {num}
        </li>
      );
    });
  };

  const handleClick = () => {
    const newArrNum = [];
    const newCheckedState = [];
    arrNum.forEach((num, index) => {
      if (checkedState[index] === false) {
        newArrNum.push(num);
        newCheckedState.push(checkedState[index]);
      }
    });
    setArrNum(newArrNum);
    setCheckedState(newCheckedState);
  };

  const handleReset = () => {
    setArrNum(arr);
    setCheckedState(new Array(arr.length).fill(false));
  };

  const handleChange = ({ target: { id } }) => {
    const updatedCheckedState = checkedState.map((item, index) => {
      const bool = Number(id) === index ? !item : item;

      return bool;
    });
    // console.log(updatedCheckedState);
    setCheckedState(updatedCheckedState);
  };

  return (
    <div>
      <button onClick={handleClick}>Delete</button>
      <button onClick={handleReset}>Reset</button>
      <ul>{insertCheckBox()}</ul>
    </div>
  );
};

export default Ex18_4_mark_delete;
