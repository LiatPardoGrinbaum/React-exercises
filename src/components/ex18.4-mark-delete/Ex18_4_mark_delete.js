import React, { useState } from "react";

// import "./style.css";
const arr = ["one", "two", "three", "four", "five"];

const Ex18_4_mark_delete = () => {
  // const [arrNum, setArrNum] = useState(arr);
  // const [checked, setChecked] = useState(false);
  const [checkedState, setCheckedState] = useState(new Array(arr.length).fill(false));

  const insertCheckBox = () => {
    return arr.map((num, index) => {
      return (
        <li>
          <input type="checkbox" checked={checkedState[index]} onChange={handleChange} key={index} id={index} />
          {num}
        </li>
      );
    });
  };
  ///need to fix!!!!! and add reset button (easier i think)
  const handleClick = () => {
    const filtered = checkedState.filter((item) => item === false);
    console.log(filtered);
  };
  const handleChange = ({ target: { id } }) => {
    const updatedCheckedState = checkedState.map((item, index) => {
      // console.log(index);
      // console.log(id);
      // console.log(!item);
      const bool = Number(id) === index ? !item : item;
      // console.log(bool);
      return bool;
    });
    console.log(updatedCheckedState);
    setCheckedState(updatedCheckedState);
  };

  return (
    <div>
      <button onClick={handleClick}>Delete</button>
      <button>Reset</button>
      <ul>{insertCheckBox()}</ul>
    </div>
  );
};

export default Ex18_4_mark_delete;
