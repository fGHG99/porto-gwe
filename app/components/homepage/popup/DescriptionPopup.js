// components/DescriptionPopup.js

import React from "react";

function DescriptionPopup({ description, onClose }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#1a1443] text-white max-w-lg p-6 rounded-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-white bg-transparent border-none text-xl font-bold cursor-pointer"
          onClick={onClose}
        >
          &times;
        </button>
        <p className="text-center text-sm sm:text-md">{description}</p>
      </div>
    </div>
  );
}

export default DescriptionPopup;
