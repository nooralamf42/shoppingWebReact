import React from 'react';
import useProduct from '../contexts/Products';
import { Link, NavLink } from 'react-router-dom';
import { BsCartDash, BsCartCheck } from 'react-icons/bs';

export const toUpperCase = (stringValue) => {
  let upperCaseValue = stringValue[0].toUpperCase() + stringValue.slice(1);
  return upperCaseValue;
};

const Categories = () => {
  const { selectedCategory, allCategories } = useProduct();

  return (
    <nav className="bg-gray-800 p-4 fixed left-0 right-0 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center">
        <Link className="text-white hover:text-gray-300 text-3xl">Food4U</Link>
      </div>
      <ul className="flex justify-center md:justify-around items-center w-full md:w-fit mt-4 md:mt-0">
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
      <NavLink to='/cart' className={({isActive})=>` hover:text-gray-300 flex items-center gap-2 p-2 rounded-lg ${isActive ? 'text-green-400': 'text-white'} `}>
        <BsCartDash/><BsCartCheck/> Cart
        </NavLink>
    </nav>
  );
};

export default Categories;
