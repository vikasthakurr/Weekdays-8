
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-primary mb-6 shadow-sm sticky top-0 z-50">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">E-commerce</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Cart</a>
          </li>
          <li>
            <a>Profile</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
