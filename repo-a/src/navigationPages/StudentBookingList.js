import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentBookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch bookings for the student
  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3001/bookings'); // Fetch all bookings
        const currentUser = JSON.parse(localStorage.getItem('user')); // Get current user from localStorage
        const currentUserEmail = currentUser?.email; // Extract email from the user data

        if (currentUserEmail) {
          const filteredBookings = response.data.filter(
            (booking) => booking.email === currentUserEmail // Filter bookings by email
          );
          setBookings(filteredBookings);
        }
      } catch (error) {
        setError('Error fetching bookings');
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-5 py-10 mt-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">My Bookings</h2>
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
                      <strong>Status:</strong>{' '}
                      <span
                        className={`${
                          booking.status === 'confirmed'
                            ? 'text-green-600'
                            : booking.status === 'rejected'
                            ? 'text-red-600'
                            : 'text-yellow-600'
                        } font-semibold`}
                      >
                        {booking.status}
                      </span>
                    </p>
                  </div>
                ))
              ) : (
                <p>No bookings found.</p>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default StudentBookingList;
