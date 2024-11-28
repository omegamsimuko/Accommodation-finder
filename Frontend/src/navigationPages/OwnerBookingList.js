import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OwnerBookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null); // Store current user data

  useEffect(() => {
    // Check if user is logged in and get user from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
      setUser(storedUser); // Set user if available
    } else {
      setError('User not logged in'); // Handle case where user is not logged in
    }
  }, []);

  // Fetch bookings for the property owner
  useEffect(() => {
    if (!user) return; // Do not fetch bookings if no user is set

    const fetchBookings = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3001/bookings');
        
        // Filter bookings by the logged-in user's ID (ownerId)
        const filteredBookings = response.data.filter(booking => booking.ownerId === user.id);
        
        setBookings(filteredBookings); // Set the filtered bookings
      } catch (error) {
        setError('Error fetching bookings');
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, [user]); // Run fetchBookings when user data is available

  // Handle confirming a booking
  const handleConfirmBooking = async (id) => {
    try {
      const response = await axios.patch(`http://localhost:3001/bookings/${id}/confirm`);
      setBookings(bookings.map((booking) => (booking.id === id ? response.data : booking)));
      alert('Booking has been confirmed!');
    } catch (error) {
      setError('Error confirming booking');
    }
  };

  // Handle rejecting a booking
  const handleRejectBooking = async (id) => {
    try {
      const response = await axios.patch(`http://localhost:3001/bookings/${id}/reject`);
      setBookings(bookings.map((booking) => (booking.id === id ? response.data : booking)));
      alert('Booking has been rejected.');
    } catch (error) {
      setError('Error rejecting booking');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-5 py-10 mt-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Booking Requests</h2>
          {error && <div className="text-red-600">{error}</div>}
          {loading ? (
            <p>Loading bookings...</p>
          ) : (
            <div>
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-white border border-gray-300 rounded-lg shadow-md mb-4 p-4"
                  >
                    <p>
                      <strong>Full Name:</strong> {booking.fullName}
                    </p>
                    <p>
                      <strong>Email:</strong> {booking.email}
                    </p>
                    <p>
                      <strong>Special Request:</strong> {booking.specialRequest || 'None'}
                    </p>
                    <p>
                      <strong>Accommodation ID:</strong> {booking.accommodationListingId}
                    </p>
                    <p>
                      <strong>Status:</strong> {booking.status}
                    </p>

                    {/* Show booking actions for property owner */}
                    {booking.status === 'pending' && (
                      <div className="mt-4">
                        <button
                          onClick={() => handleConfirmBooking(booking.id)}
                          className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => handleRejectBooking(booking.id)}
                          className="bg-red-500 text-white px-4 py-2 rounded-md"
                        >
                          Reject
                        </button>
                      </div>
                    )}

                    {/* Display message for confirmed or rejected bookings */}
                    {booking.status !== 'pending' && (
                      <p className="mt-4 text-sm font-medium">
                        {booking.status === 'confirmed'
                          ? 'Booking Confirmed'
                          : 'Booking Rejected'}
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <p>No bookings found for your property.</p>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default OwnerBookingList;
