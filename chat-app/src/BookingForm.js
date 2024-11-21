import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [accommodationId, setAccommodationId] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!accommodationId || !checkInDate || !checkOutDate || !totalPrice) {
      setError('All fields are required.');
      setLoading(false);
      return;
    }

    const newBooking = {
      accommodationId,
      checkInDate,
      checkOutDate,
      totalPrice,
    };

    try {
      await axios.post('http://localhost:3001/bookings/create', newBooking);
      setAccommodationId('');
      setCheckInDate('');
      setCheckOutDate('');
      setTotalPrice('');
      setLoading(false);
      alert('Booking Created!');
    } catch (err) {
      setError('Failed to create booking');
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Create a New Booking</h2>
      {error && <div className="mb-4 text-red-600">{error}</div>}
      <form onSubmit={handleSubmit}>
        {/* Accommodation Selection */}
        <div className="mb-4">
          <label htmlFor="accommodationId" className="block text-gray-700 font-semibold mb-2">
            Select Accommodation
          </label>
          <input
            type="text"
            id="accommodationId"
            value={accommodationId}
            onChange={(e) => setAccommodationId(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Accommodation ID"
            required
          />
        </div>

        {/* Dates and Price */}
        <div className="mb-4">
          <label htmlFor="checkInDate" className="block text-gray-700 font-semibold mb-2">
            Check-in Date
          </label>
          <input
            type="date"
            id="checkInDate"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="checkOutDate" className="block text-gray-700 font-semibold mb-2">
            Check-out Date
          </label>
          <input
            type="date"
            id="checkOutDate"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="totalPrice" className="block text-gray-700 font-semibold mb-2">
            Total Price
          </label>
          <input
            type="number"
            id="totalPrice"
            value={totalPrice}
            onChange={(e) => setTotalPrice(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 mt-4 text-white font-semibold rounded-md ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {loading ? 'Booking Now...' : 'Book Now'}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
