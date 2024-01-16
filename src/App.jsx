import React, { useEffect, useState } from 'react'
import { Categories, Products } from './components'
import useProduct, { ProductsContextProvider } from './contexts/Products'
import { data } from './data'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Cart from './components/Cart'
import { Toaster } from 'react-hot-toast'

function App() {


  const [category, setCategory] = useState('all')
  const allCategories = ['all', 'burger', 'pizza', 'salad', 'chicken']
  const selectedCategory = (category) =>{
    setCategory(category)
  }
  
  const cartItemsFromLC = () =>{
    let lc = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
    return lc
  }

  const [cartItems, setCartItems] = useState(cartItemsFromLC())
  const addCartItems = (item)=>{
    setCartItems(preItems=>[...preItems,item])
  }
  const updateCartItems = (item, id)=>{
    setCartItems(preItems => preItems.map(cartItem=>cartItem.id === id ? item : cartItem))
  }

  const deleteCartItems = (id)=>{
    setCartItems(preItems=>preItems.filter(cartItem=>cartItem.id !== id))
  }

  const eraseCart = () =>{
    setCartItems([])
  }

  const totalAmountLC = () =>{
    let totalAmount = 0
    localStorage.getItem('cartItems') && JSON.parse(localStorage.getItem('cartItems')).map(item => {
      totalAmount = totalAmount + (item.price*item.quantity)
    })
    return totalAmount
  }
  const [totalAmount, setTotalAmount] = useState(totalAmountLC())

  const updateTotalAmount = (newAmount, quantity=1) => setTotalAmount((pre)=>pre+(newAmount*quantity))

  let navigate = useNavigate()
  const products = data;

  useEffect(()=>{
    navigate('/all')
  }, [])

  useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [totalAmount, cartItems])
  return (
    <ProductsContextProvider value={{selectedCategory, products, category, setCategory, allCategories, addCartItems, cartItems, updateCartItems, deleteCartItems, totalAmount, updateTotalAmount, eraseCart}}>
      <Categories/>
      <Routes>
        <Route path='/cart' Component={Cart}/>
        {
          allCategories.map(category=><Route key={category} path={`/${category}`} Component={Products}/>)
        }
      </Routes>
        <Toaster/>

    </ProductsContextProvider>
  )
}

export default App