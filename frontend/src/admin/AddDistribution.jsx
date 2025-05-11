import React, { useState } from 'react';
import axios from 'axios';

const AddDistribution = () => {
  const [formData, setFormData] = useState({
    location: '',
    message: '',
    amountDistributed: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/distribution/add', {
        ...formData,
        amountDistributed: parseFloat(formData.amountDistributed),
      });
      alert('Distribution added successfully');
      setFormData({ location: '', message: '', amountDistributed: '' });
    } catch (err) {
      alert('Failed to add distribution');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-green-600 text-center">Add Distribution</h2>

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Distribution Location"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Distribution Message"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          rows="3"
        />

        <input
          type="number"
          name="amountDistributed"
          value={formData.amountDistributed}
          onChange={handleChange}
          placeholder="Amount Distributed (₹)"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddDistribution;
