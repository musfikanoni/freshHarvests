import Link from 'next/link';
import Category from './Category';

export default async function OurProductsSection() {
  const res = await fetch("https://code-commando.com/api/v1/products", { cache: 'no-store' });
  const data = await res.json();
  const products = data.data || [];

  return (
    <div className="mt-28">
      <h3 className='text-center text-[#749B3F] text-xl font-bold'><span className='bg-slate-200 px-3 rounded py-1.5'>Our Products</span></h3>
      <h2 className='text-center font-bold text-4xl py-5'>Our Fresh Products</h2>
      <div className="lg:w-2/6 w-6/6 lg:px-0 px-5 mx-auto pb-5">
        <p className='text-center'>We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.</p>
        </div>
        
      <div className='mx-auto max-w-7xl'>
        {Array.isArray(products) && products.length > 0 ? (
          <Category />
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
  );
}
