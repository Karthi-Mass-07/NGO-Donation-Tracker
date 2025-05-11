import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Donation = () => {
  const [formData, setFormData] = useState({ donorName: '', amount: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/donation/create', formData);
      alert('Thank you for your donation!');
      navigate('/')
      setFormData({ donorName: '', amount: '' });
    } catch  {
      alert('Donation failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">Make a Donation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="donorName"
            placeholder="Your Name"
            value={formData.donorName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="number"
            name="amount"
            placeholder="Donation Amount (₹)"
            value={formData.amount}
            onChange={handleChange}
            required
            min="1"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donation;
