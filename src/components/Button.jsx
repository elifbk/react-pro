import React from "react";

const Button = ({ onClick, btnText }) => {
  return (
    <button
      className="w-full h-10 bg-red-900 text-white flex items-center justify-center mt-4 rounded-md border-transparent cursor-pointer hover:bg-red-700"
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
