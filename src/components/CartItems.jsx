import React, { useState } from 'react'
import useProduct from '../contexts/Products';

function CartItems({item}) {

  const {cartItems, addCartItems, updateCartItems, deleteCartItems, updateTotalAmount} = useProduct() 
  // Replace these functions with your actual logic for handling actions
  const increaseQuantity = (itemQuantity,itemId) => {
    updateTotalAmount(item.price)
    updateCartItems({...item,quantity: Number(itemQuantity)+1}, itemId)
  };

  const decreaseQuantity = (itemQuantity,itemId) => {
    updateTotalAmount(-item.price)
    if(itemQuantity===1)
      return deleteCartItems(itemId)
    updateCartItems({...item,quantity: Number(itemQuantity)-1}, itemId)
  };

  const removeItem = (itemId) => {
    updateTotalAmount(-item.price,item.quantity)
    deleteCartItems(itemId)
  };

  return (
    <div key={item.id} className="flex flex-col md:flex-row items-center mb-6 border-b pb-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mb-4 md:mb-0 md:mr-4" />
              <div className="flex-1 text-center md:text-left">
                <p className="font-bold text-lg">{item.name}</p>
                <p className="text-gray-600">${(item.price*item.quantity).toFixed(2)}</p>
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                <button
                  className="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-800 font-bold uppercase text-xs px-4 py-1 rounded mr-2 md:mr-0 md:ml-4"
                  onClick={() => decreaseQuantity(item.quantity, item.id)}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-800 font-bold uppercase text-xs px-4 py-1 rounded mr-2 md:mr-0 md:ml-2"
                  onClick={() => increaseQuantity(item.quantity, item.id)}
                >
                  +
                </button>
                <button
                  className="text-red-500 font-bold mt-2 md:mt-0 md:ml-4"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
  )
}

export default CartItems