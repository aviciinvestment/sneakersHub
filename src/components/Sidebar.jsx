import React from "react";
import "../index.css";

const Sidebar = ({ handleslide, sidebar }) => {
  document.body.style.overflow = sidebar ? "hidden" : null;

  return (
    <div className="sidebar" style={sidebar ? { left: "0" } : null}>
      <div className="cancelside" onClick={handleslide}>
        <h1>×</h1>
      </div>
      <div>
        <div>
          <h1>Collections</h1>
        </div>
        <div>
          <h1>Men</h1>
        </div>
        <div>
          <h1>Women</h1>
        </div>
        <div>
          <h1>About</h1>
        </div>
        <div>
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
