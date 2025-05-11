import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 mt-12">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-xl font-bold text-green-600">NGO Donation Tracker</h2>
                    <p className="mt-2 text-sm">
                        Empowering communities through transparent donations and volunteer support.
                    </p>
                </div>

                <div>
                    <h3 className="text-md font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><Link to="/" className="hover:text-green-600">Home</Link></li>
                        <li><Link to="/donations" className="hover:text-green-600">Donations</Link></li>
                        <li><Link to="/volunteers" className="hover:text-green-600">Volunteers</Link></li>
                        <li><Link to="/contact" className="hover:text-green-600">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-md font-semibold mb-2">Contact Us</h3>
                    <p className="text-sm">123 Helping St, Kindness City, 00000</p>
                    <p className="text-sm">Email: support@ngo.org</p>
                    <p className="text-sm">Phone: +1 (555) 123-4567</p>
                </div>
            </div>

            <div className="text-center py-4 border-t text-sm">
                © {new Date().getFullYear()} NGO Donation Tracker. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
