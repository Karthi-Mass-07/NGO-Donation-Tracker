import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import Donation from './pages/Donation';
import Volunteer from './pages/Volunteer';
import AdminNavbar from './components/AdminNavbar';

// Admin pages
import UserList from './admin/UserList';
import DonationList from './admin/DonationList';
import VolunteerList from './admin/VolunteerList';
import AdminDashboard from './admin/DistributionList';
import AddDistribution from './admin/AddDistribution';
import DistributionList from './admin/DistributionList';

const App = () => {
  const [userToken, setUserToken] = useState(Cookies.get('UserToken'));
  const [adminToken, setAdminToken] = useState(Cookies.get('AdminToken'));

  const isLoggedIn = !!userToken || !!adminToken;
  const isAdmin = !!adminToken;

  useEffect(() => {
    const syncCookies = () => {
      setUserToken(Cookies.get('UserToken'));
      setAdminToken(Cookies.get('AdminToken'));
    };
    syncCookies();

    const interval = setInterval(syncCookies, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <BrowserRouter>
      {isAdmin ? <AdminNavbar /> : isLoggedIn && <Header />}

      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/register" element={!isLoggedIn ? <Register /> : <Navigate to="/" />} />
        <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={isLoggedIn ? <Donation /> : <Navigate to="/login" />} />
        <Route path="/volunteers" element={isLoggedIn ? <Volunteer /> : <Navigate to="/login" />} />

        {/* Admin-only Routes */}
        <Route path="/dashboard" element={isAdmin ? <AdminDashboard /> : <Navigate to="/login" />} />
        <Route path="/admin/users" element={isAdmin ? <UserList /> : <Navigate to="/login" />} />
        <Route path="/admin/donations" element={isAdmin ? <DonationList /> : <Navigate to="/login" />} />
        <Route path="/admin/volunteers" element={isAdmin ? <VolunteerList /> : <Navigate to="/login" />} />
        <Route path="/admin/add/distribution" element={isAdmin ? <AddDistribution /> : <Navigate to="/login" />} />
        <Route path="/admin/get/distribution" element={isAdmin ? <DistributionList/> : <Navigate to="/login" />} />
      </Routes>

      {isLoggedIn && <Footer />}
    </BrowserRouter>
  );
};

export default App;
