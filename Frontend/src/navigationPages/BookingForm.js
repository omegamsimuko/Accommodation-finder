import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [accommodationId, setAccommodationId] = useState(''); // String type
  const [ownerId, setOwnerId] = useState(null); // Number type
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedAccommodationId = localStorage.getItem('accommodationId'); // Remain as string
    setAccommodationId(storedAccommodationId);

    if (!storedUser) {
      setError('You must be logged in to make a booking.');
      navigate('/login');
    } else {
      const { id, role } = storedUser;

      const endpoint =
        role === 'agent'
          ? `http://localhost:3001/agent/${id}`
          : `http://localhost:3001/student/${id}`;

      axios
        .get(endpoint)
        .then((response) => {
          const { name, email } = response.data;
          setFullName(name || '');
          setEmail(email || '');
        })
        .catch(() => {
          setError('Failed to load user details.');
        });
    }

    if (storedAccommodationId) {
      axios
        .get(`http://localhost:3001/accomodation-listing/${storedAccommodationId}`)
        .then((response) => {
          const { ownerId } = response.data; // Extract ownerId directly
          setOwnerId(ownerId ? parseInt(ownerId, 10) : null); // Convert to number
        })
        .catch(() => {
          setError('Failed to load accommodation details.');
        });
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!specialRequest) {
      setError('Special request cannot be empty.');
      setLoading(false);
      return;
    }

    if (!accommodationId || !ownerId) {
      setError('Accommodation details are missing.');
      setLoading(false);
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
      setError('You must be logged in to make a booking.');
      setLoading(false);
      navigate('/login');
      return;
    }

    const studentId = parseInt(storedUser.id, 10); // Ensure studentId is a number

    const newBooking = {
      fullName,
      email,
      specialRequest,
      accommodationListingId: accommodationId, // String type
      studentId, // Number type
      ownerId, // Number type
    };

    try {
      await axios.post('http://localhost:3001/bookings', newBooking);
      setSpecialRequest('');
      setLoading(false);
      alert('Booking request sent!');
    } catch (err) {
      setError('Failed to send booking request.');
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-5 py-10 mt-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Send a Booking Request</h2>
          {error && <div className="mb-4 text-red-600">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                readOnly
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm bg-gray-100"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                readOnly
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm bg-gray-100"
              />
            </div>

            <div>
              <label htmlFor="specialRequest" className="block text-gray-700 font-medium mb-2">
                Special Request / Note
              </label>
              <textarea
                id="specialRequest"
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                placeholder="Enter any special request or note..."
              ></textarea>
            </div>

            <div className="mt-6 flex space-x-4 justify-center">
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-2 font-semibold text-white rounded-full ${loading ? 'bg-gray-400' : 'bg-blue-900 hover:bg-blue-700'}`}
              >
                {loading ? 'Submitting...' : 'Submit Request'}
              </button>
              <button
                type="button"
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400"
                onClick={() => setSpecialRequest('')}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default BookingForm;
