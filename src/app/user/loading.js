import React from 'react';

const Loading = () => {
  return (
    <div className="container mx-auto max-w-[1380px] p-5 my-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="bg-white p-5 rounded-xl shadow-md text-center animate-pulse">
            <div className="w-20 h-20 mx-auto bg-gray-300 rounded-full"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mt-3"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2 mx-auto mt-2"></div>
            <div className="h-3 bg-gray-300 rounded w-2/3 mx-auto mt-2"></div>
            <div className="h-2 bg-gray-300 rounded w-1/3 mx-auto mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
