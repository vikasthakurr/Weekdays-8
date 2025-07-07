import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", username: "" });
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/auth/login", form);
      alert("Login successful!");

      login(form);

      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 max-w-md mx-auto">
      <input
        onChange={handleChange}
        type="email"
        name="email"
        placeholder="Email"
        required
        className="mb-4 w-full p-2 border"
      />
      <input
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="Password"
        required
        className="mb-4 w-full p-2 border"
      />
      <input
        onChange={handleChange}
        type="text"
        name="username"
        placeholder="Enter your username"
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
