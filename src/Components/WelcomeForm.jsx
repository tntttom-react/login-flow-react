import React, { useState } from "react";
import Input from "./Input";

function WelcomeForm(props) {
  const [headingText, setHeadingText] = useState("Hello!");
  const [isMousedOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");

  function handleClick(event) {
    setHeadingText(name);

    event.preventDefault();
  }
  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <h1>{headingText}</h1>
      <form>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={handleChange}
        />
        <button
          style={{ backgroundColor: isMousedOver ? "black" : "white" }}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default WelcomeForm;
