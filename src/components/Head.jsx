import React from "react";
import "../index.css";
import { useEffect, useState } from "react";
import menu from "../assets/icon-menu.svg";
import cart from "../assets/icon-cart.svg";
import img from "../assets/image-avatar.png";

const Head = ({ handleslide, CartProduct, setHidecart, hidecart }) => {
  const [cartitemsnumber, setCartitemsnumber] = useState(0);
  // eslint-disable-next-line
  useEffect(() => {
    setCartitemsnumber(CartProduct.length);
  });
  return (
    <div className="head">
      <>
        <div className="menu">
          <div className="largeslide" onClick={handleslide}>
            <img src={menu} alt="menu" />
          </div>
          <div>
            <h1>sneakers</h1>
          </div>
        </div>
      </>
      <>
        <div className="profile">
          <div>
            <img
              onClick={() => {
                setHidecart(!hidecart);
              }}
              src={cart}
              alt="cart"
            />
            <div
              style={
                CartProduct.length
                  ? {
                      position: "absolute",
                      backgroundColor: "hsl(26, 100%, 55%)",
                      borderRadius: "50px",
                      width: "15px",
                      height: "15px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      top: "15px",
                      fontSize: "1px",
                      color: "white",
                    }
                  : null
              }
            >
              <div>{CartProduct.length ? cartitemsnumber : ""}</div>
            </div>
          </div>
          <div>
            <img className="img" src={img} alt="img" />
          </div>
        </div>
      </>
    </div>
  );
};

export default Head;
