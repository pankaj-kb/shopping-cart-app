// import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import './App.css'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

function App() {

  const [cartItem, setCartItem] = useState([]);


  const addtoCart = item => {
    
    const isExist = cartItem.findIndex(function(array){
      return array.id === item.id
    })

    if (isExist !== -1) {
      toast("already added in cart", {type: "error"})
    }

    setCartItem([...cartItem, item])
  }

  const buyNow = () => {
    setCartItem([])

    toast("Order Placed",{type:"success"})
  }


  const removeItem = item => {
    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id))
  };

  return (
    <>
    <h1>Hello, Pankaj</h1>
    <button onClick={buyNow}>Place Order</button>
    <ToastContainer />
    </>
  )
}

export default App
