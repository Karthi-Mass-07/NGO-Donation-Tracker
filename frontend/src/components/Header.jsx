import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Header = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
            Cookies.remove("UserToken"); 
            alert("Logged out successfully"); 
            navigate("/login")
    };
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-2xl font-bold text-green-600">
                    NGO Donation Tracker
                </div>
                <nav className="space-x-6 hidden md:flex">
                    <Link to="/" className="text-gray-700 hover:text-green-600 transition">Home</Link>
                    <Link to="/volunteers" className="text-gray-700 hover:text-green-600 transition"> Join Volunteers</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-green-600 transition">Contact</Link>
                    <Link to="/about" className="text-gray-700 hover:text-green-600 transition">About</Link>
                </nav>
                <Link
                    to="/donate"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                    Donate
                </Link>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </div>
        </header>
    );
};

export default Header;
