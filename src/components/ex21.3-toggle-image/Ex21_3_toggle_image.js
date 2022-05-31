import React, { useState, useEffect, useRef } from "react";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img1_BW from "./img1-modified.jpg";
import img2_BW from "./img2-modified.jpg";
//nee to finish with 2 picture(maybe create a component)
const Ex21_3_toggle_image = () => {
  const img1Ref = useRef();
  const img2Ref = useRef();
  function changeToBW() {
    img1Ref.current.src = img1_BW;
  }
  function changeBack() {
    img1Ref.current.src = img1;
  }
  return (
    <div>
      <img onMouseOver={changeToBW} onMouseLeave={changeBack} ref={img1Ref} src={img1} style={{ height: "200px" }} alt=""></img>
      <img ref={img2Ref} src={img2} style={{ height: "200px" }} alt=""></img>
    </div>
  );
};

export default Ex21_3_toggle_image;
