import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const quantity = useSelector((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );
  // console.log(quantity);

  return (
    <nav className="bg-pink-600 p-4 text-black flex justify-between items-center">
      <h2 className="text-2xl font-bold">Weekdays-8-Mart</h2>
      <ul className="flex space-x-6 items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="relative">
          <Link to="/cart">
            Cart
            {quantity > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {quantity}
              </span>
            )}
          </Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
