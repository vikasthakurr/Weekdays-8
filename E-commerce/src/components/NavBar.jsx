import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-green-300 p-4 text-black flex justify-between items-center">
      <h2 className="text-2xl font-bold">Weekdays-8</h2>
      <ul className="flex space-x-6 items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="relative">
          <Link to="/cart">Cart</Link>
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
