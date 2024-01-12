import React from 'react';
import useProduct from '../contexts/Products';
import { NavLink } from 'react-router-dom';

const Categories = () => {
  const {category, selectedCategory, allCategories} =  useProduct()

  return (
    <nav className="bg-gray-800 p-4 fixed left-0 right-0">
      <ul className="flex justify-around items-center w-fit mx-auto">
        {allCategories.map((category, index) => (
          <li key={index} className="text-white hover:text-gray-300">
            <NavLink  href={`#${category}`} className={`block px-4 py-2 `} activeClassName='bg-red-900'>
              {category}
            </NavLink>
        
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
