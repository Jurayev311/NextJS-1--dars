import Image from "next/image";
import React from "react";

const Home = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;

  return (
    <div className="p-10 min-h-screen mt-20 bg-gray-50">
      <div className="container mx-auto max-w-[1380px] grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {products?.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col justify-between">
            <div>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={350}
                height={220}
                className="w-full h-52 object-contain rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-900">{product.title}</h2>
              <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>
            </div>
            <div className="flex justify-between items-center mt-0.5">
              <span className="text-xl font-bold text-red-500">${product.price}</span>
              <div className="text-white">
                <button className="px-5 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition font-medium shadow-md">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;