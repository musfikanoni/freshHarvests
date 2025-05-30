'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaStar, FaHeart } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

export default function ProductDetails({product}) {
      const [activeTab, setActiveTab] = useState('description');
        const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  if (!product) return <div>Loading...</div>;
  return (
    
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8">

        <div className="w-full lg:w-full md:w-1/2">
          <Image
            src={product.images || '/placeholder.jpg'}
            alt={product.productName}
            width={500}
            height={500}
            className="rounded-xl w-full object-cover"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="w-full lg:h-full md:w-1/2">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md font-semibold text-sm">
            {product.categoryId || 'Uncategorized'}
          </span>

          <h1 className="text-4xl font-bold my-4">{product.productName}</h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-600">5.0 | 1 Review</span>
          </div>

          {/* Price + Quantity */}
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            ${(product.price * quantity).toFixed(2)} <span className="text-base font-medium">/kg</span>
          </h2>

          <p className='py-5'>{product.description}</p>

          <div className="flex items-center gap-4 mb-6">
            <span className="font-medium">Quantity:</span>
            <div className="flex items-center border rounded overflow-hidden">
              <button onClick={decrease} className="px-4 py-2 text-xl font-bold">-</button>
              <span className="px-4 py-2">{quantity}</span>
              <button onClick={increase} className="px-4 py-2 text-xl font-bold">+</button>
            </div>
            <span className="text-gray-600">/kg</span>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-4">
            <button className="flex items-center gap-2 px-6 py-3 border border-orange-500 text-orange-500 rounded hover:bg-orange-50">
              <FaHeart /> Save
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600">
              <FaCartShopping /> Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16 max-w-3xl">
        <div className="flex space-x-4">
          {['description', 'reviews'].map(tab => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-t-md font-semibold border-b-2 transition-all ${
                activeTab === tab
                  ? 'text-green-700 border-green-600'
                  : 'text-gray-600 border-transparent'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'description' ? 'Description' : 'Reviews (1)'}
            </button>
          ))}
        </div>

        <div className="border p-6 bg-gray-50 rounded-b-md">
          {activeTab === 'description' ? (
            <p className="text-gray-700">{product.description}</p>
          ) : (
            <p className="text-gray-700 italic">
              “I’m genuinely impressed by how fresh and authentic this product is. It exceeded my expectations!”
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

    //         <div className="flex flex-col md:flex-row gap-8">
    //     <div className="w-full md:w-1/2">
    //       <Image
    //         src={product.images}
    //         alt={product.productName}
    //         width={500}
    //         height={500}
    //         className="rounded-xl w-full object-cover"
    //         priority
    //       />
    //     </div>

    //     <div className="w-full md:w-1/2">
    //       <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md font-semibold">
    //         {product.categoryId}
    //       </span>
    //       <h1 className="text-4xl font-bold my-4">{product.productName}</h1>

    //       <div className="flex items-center gap-3 mb-4">
    //         <div className="flex text-amber-400">
    //           {[...Array(5)].map((_, i) => <FaStar key={i} />)}
    //         </div>
    //         <span className="text-sm font-medium text-gray-600">5.0 | 1 Review</span>
    //       </div>

    //       {/* <h2 className="text-3xl font-bold text-orange-600 mb-4">
    //         ${(product.price * quantity).toFixed(2)} /kg
    //       </h2> */}

    //       <div className="flex items-center gap-4 mb-6">
    //         <span className="font-medium">Quantity:</span>
    //         <div className="flex items-center space-x-2 border rounded">
    //           <button onClick={decrease} className="px-4 py-2 text-xl font-bold">-</button>
    //           <span className="px-4 py-2">{quantity}</span>
    //           <button onClick={increase} className="px-4 py-2 text-xl font-bold">+</button>
    //         </div>
    //         <span className="text-gray-600">/kg</span>
    //       </div>

    //       <div className="flex gap-4 mt-4">
    //         <button className="flex items-center gap-2 px-6 py-3 border border-orange-500 text-orange-500 rounded hover:bg-orange-50">
    //           <FaHeart /> Save
    //         </button>
    //         <button className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600">
    //           <FaCartShopping /> Add to Cart
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Tabs */}
    //   <div className="mt-16 max-w-3xl">
    //     <div className="flex space-x-4">
    //       {['description', 'reviews'].map(tab => (
    //         <button
    //           key={tab}
    //           className={`px-4 py-2 rounded-t-md font-semibold border-b-2 ${
    //             activeTab === tab
    //               ? 'text-green-700 border-green-600'
    //               : 'text-gray-600 border-transparent'
    //           }`}
    //           onClick={() => setActiveTab(tab)}
    //         >
    //           {tab === 'description' ? 'Description' : 'Reviews (1)'}
    //         </button>
    //       ))}
    //     </div>

    //     <div className="border p-6 bg-gray-50 rounded-b-md">
    //       {activeTab === 'description' ? (
    //         <p>{product.description}</p>
    //       ) : (
    //         <p>
    //           I’m genuinely impressed by how fresh and authentic this product is. It exceeded my expectations!
    //         </p>
    //       )}
    //     </div>
    //   </div>

