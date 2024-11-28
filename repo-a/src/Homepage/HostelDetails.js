import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Import left and right arrows
import axios from 'axios'; // For API requests

function HostelDetails() {
  const { id } = useParams(); // Get the ID from the URL
  const [hostel, setHostel] = useState(null); // State to store the hostel details
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // For image carousel
  const [role, setRole] = useState(null); // Track the user's role
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  // Static hostel data for id 19
  const staticHostel = {
    title: 'Incah 1 Hostel Only',
    description: 'A comfortable hostel with 20 rooms, located near Chancellor College campus.',
    locationType: 'urban',
    detailedLocation: 'near matiya primary',
    gender: 'male',
    roomType: ['double'],
    spaceAvailable: 20,
    rentalFee: 500,
    additionalFees: ['bills'],
    images: [
      'https://i.pinimg.com/originals/f6/c9/a3/f6c9a3cbb33bc8bbed47844c4b7852ae.jpg',
      'https://a.hwstatic.com/image/upload/f_auto,q_auto/v1/propertyimages/1/11398/q3hq1lh9tepnvlxy05vg'
    ],
    thumbnail_image: 'https://influencedigest.com/wp-content/uploads/2022/01/Hostels.jpg',
    ownerId: 1,
    id: 19
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount

    // Check if the hostel ID is 19 and load static data for it
    if (id === '19') {
      setHostel(staticHostel); // Set static data for hostel with ID 19
      setLoading(false); // Stop loading for static data
    } else {
      // Fetch the hostel data from the API if it's not ID 19
      axios
        .get(`http://localhost:3001/accomodation-listing/${id}`)
        .then((response) => {
          setHostel(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }

    // Check if the user is logged in
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (storedUser && token) {
      setRole(storedUser.role); // Set role to state
      setIsLoggedIn(true); // Set login status
    }
  }, [id]); // Dependency on `id`

  if (loading) {
    return <p>Loading hostel details...</p>; // Show loading indicator
  }

  if (error) {
    return <p>Error: {error}</p>; // Show error message
  }

  if (!hostel) {
    return <p>Hostel not found</p>; // Handle no hostel found
  }

  // Handle next image button click
  const handleNextImage = () => {
    if (hostel.images && hostel.images.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hostel.images.length);
    }
  };

  // Handle previous image button click
  const handlePrevImage = () => {
    if (hostel.images && hostel.images.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? hostel.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="pt-20 bg-white p-6 flex justify-center items-start min-h-screen">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-center">{hostel.title}</h1>

        {/* Image Section with Next and Previous Image Buttons */}
        <div className="w-full mb-8 relative">
          <img
            src={hostel.images?.[currentImageIndex] || 'https://via.placeholder.com/400x300?text=No+Image'}
            alt={hostel.title}
            className="w-full h-75 object-cover rounded-md mx-auto"
          />

          {/* Left Arrow for Previous Image */}
          {currentImageIndex > 0 && (
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
            >
              <FaArrowLeft size={30} color="#053359" />
            </button>
          )}

          {/* Right Arrow for Next Image */}
          {hostel.images && hostel.images.length > 1 && (
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
            >
              <FaArrowRight size={30} color="#053359" />
            </button>
          )}
        </div>

        <div className="w-full">
          <p className="text-lg mb-4">{hostel.description}</p>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <p><strong>Location:</strong> {hostel.locationType || 'Not Available'}</p>
            </div>
            <div className="flex justify-between">
              <p><strong>Detailed Location:</strong> {hostel.detailedLocation || 'Not Available'}</p>
            </div>
            <div className="flex justify-between">
              <p><strong>Gender:</strong> {hostel.gender || 'Not Available'}</p>
            </div>
            <div className="flex justify-between">
              <p><strong>Room Type:</strong> {hostel.roomType || 'Not Available'}</p>
            </div>
            <div className="flex justify-between">
              <p><strong>Space Available:</strong> {hostel.spaceAvailable || 'Not Available'}</p>
            </div>
            <div className="flex justify-between">
              <p><strong>Rental Fee:</strong> K{hostel.rentalFee?.toLocaleString() || 'Not Available'}</p>
            </div>
            <div className="flex justify-between">
              <p><strong>Additional Fees:</strong> {hostel.additionalFees?.join(', ') || 'Not Available'}</p>
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-start space-x-6 mt-10">
          {/* Book Now Button */}
          {isLoggedIn ? (
            role === "student" || role === "agent" ? (
              <Link to="/bookNow">
                <button
                  className="px-6 py-2 bg-[#053359] text-white rounded-full hover:bg-blue-700 focus:outline-none"
                  onClick={() => localStorage.setItem('accommodationId', hostel.id)} // Store the ID
                >
                  Book Now
                </button>
              </Link>
            ) : (
              <button
                className="px-6 py-2 bg-[#cccccc] text-white rounded-full cursor-not-allowed"
                disabled
              >
                Book Now (Only agents and students allowed)
              </button>
            )
          ) : (
            <button
              className="px-6 py-2 bg-[#cccccc] text-white rounded-full cursor-not-allowed"
              disabled
            >
              Book Now (Login Required)
            </button>
          )}

          {/* Contact Ad Owner Button */}
          {isLoggedIn ? (
            <Link to="/contact">
              <button
                className="px-6 py-2 bg-[#053359] text-white rounded-full hover:bg-blue-700 focus:outline-none"
              >
                Contact Ad Owner
              </button>
            </Link>
          ) : (
            <button
              className="px-6 py-2 bg-[#cccccc] text-white rounded-full cursor-not-allowed"
              disabled
            >
              Contact Ad Owner (Login Required)
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default HostelDetails;
