import React from "react";
import Image from "next/image";
import { FaUtensils, FaList } from "react-icons/fa";

const Recipe = async () => {
  const data = await fetch("https://dummyjson.com/recipes");
  const payload = await data.json();

  return (
    <div className="container mx-auto max-w-[1380px] p-3 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {payload?.recipes?.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white p-3 rounded-xl shadow-md hover:scale-105 duration-200"
          >
            <div className="flex items-center justify-center">
            <Image
              src={recipe.image}
              alt={recipe.name}
              width={350}
              height={220}
              className="object-contain rounded-lg mb-2"
            />
            </div>

            <h2 className="text-lg font-semibold text-gray-800">
              {recipe.name}
            </h2>

            <p className="text-gray-500 text-sm">{recipe.category}</p>

            <div className="mt-3">
              <h3 className="text-md font-semibold text-gray-700 flex items-center gap-2">
                <FaUtensils className="text-gray-500" /> Tarkibi:
              </h3>
              <ul className="text-gray-600 text-sm list-disc pl-5">
                {recipe.ingredients.slice(0, 3).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-3">
              <h3 className="text-md font-semibold text-gray-700 flex items-center gap-2">
                <FaList className="text-gray-500" /> Tayyorlash:
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {recipe.instructions[0]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
