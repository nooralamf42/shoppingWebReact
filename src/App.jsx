import React, { useEffect, useState } from 'react'
import { Categories, Products } from './components'
import useProduct, { ProductsContextProvider } from './contexts/Products'
import { data } from './data'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Cart from './components/Cart'

function App() {
  const [category, setCategory] = useState('all')
  const allCategories = ['all', 'burger', 'pizza', 'salad', 'chicken']
  const selectedCategory = (category) =>{
    setCategory(category)
  }

  const [cartItems, setCartItems] = useState([])
  const addCartItems = (item)=>{
    setCartItems(preItems=>[...preItems,item])
  }

  let navigate = useNavigate()
  const products = data;
  useEffect(()=>{
    navigate('/all')
  }, [])
  return (
    <ProductsContextProvider value={{selectedCategory, products, category, setCategory, allCategories, addCartItems, cartItems}}>
      <Categories/>
      <Routes>
        <Route path='/cart' Component={Cart}/>
        {
          allCategories.map(category=><Route key={category} path={`/${category}`} Component={Products}/>)
        }
      </Routes>

    </ProductsContextProvider>
  )
}

export default App