import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import './App.css'
import { useState } from 'react'

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

  return (
    <>
    <h1>Hello, Pankaj</h1>
    </>
  )
}

export default App
