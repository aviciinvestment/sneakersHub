import React from "react";
import "../index.css";
import { useEffect } from "react";
//, useRef, useEffect

const Showglass = ({
  priceofproduct,
  products,
  productposition,
  setProductposition,
}) => {
  function nextclick() {
    if (productposition < 1) return;

    products.forEach((elem) => {
      elem.left = elem.left + 700;
    });

    setProductposition(productposition - 1);
    priceofproduct(products[productposition].prices);
  }

  function prevclick() {
    if (productposition > 2) return;

    products.forEach((elem) => {
      elem.left = elem.left - 700;
    });

    setProductposition(productposition + 1);
    priceofproduct(products[productposition].prices);
  }

  useEffect(() => {
    priceofproduct(products[3].prices);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="showglass">
      <div className="slidebuttons">
        <Prev className="showglass_prev" prevclick={prevclick} />
        <Next className="showglass_next" nextclick={nextclick} />
      </div>
      <div className="showglassdiv">
        {products.map((element) => (
          <Shoes
            key={element.Name}
            className={element.className}
            image={element.source}
            left={`${element.left}px`}
          />
        ))}
      </div>
      <Feedback />
    </div>
  );
};
const Feedback = () => {
  return (
    <div
      style={{
        position: "relative",
        top: "310px",
        width: "100%",
        fontSize: "20px",
      }}
    >
      <hr />
      <div>
        <span>🤍</span>
        <span>😒</span>comments
      </div>
    </div>
  );
};
const Shoes = ({ image, className, left }) => {
  return (
    <>
      <img
        style={{
          left: left,
          transition: "1s",
        }}
        className={className}
        src={image}
        alt="product"
      />
    </>
  );
};

const Next = ({ className, nextclick }) => {
  return (
    <div className={className}>
      <div onClick={nextclick} className="arrow">
        ⇨
      </div>
    </div>
  );
};

const Prev = ({ className, prevclick }) => {
  return (
    <div className={className}>
      <div onClick={prevclick} className="arrow">
        ⇦
      </div>
    </div>
  );
};

export default Showglass;
