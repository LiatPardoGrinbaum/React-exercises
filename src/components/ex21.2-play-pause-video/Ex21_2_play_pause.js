import React, { useState, useEffect, useRef } from "react";
import video from "./video.mp4";

const Ex21_2_play_pause = () => {
  const vidRef = useRef();

  function onPlay() {
    vidRef.current.play();
  }
  function onPause() {
    vidRef.current.pause();
  }
  return (
    <div>
      <video ref={vidRef} type="video/mp4" width="400px">
        <source src={video} />
      </video>
      <div>
        <button onClick={onPlay}>Play</button>
        <button onClick={onPause}>Pause</button>
      </div>
    </div>
  );
};

export default Ex21_2_play_pause;
