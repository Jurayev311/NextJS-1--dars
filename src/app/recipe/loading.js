const Loading = () => {
    return (
      <div className="container mx-auto max-w-[1380px] p-3 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-xl shadow-md animate-pulse"
            >
              <div className="w-full h-[200px] bg-gray-300 rounded-lg mb-2"></div>
  
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
  
              <div className="h-5 bg-gray-300 rounded w-1/3 mb-2"></div>
              <ul className="space-y-2">
                <li className="h-4 bg-gray-300 rounded w-2/3"></li>
                <li className="h-4 bg-gray-300 rounded w-1/2"></li>
                <li className="h-4 bg-gray-300 rounded w-3/4"></li>
              </ul>
  
              <div className="h-5 bg-gray-300 rounded w-1/3 mt-3 mb-2"></div>
              <p className="h-4 bg-gray-300 rounded w-full"></p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Loading;
  