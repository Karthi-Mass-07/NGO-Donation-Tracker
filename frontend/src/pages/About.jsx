import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-8">
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold text-green-600 mb-4">About Us</h1>
                <p className="text-gray-600 text-lg">
                    We are a nonprofit organization dedicated to bridging the gap between donors and those in need,
                    ensuring transparency, accountability, and community support.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold text-green-500 mb-3">Our Mission</h2>
                    <p className="text-gray-700">
                        To create a transparent and efficient donation tracking system that empowers donors, helps volunteers,
                        and ensures that support reaches those who need it most.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold text-green-500 mb-3">Our Vision</h2>
                    <p className="text-gray-700">
                        A world where every donation counts, every volunteer is valued, and every need is met with compassion
                        and accountability.
                    </p>
                </div>
            </div>

            <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Impact So Far</h3>
                <p className="text-gray-600">
                    500+ donations tracked • 100+ active volunteers • 20+ communities supported
                </p>
            </div>
        </div>
    );
};

export default About;
