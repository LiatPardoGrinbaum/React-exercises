import React, { useState, useEffect, useRef } from "react";

const Ex21_1_editing = () => {
  const [text, setText] = useState("Edit");
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef();
  const prevText = useRef({ text });

  useEffect(() => {
    if (showInput) {
      inputRef.current.focus();
    }
  }, [showInput]);

  function onClickEvent() {
    setShowInput((prev) => !prev);
    prevText.current = text;
    setText(prevText.current === "Edit" ? "Save" : "Edit");
  }

  return (
    <div>
      {showInput && <input ref={inputRef} />}
      <button onClick={onClickEvent}>{text}</button>
    </div>
  );
};

export default Ex21_1_editing;
