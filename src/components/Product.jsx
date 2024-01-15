import React, { useState } from 'react'
import { toUpperCase } from "./Categories";
import useProduct from '../contexts/Products';

function Product({product}) {
    const {cartItems, addCartItems} = useProduct()
    const clickHandler = (clickedItem) =>{
        addCartItems({...clickedItem, quantity:1})
    }
    let isItemInCart = cartItems.some(item=>item.name==product.name)
  return (
    <div
    className="max-w-sm rounded overflow-hidden shadow-lg"
  >
    <img className="w-full" src={product.image} alt={product.name} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{product.name}</div>
      <div>
        <div className="flex justify-between">
          <div>
          <p className="text-gray-700 text-base">
            {toUpperCase(product.category)}
          </p>
          <p className="text-gray-700 text-base">{product.price}</p>
          </div>
        <button onClick={()=> clickHandler(product)} className="bg-green-400 px-4 py-2 rounded-md mt-2">
          {!isItemInCart? 'Add to Cart' : 'In Cart'}
        </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Product