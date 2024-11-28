import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import { HiHome } from 'react-icons/hi';  // Import the home icon
import { FaComment, FaSearch, FaPaperPlane, FaUser } from 'react-icons/fa'; // Import other icons
import { Link } from 'react-router-dom';  // Add this import

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
    const [userRole, setUserRole] = useState(''); // Track user role

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Check for token and user data in localStorage
    useEffect(() => {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
        const user = JSON.parse(localStorage.getItem('user')); // Retrieve user data from localStorage
        if (token && user) {
            setIsLoggedIn(true); // User is logged in
            setUserRole(user.role); // Set the user role (student, property owner, etc.)
        }
    }, []);

    // Determine the correct path for the Ad Portal link based on the user role
    const adPortalPath = userRole === 'student' ? '/studentBookings' : '/adPortal';

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white text-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <h1 className="text-2xl font-bold">
                        <img src={logo} alt="Logo" className="h-20 w-20 mr-4" />
                    </h1>

                    {/* Sign-In Button (Conditional Rendering) */}
                    {!isLoggedIn && ( // Show only when user is not logged in
                        <button
                            className="md:hidden bg-customBlue text-white rounded-full w-1/4 py-2 px-4 text-center focus:outline-none"
                            style={{ backgroundColor: "#053359" }}
                        >
                            <Link to="/signin">Sign-In</Link>
                        </button>
                    )}

                    {/* Navigation Links */}
                    <nav
                        className={`flex flex-col md:flex-row items-center md:items-center md:space-x-6 text-lg space-y-4 md:space-y-0 md:block ${
                            isMenuOpen ? 'block' : 'hidden'
                        }`}
                    >
                        <Link to="/homepage" className="hover:text-blue-300 transition duration-200" style={{ color: "#053359" }}>
                            Home
                        </Link>
                        <a href="#services" className="hover:text-blue-300 transition duration-200" style={{ color: "#053359" }}>
                            Search
                        </a>
                        {/* Conditionally render Ad Portal based on user role */}
                        <Link to={adPortalPath} className="hover:text-blue-300 transition duration-200" style={{ color: "#053359" }}>
                            Ad Portal
                        </Link>
                        {isLoggedIn && ( // Only show Myfind when logged in
                            <Link to="/profile" className="hover:text-blue-300 transition duration-200" style={{ color: "#053359" }}>
                                Myfind
                            </Link>
                        )}
                        {!isLoggedIn && (
                            <Link
                                to="/signin"
                                className="bg-customBlue text-white rounded-full w-1/4 py-2 px-4 text-center focus:outline-none"
                                style={{ backgroundColor: "#053359" }}
                            >
                                Sign-In
                            </Link>
                        )}
                    </nav>
                </div>
            </header>

            {/* Fixed Bottom Navigation for Mobile */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white p-4 md:hidden shadow-inner z-50">
                <ul className="flex justify-around text-white text-center">
                    <li>
                       {/* Conditionally render home */}
                       <Link to="/" className="flex flex-col items-center hover:text-blue-300 transition duration-200">
                            <HiHome className="w-5 h-5 mb-1 text-[#053359]" /> {/* Paper plane icon */}
                            <span className="text-[#053359]">Home</span>
                        </Link>
                    </li>
                
                    <li>
                        <a href="#services" className="flex flex-col items-center hover:text-blue-300 transition duration-200">
                            <FaSearch className="w-5 h-5 mb-1 text-[#053359]" /> {/* Search icon */}
                            <span className="text-[#053359]">Search</span>
                        </a>
                    </li>
                    <li>
                        {/* Conditionally render Ad Portal based on user role */}
                        <Link to={adPortalPath} className="flex flex-col items-center hover:text-blue-300 transition duration-200">
                            <FaPaperPlane className="w-5 h-5 mb-1 text-[#053359]" /> {/* Paper plane icon */}
                            <span className="text-[#053359]">Ad Portal</span>
                        </Link>
                    </li>
                    {isLoggedIn && ( // Only show Myfind when logged in
                        <li>
                            <Link to="/profile" className="flex flex-col items-center hover:text-blue-300 transition duration-200">
                                <FaUser className="w-5 h-5 mb-1 text-[#053359]" />
                                <span className="text-[#053359]">Myfind</span>
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>

            {/* Spacer div to account for fixed header height */}
            <div className="pt-16"></div>
        </>
    );
}

export default App;
