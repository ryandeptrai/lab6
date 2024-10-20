import React from 'react'
import { Link } from 'react-router-dom'

export default function Products({handleAddToCart}) {
  const products = [
    {
      id: 1, productName: "Đồng hồ 1", productImg: "https://picsum.photos/200", price: 2000000
    },
    {
      id: 2, productName: "Đồng hồ 2", productImg: "https://picsum.photos/200", price: 2000000
    },
    {
      id: 3, productName: "Đồng hồ 3", productImg: "https://picsum.photos/200", price: 2000000
    },
    {
      id: 4, productName: "Đồng hồ 4", productImg: "https://picsum.photos/200", price: 2000000
    },
  ]
  return (
    <section className='container mx-auto p-6'>
      <h2 className='text-2xl font-bold text-center'>Danh sách đồng hồ</h2>
      <div className="grid grid-cols-4">
        {products.map((product) => { 
          return (
            <div className="bg-white shadow-lg p-4 rounded-lg">
              <img src={product.productImg} alt="" className='w-80 h-80 object-cover rounded-tl-lg'/>
              <p className='text-lg font-semibold mt-5'>{product.productName}</p>
              <p>Giá: {product.price} vnd</p>
              <Link to={`/product-detail/${product.id}`} state={{product}}  className='w-full py-1 px-3 bg-green-500 text-white'>Chi tiết sản phẩm</Link>
              <button onClick={() => {handleAddToCart(product) }} className='w-full py-1 px-3 bg-blue-500 mt-5 text-white'>Thêm sản phẩm</button>
            </div>
          )
         })}
      </div>
    </section>
  )
}
// rfc => tạo nhanh react functional components