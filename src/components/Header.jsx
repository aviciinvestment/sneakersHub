import React from "react";
import "../index.css";
import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";

const Header = ({ mode, modestate }) => {
  if (mode) {
    document.body.classList.add("body");
  } else {
    document.body.classList.remove("body");
  }
  return (
    <div className="class">
      <div>TODO</div>
      <div>
        <img
          onClick={() => {
            modestate(mode);
          }}
          className="icon"
          src={mode ? moon : sun}
          alt="sun"
        />
      </div>
    </div>
  );
};

export default Header;
