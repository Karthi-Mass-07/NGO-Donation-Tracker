import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DistributionsList = () => {
  const [distributions, setDistributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDistributions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/distribution/get');
        setDistributions(response.data.distributions); 
        setLoading(false);
      } catch  {
        setError('Failed to fetch distributions');
        setLoading(false);
      }
    };

    fetchDistributions();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold text-green-600 text-center mb-6">Distributions List</h2>

      <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        {distributions.length === 0 ? (
          <div className="text-center text-gray-500">No distributions available</div>
        ) : (
          <table className="min-w-full bg-white shadow-md rounded-md">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Location</th>
                <th className="py-2 px-4 border-b">Message</th>
                <th className="py-2 px-4 border-b">Amount Distributed</th>
                <th className="py-2 px-4 border-b">Date</th>
              </tr>
            </thead>
            <tbody>
              {distributions.map((distribution) => (
                <tr key={distribution._id}>
                  <td className="py-2 px-4 border-b">{distribution.location}</td>
                  <td className="py-2 px-4 border-b">{distribution.message}</td>
                  <td className="py-2 px-4 border-b">{distribution.amountDistributed}</td>
                  <td className="py-2 px-4 border-b">{new Date(distribution.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DistributionsList;
