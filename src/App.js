import React from "react";
import { useState, useRef } from "react";
import "./index.css";
//import { useState } from "react";
import Head from "./components/Head";
import Showglass from "./components/Showglass";
import About from "./components/About";
import Cart from "./components/Cart";
import Sidebar from "./components/Sidebar";
import Showcart from "./components/Showcart";

import img1 from "./assets/image-product-1.jpg";
import img2 from "./assets/image-product-2.jpg";
import img3 from "./assets/image-product-3.jpg";
import img4 from "./assets/image-product-4.jpg";
import imgt1 from "./assets/image-product-1-thumbnail.jpg";
import imgt2 from "./assets/image-product-2-thumbnail.jpg";
import imgt3 from "./assets/image-product-3-thumbnail.jpg";
import imgt4 from "./assets/image-product-4-thumbnail.jpg";

const Products = [
  {
    Name: "image-product-1",
    source: img1,
    thumbnail: imgt1,
    likes: 0,
    dislike: 0,
    left: -2100,
    Ratings: 0,
    comments: [],
    className: "showglass1",
    prices: 250,
  },
  {
    Name: "image-product-2",
    source: img2,
    thumbnail: imgt2,
    likes: 0,
    left: -1400,
    dislike: 0,
    Ratings: 0,
    comments: [],
    className: "showglass2",
    prices: 750,
  },
  {
    Name: "image-product-3",
    source: img3,
    likes: 0,
    thumbnail: imgt3,
    left: -700,
    dislike: 0,
    Ratings: 0,
    comments: [],
    className: "showglass3",
    prices: 450,
  },

  {
    Name: "image-product-4",
    source: img4,
    likes: 0,
    thumbnail: imgt4,
    left: 0,
    dislike: 0,
    Ratings: 0,
    comments: [],
    className: "showglass4",
    prices: 550,
  },
];
// eslint-disable-next-line

const App = () => {
  // eslint-disable-next-line
  const deletes = useRef(false);
  const [sidebar, setSidebar] = useState(false);
  const [hidecart, setHidecart] = useState(false);
  const [price, setPrice] = useState("");
  const [cartnumber, setCartnumber] = useState(0);
  const [productposition, setProductposition] = useState(3);
  const [CartProduct, setCartProduct] = useState([]);

  ////////////////////////////
  //function that handles the state for the  in slide in and out of the nav bar
  function handleslide() {
    setSidebar(!sidebar);
  }

  function priceofproduct(prices) {
    setPrice(prices);
  }
  return (
    <div className="body">
      <Head
        handleslide={handleslide}
        CartProduct={CartProduct}
        hidecart={hidecart}
        setHidecart={setHidecart}
      />
      <Sidebar handleslide={handleslide} sidebar={sidebar} />
      <Showcart
        CartProduct={CartProduct}
        cartnumber={cartnumber}
        hidecart={hidecart}
        setCartProduct={setCartProduct}
        deletes={deletes}
      />
      <div className="sections">
        <Showglass
          productposition={productposition}
          setProductposition={setProductposition}
          priceofproduct={priceofproduct}
          products={Products}
        />
        <div>
          <About />
          <Cart
            productposition={productposition}
            price={price}
            cartnumber={cartnumber}
            setCartnumber={setCartnumber}
            CartProduct={CartProduct}
            Products={Products}
            setCartProduct={setCartProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
