import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
  
      <div className="bg-green-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">NGO Donation Tracker Platform</h1>
        <p className="text-lg md:text-xl mb-6">Track. Donate. Empower. Transparency that builds trust.</p>
        <div className="space-x-4">
          <Link to="/donate" className="bg-white text-green-600 px-6 py-2 rounded hover:bg-gray-200 font-medium">
            Donate Now
          </Link>
          <Link to="/volunteers" className="bg-white text-green-600 px-6 py-2 rounded hover:bg-gray-200 font-medium">
            Become a Volunteer
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg mb-8">
          To bring transparency and efficiency to the donation process, ensuring that every rupee reaches the
          people who need it the most—while empowering volunteers to make a real impact.
        </p>
        <Link to="/about" className="text-green-600 font-medium hover:underline">
          Learn More →
        </Link>
      </div>

      <div className="bg-white py-10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold text-green-600">500+</h3>
            <p className="text-gray-600">Donations Tracked</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-600">100+</h3>
            <p className="text-gray-600">Active Volunteers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-600">20+</h3>
            <p className="text-gray-600">Communities Helped</p>
          </div>
        </div>
      </div>


      <div className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 shadow rounded-lg">
            <h4 className="text-xl font-bold text-green-600 mb-2">1. Donate</h4>
            <p className="text-gray-600">Easily contribute any amount and choose a cause or let us allocate it where it’s needed most.</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h4 className="text-xl font-bold text-green-600 mb-2">2. Track</h4>
            <p className="text-gray-600">Your donation is tracked through our system and matched to real-world distributions.</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h4 className="text-xl font-bold text-green-600 mb-2">3. Impact</h4>
            <p className="text-gray-600">Receive updates and reports on how your contribution is making a difference.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
