
import Link from 'next/link';

export default async function AllProductsPage() {
  const res = await fetch('https://code-commando.com/api/v1/products', { cache: 'no-store' });
  const data = await res.json();
  const products = data.data || [];

  return (
    <div className="pt-28">
      <h2 className="text-center text-4xl font-bold mb-6">All Fresh Products</h2>

      <div className='grid grid-cols-12 gap-4 mx-auto max-w-7xl'>
        {products.length > 0 ? (
          products.map((item) => (
            <div key={item.id} className="card lg:col-span-4 col-span-6 bg-base-100 my-4 lg:w-96 w-44 shadow-sm">
              <Link href={`/product/${item.id}`}>
                <figure>
                  <img
                    src={item.images}
                    alt={item.productName}
                    className="rounded-xl lg:h-[200px] h-[100px]"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{item.productName}</h2>
                  <p className="mt-2 font-bold text-green-600">${item.price.toFixed(2)}</p>
                  <div className="w-full">
                    <button className="btn btn-outline w-full hover:bg-[#FF6A1A] hover:text-white">
                      Add to cart
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="col-span-12 text-center">No products found.</p>
        )}
      </div>
    </div>
  );
}
