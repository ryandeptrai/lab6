import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ProductDetail() {
  const location = useLocation()
  const {product} = location.state || {}
  console.log('product:',product);
  return (
    <section className="p-6 max-w-3x1 mx-auto border border-gray-200 rounded-lg shadow-lg bg-white mt-10">
      <h2 className='text-3x1 font-bold text-gray-800'>{product.productName}</h2>
      <div className='flex gap-10 mt-5'>
        <img src={product.productImg} alt="" className='w-80 h-80 object-cover shadow-md py-5'/>
        <div className=''>
          <p className='text-xl font-semibold text-gray-800 '>Gia: {product.price} VND</p>
          <p className='text-lg text-gray-600 mt-2'>Mo ta: {product.description}</p>
          <div className='text-end mt-20'>
            <button className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-500'>Them vao gio hang</button>

          </div>
        </div>
      </div>
    </section>
  )
}