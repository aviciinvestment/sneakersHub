import React from "react";
import { Button } from "./Cart";
import Delete from "../assets/icon-delete.svg";
// eslint-disable-next-line

const Showcart = ({ CartProduct, hidecart }) => {
  document.body.style.overflow = hidecart ? "hidden" : "";
  return (
    <div
      style={hidecart ? { visibility: "visible" } : { visibility: "hidden" }}
      className="cartall"
    >
      <div className="Showcart">
        <div>
          <h2>Cart</h2>
          <hr />
        </div>
        <div>
          {CartProduct.length === 0 ? (
            <Emptyinfo />
          ) : (
            <>
              {CartProduct.map((elem, i) => {
                return (
                  <Cartinfo
                    number={elem.number}
                    key={i}
                    image={elem.source}
                    price={elem.prices}
                  />
                );
              })}
              <Button color="hsl(21, 100.00%, 50.60%)">
                <h3>Checkout</h3>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
const Cartinfo = ({ image, price, number }) => {
  return (
    <div className="cartinfo">
      <div>
        <img className="cartimg" src={image} alt="thumbnail" />
      </div>
      <div>
        <h3>
          Fall Limited Edition Sneakers {price / 2}$ x {number}
          <span>${(price / 2) * number}</span>
        </h3>
      </div>
      <div>
        <img src={Delete} alt="Delete" />
      </div>
    </div>
  );
};

const Emptyinfo = () => {
  return (
    <div className="emptyinfo">
      <div>Your Cart Is Empty</div>
    </div>
  );
};
export default Showcart;
