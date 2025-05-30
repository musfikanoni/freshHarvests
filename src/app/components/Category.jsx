"use client"

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Category() {
      const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("all");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, prodRes] = await Promise.all([
          fetch("https://code-commando.com/api/v1/category"),
          fetch("https://code-commando.com/api/v1/products"),
        ]);

        if (!catRes.ok || !prodRes.ok) {
          throw new Error("Failed to load data");
        }

        const catData = await catRes.json();
        const prodData = await prodRes.json();

        const filtered = catData.data.filter(
          (cat) => cat.categoryName.toLowerCase() !== "drinksss"
        );
        const all = { id: "all", categoryName: "All" };
        setCategories([all, ...filtered]);

        setProducts(prodData.data);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts =
    selectedCategoryId === "all"
      ? products.slice(0, 8)
      : products
          .filter((product) => product.categoryId === selectedCategoryId)
          .slice(0, 8);

  if (loading) {
    return <div className="text-center mt-32 text-lg">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-32 text-red-500 font-semibold text-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="">


      {/* Tabs */}
      <div className="flex justify-center gap-6 mt-4 lg:mx-0 mx-10 ">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`py-3 px-6  rounded-xl border ${
              selectedCategoryId === cat.id
                ? "bg-[#749B3F] text-white"
                : "bg-white text-[#A6A6A6] border-[#A6A6A6]"
            }`}
            onClick={() => setSelectedCategoryId(cat.id)}
          >
            {cat.categoryName}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
        {filteredProducts.slice(0, 6).map((product) => (
          <div key={product.id} className="card bg-base-100 my-4 lg:w-96 w-44 shadow-sm">
            <Link href={`/product/${product.id}`}>
              <figure className="">
                <img
                  src={product.images}
                  alt="foods"
                  className="rounded-xl  lg:h-[200px] h-[100px]" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{product.productName}</h2>
                <p className="mt-2 font-bold text-green-600">${product.price.toFixed(2)}</p>
                <div className="w-full">
                  <button className="btn btn-outline w-full hover:bg-[#FF6A1A] hover:text-white">Add to cart</button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

    </div>
  
  )
}
