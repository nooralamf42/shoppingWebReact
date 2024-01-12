import React, { useState } from 'react'
import { Categories, Products } from './components'
import useProduct, { ProductsContextProvider } from './contexts/Products'
import { data } from './data'

function App() {
  const [category, setCategory] = useState('all')
  const allCategories = ['burger', 'pizza', 'salad', 'chicken', 'all']
  const selectedCategory = (category) =>{
    setCategory(category)
  }
  const products = data;
  return (
    <ProductsContextProvider value={{selectedCategory, products, category, setCategory, allCategories}}>
      <Categories/>
      <Products/> 
    </ProductsContextProvider>
  )
}

export default App