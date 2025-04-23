import React from "react";
import cart from "../assets/icon-cart.svg";
const cartcontainer = [];
const Cart = ({
  price,
  cartnumber,
  setCartnumber,
  productposition,
  Products,
  setCartProduct,
}) => {
  return (
    <div className="carts">
      <Amount price={price} />
      <Add cartnumber={cartnumber} setCartnumber={setCartnumber} />
      <Button color="">
        <div
          onClick={() => {
            if (cartnumber <= 0) return;
            cartcontainer.push({
              source: Products[productposition].thumbnail,
              prices: Products[productposition].prices,
              number: cartnumber,
            });
            setCartProduct(cartcontainer);
            setCartnumber(0);
          }}
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <img src={cart} alt="cart" />
          <h3>Add to cart</h3>
        </div>
      </Button>
    </div>
  );
};
const Amount = ({ price }) => {
  return (
    <div className="Amount">
      <div className="Slashed">
        <h1>
          ${price / 2}
          <span>50%</span>
        </h1>
      </div>
      <div className="through">${price}</div>
    </div>
  );
};

const Add = ({ cartnumber, setCartnumber }) => {
  return (
    <div className="counter">
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          if (cartnumber < 1) return;
          setCartnumber(cartnumber - 1);
        }}
      >
        -
      </div>
      <div>{cartnumber}</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          setCartnumber(cartnumber + 1);
        }}
      >
        +
      </div>
    </div>
  );
};
export const Button = ({ color, children }) => {
  return (
    <div style={{ backgroundColor: color }} className="cart_button">
      {children}
    </div>
  );
};

export default Cart;
