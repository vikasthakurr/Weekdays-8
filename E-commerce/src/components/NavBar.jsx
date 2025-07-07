import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

import { useSearch } from "../context/SearchContext.jsx";

const NavBar = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { user, logout } = useAuth(); // Use the context
  const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const { search, setSearch } = useSearch();

  const handleLogout = () => {
    logout();
    navigate("/login"); // redirect to login page after logout
  };

  return (
    <nav className="bg-red-300 p-4 text-white flex justify-between items-center">
      <h2 className="text-2xl font-bold">Weekdays-8</h2>

      {/* search functionality */}
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="Search Product"
        className="w-80 px-2 py-1 rounded border-2 border-black "
      ></input>
      <ul className="flex space-x-6 items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="relative">
          <Link to="/cart">Cart</Link>
          {quantity > 0 && (
            <span className="absolute bottom-3 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
              {quantity}
            </span>
          )}
        </li>
        {user && user.username ? (
          <>
            <li>Welcome, {user.username}</li>
            <li>
              <button
                onClick={handleLogout}
                className="bg-white text-red-500 px-2 py-1 rounded"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
