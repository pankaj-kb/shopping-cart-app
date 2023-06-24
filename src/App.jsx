// import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import BuyPage from "./components/BuyPage";
// import { faker } from "@faker-js/faker";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    const isExist = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });

    if (isExist !== -1) {
      toast("already added in cart", { type: "error" });
    }

    setCartItem([...cartItem, item]);
  };

  // eslint-disable-next-line no-unused-vars
  const buyNow = () => {
    setCartItem([]);

    toast("Order Placed", { type: "success" });
    // console.log(faker.string.uuid())
    // toast(faker.string.uuid(), { type: "default" });
  };

  // const removeItem = (item) => {
  //   setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  // };

  return (
    <>
      {/* <h1>Hello, Pankaj</h1> */}
      {/* <button onClick={buyNow}>Place Order</button> */}
      <ToastContainer />
      <BuyPage addInCart={addInCart}/>
    </>
  );
}

export default App;
