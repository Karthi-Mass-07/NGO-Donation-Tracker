import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/login', formData, {
        withCredentials: true
      });
      alert('Login Successful');
      setFormData({ email: '', password: '' });
      navigate('/');
    } catch (err) {
      alert('Login Failed');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-4">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-6">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          required
        />

        <button
          type="submit"
          disabled={!formData.email || !formData.password}
          className={`w-full py-3 rounded-md text-white font-semibold transition
            ${formData.email && formData.password 
              ? 'bg-green-600 hover:bg-green-700 cursor-pointer' 
              : 'bg-green-300 cursor-not-allowed'}`}
        >
          Login
        </button>

        <p className="text-center text-gray-700 text-sm">
          Don’t have an account?{' '}
          <Link to="/register" className="text-green-700 hover:underline font-semibold">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
