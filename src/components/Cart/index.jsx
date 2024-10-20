import React from 'react'
import { useNavigate } from 'react-router-dom'
import Products from '../Products'

export default function Cart(cartItems,handleCheckout) {
  const navigate = useNavigate()
  return (
    <section className='p-6 max-w-3xl mx-auto'>
      <h2 className='text-2xl font-bold mb-5'>Gia hang cua ban</h2>
      {
        cartItems.length > 0 ?
        <>
        
        <div>
        <ul className='border-gray-300 rounded-lg divide-y divide-gray-200'>
          {
            cartItems.map((product) => {
              return (
                <li key={product.id} className='flex justify-between p-4'>
                <span> {product.prdName}</span>
                <span className='text-red-500 font-bold'>{product.price}</span>
                </li>
              )
            })
          }
        </ul>
        <div className='text-end'>
        <button onClick={() =>{navigate('/Products')}}className='mt-5 bg-red-500 text-white font-semibold px-4 -y-2 rounded-md'>Thanh toan</button>
        </div>
        
        </div>
        </>
        :
        <>
        <div className='text-xl mb-2 '>
          Gio hang cua ban dang trong!
          
        </div>
        <button onClick={() => {navigate('/Products')}} className='py-2 text-white bg-green-500 px-4 rounded-lg'>Tiep tuc mua sam</button>
        </> 
      }
    </section>
  )
}
