import Image from 'next/image';
import React from 'react';

const User = async () => {
  const data = await fetch('https://dummyjson.com/users');
  const payload = await data.json();  

  return (
    <div className="container mx-auto max-w-[1380px] p-5 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {payload?.users?.map((user) => (
          <div key={user.id} className="bg-white p-5 rounded-xl shadow-md text-center hover:scale-105 duration-200">
            <Image
              src={user.image}
              alt={user.username}
              width={80}
              height={80}
              className="mx-auto rounded-full border"
            />
            <h2 className="text-lg font-semibold text-gray-800 mt-3">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-gray-500">@{user.username}</p>
            <p className="text-gray-600 text-sm">{user.email}</p>
            <p className="text-gray-400 text-xs">{user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
