import React from "react";

const Card = ({ productObj }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-72 hover:shadow-lg transition-shadow duration-300">
      <figure className="w-full h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={productObj.thumbnail}
          alt={productObj.title}
        />
      </figure>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {productObj.title}
        </h2>
        <p className="mt-2 text-gray-700">Rating: {productObj.rating} ⭐</p>
        <p className="mt-2 text-gray-700">Category: {productObj.category}</p>
        <p className="mt-2 text-xl font-bold text-gray-900">
          ${productObj.price}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <button className="px-3 py-1 bg-red-500 text-white rounded">-</button>
          <span className="text-lg"></span>
          <button className="px-3 py-1 bg-green-500 text-white rounded">
            +
          </button>
        </div>

        <div className="mt-4 flex justify-end">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
