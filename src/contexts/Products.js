import { createContext, useContext} from "react";

const ProductsContext = createContext({
    products : [],
    selectedCategory : (category)=>{},
    allCategories : [],
    category: 'all',
    cartItems : [],
    addCartItems: (item)=>{}
})

export const ProductsContextProvider = ProductsContext.Provider

export default function useProduct(){
    return useContext(ProductsContext)
}
