import React from 'react';

const Button = ({ name, isActive, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-lg transition-all duration-200 font-medium text-sm whitespace-nowrap active:scale-95 ${
        isActive 
          ? "bg-black text-white shadow-md" 
          : "bg-gray-100 text-black hover:bg-gray-200"
      } ${className}`}
    >
      {name}
    </button>
  );
};

export default Button;