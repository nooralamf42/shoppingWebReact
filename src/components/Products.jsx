import React from 'react'
import useProduct from '../contexts/Products'

function Products() {
  let {products} = useProduct()
  let pro = products

  return (
    <div className='flex flex-wrap gap-5 items-center justify-center pt-20'>
        {
          pro.map(product=>
          
            (<div className="max-w-sm rounded overflow-hidden shadow-lg" key={product.id}>
            <img className="w-full" src={product.image} alt={product.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.name}</div>
              <p className="text-gray-700 text-base">{product.category}</p>
              <p className="text-gray-700 text-base">{product.price}</p>
            </div>
          </div>)
          )
        }
    </div>
  )
}

export default Products