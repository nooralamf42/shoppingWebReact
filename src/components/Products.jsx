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
    <div className="flex px-10 md:p-0 flex-wrap gap-5 items-center justify-center pt-24">
      {pro.map((product) => (
       <Product product={product} key={product?.id}/>
      ))}
    </div>
  );
}

export default Products;
