import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AdminNavbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
            Cookies.remove("AdminToken"); 
            alert("Logged out successfully"); 
            navigate("/login")
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-2xl font-bold text-green-700">
                    Admin Panel
                </div>
                <nav className="space-x-6 hidden md:flex">
                    <Link to="/admin/donations" className="text-gray-700 hover:text-green-600 transition">Donations</Link>
                    <Link to="/admin/volunteers" className="text-gray-700 hover:text-green-600 transition">Volunteers</Link>
                    <Link to="/admin/users" className="text-gray-700 hover:text-green-600 transition">Users</Link>
                    <Link to="/admin/add/distribution" className="text-gray-700 hover:text-green-600 transition">Funds Provide</Link>
                    <Link to="/admin/get/distribution" className="text-gray-700 hover:text-green-600 transition">Distributions</Link>
                </nav>
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

export default AdminNavbar;
