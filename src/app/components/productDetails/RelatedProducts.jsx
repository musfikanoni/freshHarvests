import Link from 'next/link';
import React from 'react'

export default  async function RelatedProducts() {
    const res = await fetch("https://code-commando.com/api/v1/products", { cache: 'no-store' });
  const data = await res.json();
  const products = data.data || [];


  return (
    <div>
      <div className="mt-28">
      <h3 className='text-center text-[#749B3F] text-xl font-bold'><span className='bg-slate-200 px-3 rounded py-1.5'>Our Products</span></h3>
      <h2 className='text-center font-bold text-4xl py-5'>Related products</h2>
      <div className='grid grid-cols-12 gap-4 mx-auto max-w-7xl'>
        {Array.isArray(products) && products.length > 0 ? (
          products.slice(0, 3).map((item) => (
              
          <div key={item.id} className="card lg:col-span-4 col-span-6 bg-base-100 my-4 lg:w-96 w-44 shadow-sm">
            <Link href={`/product/${item.id}`}>
              <figure className="">
                <img
                  src={item.images}
                  alt="foods"
                  className="rounded-xl  lg:h-[200px] h-[100px]" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{item.productName}</h2>
                <p className="mt-2 font-bold text-green-600">${item.price.toFixed(2)}</p>
                <div className="w-full">
                  <button className="btn btn-outline w-full hover:bg-[#FF6A1A] hover:text-white">Add to cart</button>
                </div>
              </div>
            </Link>
          </div>
              
  
          ))
        ) : (
          <p className="col-span-12 text-center">No products found.</p>
        )}
      </div>
      <div className='flex justify-center my-5'>
        <Link href="/products">
        <button className="btn btn-outline btn-[#FF6A1A] hover:bg-[#FF6A1A] hover:text-white text-[#FF6A1A]">
            See All Products
        </button>
        </Link>

      </div>
    </div>
    </div>
  )
}
