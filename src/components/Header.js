import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto max-w-[1380px] flex justify-between items-center px-4 md:px-8">
        <Link href="/" className="text-2xl font-bold flex items-center">
          NextJS
        </Link>

        <nav>
          <ul className="flex gap-6 md:gap-12 text-gray-700 font-bold relative top-2">
            <li>
              <Link href="/" className="hover:text-blue-500 transition duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/user" className="hover:text-blue-500 transition duration-200">
                User
              </Link>
            </li>
            <li>
              <Link href="/recipe" className="hover:text-blue-500 transition duration-200">
                Recipe
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
