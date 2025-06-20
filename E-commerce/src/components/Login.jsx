import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    alert("Login successful!");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 max-w-md mx-auto">
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="mb-4 w-full p-2 border"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className="mb-4 w-full p-2 border"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
