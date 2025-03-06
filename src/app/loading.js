const Loading = () => {
    return (
      <div className="p-10 min-h-screen mt-20 bg-gray-50">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between animate-pulse">
              <div className="w-full h-52 bg-gray-300 rounded-lg mb-4"></div>
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="flex justify-between items-center mt-4">
                <div className="h-6 bg-gray-300 rounded w-16"></div>
                <div className="h-10 bg-gray-300 rounded w-24"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  export default Loading  