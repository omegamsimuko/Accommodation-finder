import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';  
import logo from '../componets/logo.png'; 

const AccommodationForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        locationType: '',
        detailedLocation: '',
        gender: '',
        roomType: '',
        spaceAvailable: '',
        rentalFee: '',
        bookingFee: '',
        additionalFee: '',
        image: '',
    });

    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Convert roomType and image into arrays
        const roomTypeArray = formData.roomType.split(',').map(item => item.trim());
        const imageArray = formData.image.split(',').map(item => item.trim());

        const dataToSend = {
            ...formData,
            roomType: roomTypeArray,
            image: imageArray,
        };

        // Retrieve the user ID from localStorage
        const storedUser = JSON.parse(localStorage.getItem('user'));
        const userId = storedUser?.id;  // Get the user ID from local storage

        if (userId) {
            dataToSend.ownerId = userId; // Add ownerId (user's ID) to the data
        } else {
            setError('User not logged in');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/accomodation-listing', dataToSend, {
                headers: { 'Content-Type': 'application/json' },
            });
            setFormData({
                title: '',
                description: '',
                locationType: '',
                detailedLocation: '',
                gender: '',
                roomType: '',
                spaceAvailable: '',
                rentalFee: '',
                bookingFee: '',
                additionalFee: '',
                image: '',
            });
            alert('Upload successful');
            setTimeout(() => {
                navigate('/adPortal') // Change '/nextPage' to your desired route
            }, 2000); // 2000ms = 2 seconds
        } catch (error) {
            setError('Upload failed');
            console.error('Error posting accommodation:', error);
        }
        setLoading(false);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <main className="container mx-auto px-5 py-10 mt-8">
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Post Accommodation Listing</h2>
                    {error && <div className="mb-4 text-red-600">{error}</div>}
                    {msg && <div className="mb-4 text-green-600">{msg}</div>}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title */}
                        <div>
                            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                placeholder="Enter hostel name"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                rows="5"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                placeholder="Describe the accommodation"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>

                        {/* Location Type */}
                        <div>
                            <label htmlFor="locationType" className="block text-gray-700 font-medium mb-2">Location Type</label>
                            <select
                                id="locationType"
                                name="locationType"
                                value={formData.locationType}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                            >
                                <option value="">Select Location Type</option>
                                <option value="urban">Urban</option>
                                <option value="rural">Rural</option>
                            </select>
                        </div>

                        {/* Detailed Location */}
                        <div>
                            <label htmlFor="detailedLocation" className="block text-gray-700 font-medium mb-2">Detailed Location</label>
                            <input
                                type="text"
                                id="detailedLocation"
                                name="detailedLocation"
                                value={formData.detailedLocation}
                                onChange={handleChange}
                                required
                                placeholder="Enter location detail"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>

                        {/* Gender */}
                        <div>
                            <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">Gender</label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="unisex">Unisex</option>
                            </select>
                        </div>

                        {/* Room Types */}
                        <div>
                            <label htmlFor="roomType" className="block text-gray-700 font-medium mb-2">Room Type</label>
                            <input
                                type="text"
                                id="roomType"
                                name="roomType"
                                value={formData.roomType}
                                onChange={handleChange}
                                required
                                placeholder="Enter room types (comma-separated)"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>

                        {/* Space Available */}
                        <div>
                            <label htmlFor="spaceAvailable" className="block text-gray-700 font-medium mb-2">Space Available</label>
                            <input
                                type="number"
                                id="spaceAvailable"
                                name="spaceAvailable"
                                value={formData.spaceAvailable}
                                onChange={handleChange}
                                required
                                placeholder="Space available"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>

                        {/* Rental Fee */}
                        <div>
                            <label htmlFor="rentalFee" className="block text-gray-700 font-medium mb-2">Rental Fee</label>
                            <input
                                type="number"
                                id="rentalFee"
                                name="rentalFee"
                                value={formData.rentalFee}
                                onChange={handleChange}
                                required
                                placeholder="Rental fee"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>

                        {/* Booking Fee */}
                        <div>
                            <label htmlFor="bookingFee" className="block text-gray-700 font-medium mb-2">Booking Fee</label>
                            <input
                                type="number"
                                id="bookingFee"
                                name="bookingFee"
                                value={formData.bookingFee}
                                onChange={handleChange}
                                required
                                placeholder="Booking fee"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>

                        {/* Additional Fee */}
                        <div>
                            <label htmlFor="additionalFee" className="block text-gray-700 font-medium mb-2">Additional Fee</label>
                            <input
                                type="text"
                                id="additionalFee"
                                name="additionalFee"
                                value={formData.additionalFee}
                                onChange={handleChange}
                                required
                                placeholder="Additional fee"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>

                        {/* Image URLs */}
                        <div>
                            <label htmlFor="image" className="block text-gray-700 font-medium mb-2">Image URLs</label>
                            <input
                                type="text"
                                id="image"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                required
                                placeholder="Enter image URLs (comma-separated)"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-6 flex space-x-4 justify-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`px-6 py-2 font-semibold text-white rounded-full ${loading ? 'bg-gray-400' : 'bg-[#053359] hover:bg-blue-700'}`}
                            >
                                {loading ? 'Posting...' : 'Post Listing'}
                            </button>
                            <button
                                type="button"
                                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400"
                                onClick={() => setFormData({
                                    title: '',
                                    description: '',
                                    locationType: '',
                                    detailedLocation: '',
                                    gender: '',
                                    roomType: '',
                                    spaceAvailable: '',
                                    rentalFee: '',
                                    bookingFee: '',
                                    additionalFee: '',
                                    image: '',
                                })}
                            >
                                Reset Form
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default AccommodationForm;
