import { createContext, useContext} from "react";

const ProductsContext = createContext({
    products : [],
    selectedCategory : (category)=>{},
    allCategories : [],
    category: 'all',
    cartItems : [],
    addCartItems: (item)=>{},
    updateCartItems: (item, id)=>{},
    deleteCartItems: (id)=>{},
    totalAmount : 0,
    updateTotalAmount : (newAmount) =>{},
    eraseCart : ()=>{}
})

export const ProductsContextProvider = ProductsContext.Provider

export default function useProduct(){
    return useContext(ProductsContext)
}
