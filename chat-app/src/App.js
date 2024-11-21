import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router components
import OwnerBookingList from './OwnerBookingList';  // Import the new OwnerBookingList component
import BookingForm from './BookingForm';
import BookingList from './BookingList';
import AccommodationForm from './AccommodationForm';
import { Contact } from './Contact'; // Make sure to import it correctly

const App = () => {
  const [activeTab, setActiveTab] = useState('bookings'); // Keeps track of the current active section

  return (
    <Router>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-6">Booking System</h1>

        {/* Tab Navigation for Booking System */}
        <div className="flex justify-center space-x-6 mb-6">
          <button
            className={`text-indigo-600 hover:text-indigo-800 focus:outline-none ${activeTab === 'bookings' ? 'font-semibold' : ''}`}
            onClick={() => setActiveTab('bookings')}
          >
            View Bookings
          </button>
          <button
            className={`text-indigo-600 hover:text-indigo-800 focus:outline-none ${activeTab === 'create-booking' ? 'font-semibold' : ''}`}
            onClick={() => setActiveTab('create-booking')}
          >
            Create Booking
          </button>
          <button
            className={`text-indigo-600 hover:text-indigo-800 focus:outline-none ${activeTab === 'create-accommodation' ? 'font-semibold' : ''}`}
            onClick={() => setActiveTab('create-accommodation')}
          >
            Add Accommodation
          </button>
          <button
            className={`text-indigo-600 hover:text-indigo-800 focus:outline-none ${activeTab === 'contact' ? 'font-semibold' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            Contact Owner
          </button>
          <button
            className={`text-indigo-600 hover:text-indigo-800 focus:outline-none ${activeTab === 'owner-bookings' ? 'font-semibold' : ''}`}
            onClick={() => setActiveTab('owner-bookings')} // New tab for Owner Bookings
          >
            Owner Bookings
          </button>
        </div>

        {/* Conditional rendering for internal tabs */}
        {activeTab === 'bookings' && <BookingList />}
        {activeTab === 'create-booking' && <BookingForm />}
        {activeTab === 'create-accommodation' && <AccommodationForm />}
        {activeTab === 'contact' && <Contact />} {/* Show Contact component here */}
        {activeTab === 'owner-bookings' && <OwnerBookingList />} {/* Show Owner Booking List */}
      </div>
    </Router>
  );
};

export default App;
