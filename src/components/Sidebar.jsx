import React from "react";
import "../index.css";

const Sidebar = ({ handleslide, sidebar }) => {
  document.body.style.overflow = sidebar ? "hidden" : null;

  return (
    <div className="sidebar" style={sidebar ? { left: "0" } : null}>
      <div className="cancelside" onClick={handleslide}>
        <h3>×</h3>
      </div>
      <div>
        <div>
          <h3>Collections</h3>
        </div>
        <div>
          <h3>Men</h3>
        </div>
        <div>
          <h3>Women</h3>
        </div>
        <div>
          <h3>About</h3>
        </div>
        <div>
          <h3>Contact</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
