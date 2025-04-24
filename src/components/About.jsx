import React from "react";
import "../index.css";

const About = () => {
  return (
    <div
      style={{
        position: "relative",
        top: "320px",
        width: "95%",
        margin: "auto",
      }}
      className="About"
    >
      <p
        style={{
          color: "rgb(107, 104, 104)",
          fontSize: "0.8px",
          marginBottom: "20px",
        }}
      >
        Sneaker Company
      </p>
      <h2 style={{ color: "rgb(18, 16, 16)", fontSize: "15px" }}>
        Fall Limited Edition Sneakers
      </h2>
      <p
        style={{
          color: "rgb(107, 104, 104)",
          fontSize: "0.8px",
          marginBottom: "20px",
        }}
      >
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
    </div>
  );
};

export default About;
