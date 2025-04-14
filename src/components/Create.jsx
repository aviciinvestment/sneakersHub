import React from "react";
import { useState } from "react";
import "../index.css";

const Create = ({ oncreateitems, mode }) => {
  const [input, Setinput] = useState("");

  const inputext = document.querySelector(".text");

  function handlesubmit(e) {
    e.preventDefault();
    if (input === "") return;

    const item = { todo: input, state: false };
    oncreateitems(item);

    inputext.value = "";
    Setinput("");
  }
  return (
    <div>
      <form
        style={mode ? { backgroundColor: "hsl(0, 0%, 98%)" } : null}
        className="input"
        onSubmit={handlesubmit}
      >
        <button type="submit" className="choice Tick_effect"></button>
        <input
          style={
            mode
              ? {
                  backgroundColor: "hsl(0, 0%, 98%)",
                  color: "hsl(235, 21%, 11%)",
                }
              : null
          }
          type="text"
          className="text"
          placeholder="create a new todo.."
          onChange={(e) => {
            Setinput(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Create;
