import React from "react";
import ReadMore from "./ReadMore";

const maxLength = 200;
const text =
  "The useState() is a Hook that allows you to have state variables in functional components. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries. ";

const Ex18_1_ReadMore = () => {
  return (
    <div>
      <ReadMore text={text} maxLength={maxLength} />
    </div>
  );
};

export default Ex18_1_ReadMore;
