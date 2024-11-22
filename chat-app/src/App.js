import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import components for individual pages
import OwnerBookingList from './OwnerBookingList';  
import BookingForm from './BookingForm';
import BookingList from './BookingList';
import AccommodationForm from './AccommodationForm';
import { Contact } from './Contact';
import Home from "./Pages/Home"; // Home page component
import Register from "./Pages/Register"; // Register page component
import Login from "./Pages/Login"; // Login page component
import Profile from "./Pages/Profile"; // Profile page component

const App = () => {
  const [activeTab, setActiveTab] = useState('bookings'); // Keeps track of the current active section
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Default to true for development/testing

  // Handle login and logout
  const handleLogin = () => {
    setIsAuthenticated(true); // Change to true to simulate login
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Simulate logout
  };

  return (
    <Router>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Booking System</h1>

        {/* Main Navigation Bar */}
        <nav className="flex justify-center space-x-6 mb-8">
          <Link to="/" className="text-indigo-600 hover:text-indigo-800 focus:outline-none">
            Home
          </Link>
          <Link to="/register" className="text-indigo-600 hover:text-indigo-800 focus:outline-none">
            Register
          </Link>
          <Link to="/login" className="text-indigo-600 hover:text-indigo-800 focus:outline-none">
            Login
          </Link>
          <Link to="/profile" className="text-indigo-600 hover:text-indigo-800 focus:outline-none">
            Profile
          </Link>
          {isAuthenticated && (
            <button onClick={handleLogout} className="text-red-600 hover:text-red-800">
              Logout
            </button>
          )}
        </nav>

       
        {/* Booking System - Conditional Rendering (Only if logged in) */}
        <div className="space-y-8 mt-8">
          <h2 className="text-2xl font-bold mb-4">Booking System</h2>

          {/* Tab Navigation for Booking System Pages */}
          <div className="flex justify-center space-x-6 mb-6">
            <button
              className={`text-indigo-600 hover:text-indigo-800 focus:outline-none py-2 px-4 rounded ${activeTab === 'bookings' ? 'bg-indigo-100' : ''}`}
              onClick={() => setActiveTab('bookings')}
            >
              View Bookings
            </button>
            <button
              className={`text-indigo-600 hover:text-indigo-800 focus:outline-none py-2 px-4 rounded ${activeTab === 'create-booking' ? 'bg-indigo-100' : ''}`}
              onClick={() => setActiveTab('create-booking')}
            >
              Create Booking
            </button>
            <button
              className={`text-indigo-600 hover:text-indigo-800 focus:outline-none py-2 px-4 rounded ${activeTab === 'create-accommodation' ? 'bg-indigo-100' : ''}`}
              onClick={() => setActiveTab('create-accommodation')}
            >
              Add Accommodation
            </button>
            <button
              className={`text-indigo-600 hover:text-indigo-800 focus:outline-none py-2 px-4 rounded ${activeTab === 'contact' ? 'bg-indigo-100' : ''}`}
              onClick={() => setActiveTab('contact')}
            >
              Contact Owner
            </button>
            <button
              className={`text-indigo-600 hover:text-indigo-800 focus:outline-none py-2 px-4 rounded ${activeTab === 'owner-bookings' ? 'bg-indigo-100' : ''}`}
              onClick={() => setActiveTab('owner-bookings')}
            >
              Owner Bookings
            </button>
          </div>

          {/* Conditional rendering for internal tabs */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            {activeTab === 'bookings' && <BookingList />}
            {activeTab === 'create-booking' && <BookingForm />}
            {activeTab === 'create-accommodation' && <AccommodationForm />}
            {activeTab === 'contact' && <Contact />}
            {activeTab === 'owner-bookings' && <OwnerBookingList />}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
