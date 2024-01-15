import React, { useState } from 'react';
import useProduct from '../contexts/Products';
import CartItems from './CartItems';

const Cart = () => {
  const {cartItems} = useProduct() 
  const [itemQuantity, setItemQuantity] = useState(1)
  // Replace these functions with your actual logic for handling actions
  const increaseQuantity = (itemId) => {
    cartItems.map(item=>{
      if(item.id == itemId && item.quantity)
        item.quantity+=1
    })
    console.log(cartItems)
    // setItemQuantity(pre=>pre.splice)
    console.log('working')
  };

  const decreaseQuantity = (itemId) => {
    // Implement logic to decrease quantity
  };

  const removeItem = (itemId) => {
    // Implement logic to remove item
  };

  const buyNow = () => {
    // Implement logic for buying now
  };

  return (
    <div className="container mx-auto pt-20 pb-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItems key={item.id} item={item}/>
          ))}

          <div className="flex flex-col md:flex-row justify-end items-center mt-8">
            <div className="text-lg font-bold mb-4 md:mb-0 md:mr-4">Total: $XX.XX</div>
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-full"
              onClick={buyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
