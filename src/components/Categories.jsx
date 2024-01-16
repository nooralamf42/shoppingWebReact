import React, { useState } from 'react';
import useProduct from '../contexts/Products';
import { Link, NavLink } from 'react-router-dom';
import { BsCartDash, BsCartCheck } from 'react-icons/bs';
import { CiMenuBurger } from "react-icons/ci";

export const toUpperCase = (stringValue) => {
  let upperCaseValue = stringValue[0].toUpperCase() + stringValue.slice(1);
  return upperCaseValue;
};

const Categories = () => {
  const [menuActive, setMenuActive] = useState(false)
  const { selectedCategory, allCategories, cartItems} = useProduct();
  return (
    <nav className="bg-gray-800 p-4 fixed left-0 right-0 flex items-center justify-between">

      {/* gets visible on mobile screen */}
      <ul className={`flex-row md:hidden absolute justify-center items-center bg-gray-800 py-2 rounded-br-md top-16 transition-all ${menuActive? 'left-0' : '-left-20'}`}>
        {allCategories.map((category, index) => (
          <li key={index} className="text-white hover:text-gray-300">
            <NavLink
              onClick={() => selectedCategory(category)}
              to={`/${category}`}
              className={({ isActive }) => `px-3 py-2 ${isActive && 'text-green-400'}`}
            >
              {toUpperCase(category)}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center">
        <button className='pr-2 md:hidden'><CiMenuBurger color='white' size={22} onClick={()=>setMenuActive((pre)=>!pre)}/></button>
        <Link to={"/all"} className="text-white hover:text-gray-300 text-2xl md:text-3xl">Food4U</Link>
      </div>
      <ul className="hidden md:flex justify-center items-center ">
        {allCategories.map((category, index) => (
          <li key={index} className="text-white hover:text-gray-300">
            <NavLink
              onClick={() => selectedCategory(category)}
              to={`/${category}`}
              className={({ isActive }) => `px-3 py-2 ${isActive && 'text-green-400'}`}
            >
              {toUpperCase(category)}
            </NavLink>
          </li>
        ))}
      </ul>
      <NavLink to='/cart' className={({isActive})=>`relative flex items-center gap-2 p-2 rounded-lg ${isActive ? 'text-green-400 hover:text-green-300': 'text-white hover:text-gray-300'} `}>
        <p className={`absolute flex justify-center items-center w-5 h-5 ml-3 mb-5 rounded-full ${cartItems.length? 'bg-green-400 text-white': 'bg-white text-black'}`}>{cartItems.length}</p>
        {!cartItems.length? (<BsCartDash size={25}/>):(<BsCartCheck size={25}/>)} Cart
        </NavLink>
    </nav>
  );
};

export default Categories;
