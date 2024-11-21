import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userRole, setUserRole] = useState('student'); // Assuming you track user role

  // Fetch bookings for the user
  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3001/bookings');
        setBookings(response.data);
      } catch (error) {
        setError('Error fetching bookings');
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  // Handle confirming a booking
  const handleConfirmBooking = async (id) => {
    try {
      const response = await axios.patch(`http://localhost:3001/bookings/${id}/confirm`);
      setBookings(bookings.map((booking) => booking.id === id ? response.data : booking));
      alert("Your booking has been confirmed!");
    } catch (error) {
      setError('Error confirming booking');
    }
  };

  // Handle rejecting a booking
  const handleRejectBooking = async (id) => {
    try {
      const response = await axios.patch(`http://localhost:3001/bookings/${id}/reject`);
      setBookings(bookings.map((booking) => booking.id === id ? response.data : booking));
      alert("Your booking has been rejected.");
    } catch (error) {
      setError('Error rejecting booking');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Booking Requests</h2>
      {error && <div className="text-red-600">{error}</div>}
      {loading ? (
        <p>Loading bookings...</p>
      ) : (
        <div>
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white border border-gray-300 rounded-lg shadow-md mb-4 p-4">
              <p><strong>Accommodation ID:</strong> {booking.accommodationId}</p>
              <p><strong>Check-in Date:</strong> {booking.checkInDate}</p>
              <p><strong>Check-out Date:</strong> {booking.checkOutDate}</p>
              <p><strong>Total Price:</strong> ${booking.totalPrice}</p>
              <p><strong>Status:</strong> {booking.status}</p>

              {userRole === 'owner' && booking.status === 'pending' && (
                <div className="mt-4">
                  <button onClick={() => handleConfirmBooking(booking.id)} className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">Confirm</button>
                  <button onClick={() => handleRejectBooking(booking.id)} className="bg-red-500 text-white px-4 py-2 rounded-md">Reject</button>
                </div>
              )}

              {userRole === 'student' && booking.status !== 'pending' && (
                <p className="mt-4 text-sm font-medium">
                  {booking.status === 'confirmed' ? 'Booking Confirmed' : 'Booking Rejected'}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingList;
