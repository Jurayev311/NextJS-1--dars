import React from "react";
import Link from "next/link";
import { FaUser, FaUtensils } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="text-center bg-white shadow-lg rounded-xl p-10 max-w-lg text-white">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Xush kelibsiz! 👋
        </h1>
        <p className="text-gray-600 mb-6">
          Quyidagi bo‘limlardan birini tanlang va o‘rganishni boshlang.
        </p>

        <div className="flex flex-col gap-4">
          <Link href="/user">
            <button className="flex items-center justify-center gap-2 w-full bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-600 transition">
              <FaUser className="text-lg" />
              User bo‘limiga o‘tish
            </button>
          </Link>

          <Link href="/recipe">
            <button className="flex items-center justify-center gap-2 w-full bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition">
              <FaUtensils className="text-lg" />
              Recipe bo‘limiga o‘tish
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);
