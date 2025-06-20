import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

const Card = ({ productObj }) => {
  const dispatch = useDispatch();
  const productInCart = useSelector((state) =>
    state.cart.find((item) => item.id === productObj.id)
  );

  const quantity = useSelector((state) => state.cart.find((item) => item.id === productObj.id)?.quantity || 0);

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

        {productInCart ? (
          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={() => dispatch(decreaseQuantity(productObj))}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={() => dispatch(increaseQuantity(productObj))}
              className="px-3 py-1 bg-green-500 text-white rounded"
            >
              +
            </button>
          </div>
        ) : (
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => {
                dispatch(addToCart(productObj));
              }}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium"
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
