import React, { useState } from "react";
import useProduct from "../contexts/Products";
import Product from "./Product";

function Products() {
  let { products, category} = useProduct();
  let pro = products;
  if (category !== "all") {
    pro = pro?.filter((product) => product.category === category);
  } 
  return (
    <div className="flex flex-wrap gap-5 items-center justify-center pt-20">
      {pro.map((product) => (
       <Product product={product} key={product?.id}/>
      ))}
    </div>
  );
}

export default Products;
