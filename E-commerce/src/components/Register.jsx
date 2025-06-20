import React from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 max-w-md mx-auto mt-10">
      <input
        type="text"
        name="username"
        placeholder="Username"
        required
        className="mb-4 w-full p-2 border"
      />
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
      <input type="file" name="avatar" className="mb-4 w-full p-2 border" placeholder="upload your avatar">
      </input>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
