import React, { useState } from 'react';
import useProduct from '../contexts/Products';
import CartItems from './CartItems';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {cartItems, totalAmount, eraseCart} = useProduct() 
  let navigate = useNavigate()
  const buyNow = () => {
    eraseCart()
    navigate('/all')
    toast.success('food will deliver soon in your dreams',{
      duration: 2500,
      position: 'top-center'})
  };

  return (
    <div className="container mx-auto pt-24 pb-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItems key={item.id} item={item}/>
          ))}

          <div className="flex flex-col md:flex-row justify-end items-center mt-8">
            <div className="text-lg font-bold mb-4 md:mb-0 md:mr-4">Total: ${totalAmount.toFixed(2)}</div>
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
