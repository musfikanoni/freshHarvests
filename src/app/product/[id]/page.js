import ProductDetails from '@/app/components/productDetails/ProductDetails';
import RelatedProducts from '@/app/components/productDetails/RelatedProducts';
import Image from 'next/image';
import React from 'react';


async function getProduct(id) {
  const res = await fetch(`https://code-commando.com/api/v1/products/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch product details');
  }

  const data = await res.json();
  return data.data;
}


export default async function ProductDetailsPage({ params }) {
  const { id } = params;
  const product = await getProduct(id);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
    <ProductDetails product={product} />
    <RelatedProducts />
    </div>
  );
}
