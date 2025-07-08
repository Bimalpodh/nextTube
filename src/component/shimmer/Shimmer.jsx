// Shimmer.js
import React from 'react';

const Shimmer = () => {
  return (
    <div className="flex flex-wrap ml-4 mt-4 gap-4">
      {Array(50)
        .fill('')
        .map((_, index) => (
          <div key={index} className="w-[370px]">
            <div className="h-[280px] bg-gray-300 animate-pulse rounded-lg"></div>
            <div className="h-5 w-[320px] bg-gray-300 mt-2 rounded-lg"></div>
            <div className="h-5 w-[280px] bg-gray-300 mt-2 rounded-lg"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
