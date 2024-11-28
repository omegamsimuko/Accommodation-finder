import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Homepage from './Homepage/homepage';
import HostelDetails from './Homepage/HostelDetails';
import Profile from './navigationPages/Profile';
import Signin from './navigationPages/SignIn';
import SignUp from './navigationPages/SignUp';
import Dashboard from './navigationPages/Dashboard';
import AccommodationForm from './navigationPages/AccommodationForm';
import BookingForm from './navigationPages/BookingForm';
import Contact from './navigationPages/Contact';
import OwnerBookingList from './navigationPages/OwnerBookingList';
import StudentBookingList from './navigationPages/StudentBookingList';

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <>
      {!isAuthPage && <Header />} {/* Show Header only if not on auth pages */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/hostel/:id" element={<HostelDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/adPortal" element={<Dashboard />} />
        <Route path="/postForm" element={<AccommodationForm />} />
        <Route path="/bookNow" element={<BookingForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookingRequest" element={<OwnerBookingList />} />
        <Route path="/studentBookings" element={<StudentBookingList/>} />
      </Routes>
      {!isAuthPage && <Footer />} {/* Show Footer only if not on auth pages */}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
