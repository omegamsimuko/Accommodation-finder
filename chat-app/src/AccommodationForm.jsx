import React, { useState } from 'react';
import axios from 'axios';  
import logo from "./components/iFind logo.png"; 

const AccommodationForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        locationType: '',
        detailedLocation: '',
        gender: '',
        roomType: '',  // Comma-separated list for room types
        spaceAvailable: '',
        rentalFee: '',
        additionalFee: '',
        image: '',  // Comma-separated list for image URLs
    });

    const [msg, setMsg] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Convert roomType and image into arrays
        const roomTypeArray = formData.roomType.split(',').map(item => item.trim());  // Split and clean
        const imageArray = formData.image.split(',').map(item => item.trim());  // Split and clean

        // Prepare data to send
        const dataToSend = {
            ...formData,
            roomType: roomTypeArray,
            image: imageArray,
        };

        try {
            const response = await axios.post('http://localhost:3001/accomodation-listing', dataToSend, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Handle successful response
            setMsg("Upload successful");
            
            // Reset form data after successful submission
            setFormData({
                title: '',
                description: '',
                locationType: '',
                detailedLocation: '',
                gender: '',
                roomType: '',
                spaceAvailable: '',
                rentalFee: '',
                additionalFee: '',
                image: '',  // Reset image URL field
            });
        } catch (error) {
            // Handle error response
            setMsg("Upload failed");
            console.error("Error posting accommodation:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-dark-blue py-10">
            <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-8">
                    <img src={logo} alt="Logo" className="mx-auto mb-4" />
                    <h1 className="text-3xl font-semibold text-dark-blue">Post Accommodation Listing</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                        {/* Title */}
                        <div>
                            <label htmlFor="title" className="block text-lg font-medium text-dark-blue mb-2">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                placeholder="Enter hostel name"
                                className="w-full p-4 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-600 transition-all"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label htmlFor="description" className="block text-lg font-medium text-dark-blue mb-2">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                rows="5"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                placeholder="Describe the accommodation"
                                className="w-full p-4 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-600 resize-y transition-all"
                            />
                        </div>

                        {/* Location Type */}
                        <div>
                            <label htmlFor="locationType" className="block text-lg font-medium text-dark-blue mb-2">Location Type</label>
                            <select
                                id="locationType"
                                name="locationType"
                                value={formData.locationType}
                                onChange={handleChange}
                                required
                                className="w-full p-4 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-600 transition-all"
                            >
                                <option value="">Select Location Type</option>
                                <option value="urban">Urban</option>
                                <option value="rural">Rural</option>
                            </select>
                        </div>

                        {/* Detailed Location */}
                        <div>
                            <label htmlFor="detailedLocation" className="block text-lg font-medium text-dark-blue mb-2">Detailed Location</label>
                            <input
                                type="text"
                                id="detailedLocation"
                                name="detailedLocation"
                                value={formData.detailedLocation}
                                onChange={handleChange}
                                required
                                placeholder="Enter location detail"
                                className="w-full p-4 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-600 transition-all"
                            />
                        </div>

                        {/* Gender */}
                        <div>
                            <label htmlFor="gender" className="block text-lg font-medium text-dark-blue mb-2">Gender</label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                                className="w-full p-4 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-600 transition-all"
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="unisex">Unisex</option>
                            </select>
                        </div>

                        {/* Room Types */}
                        <div>
                            <label htmlFor="roomType" className="block text-lg font-medium text-dark-blue mb-2">Room Type</label>
                            <input
                                type="text"
                                id="roomType"
                                name="roomType"
                                value={formData.roomType}
                                onChange={handleChange}
                                required
                                placeholder="Enter room types (comma-separated)"
                                className="w-full p-4 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-600 transition-all"
                            />
                        </div>

                        {/* Space Available */}
                        <div>
                            <label htmlFor="spaceAvailable" className="block text-lg font-medium text-dark-blue mb-2">Space Available</label>
                            <input
                                type="number"
                                id="spaceAvailable"
                                name="spaceAvailable"
                                value={formData.spaceAvailable}
                                onChange={handleChange}
                                required
                                placeholder="Space available"
                                className="w-full p-4 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-600 transition-all"
                            />
                        </div>

                        {/* Rental Fee */}
                        <div>
                            <label htmlFor="rentalFee" className="block text-lg font-medium text-dark-blue mb-2">Rental Fee (MK)</label>
                            <input
                                type="number"
                                id="rentalFee"
                                name="rentalFee"
                                value={formData.rentalFee}
                                onChange={handleChange}
                                required
                                placeholder="Rental fee"
                                className="w-full p-4 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-600 transition-all"
                            />
                        </div>

                        {/* Additional Fees */}
                        <div>
                            <label htmlFor="additionalFee" className="block text-lg font-medium text-dark-blue mb-2">Additional Fee</label>
                            <input
                                type="text"
                                id="additionalFee"
                                name="additionalFee"
                                value={formData.additionalFee}
                                onChange={handleChange}
                                required
                                placeholder="Additional fee"
                                className="w-full p-4 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-600 transition-all"
                            />
                        </div>

                        {/* Image URLs */}
                        <div>
                            <label htmlFor="image" className="block text-lg font-medium text-dark-blue mb-2">Image URLs</label>
                            <input
                                type="text"
                                id="image"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                required
                                placeholder="Enter image URLs (comma-separated)"
                                className="w-full p-4 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-600 transition-all"
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button type="submit" className="w-full p-4 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600">
                                Post Listing
                            </button>
                        </div>
                    </div>
                </form>

                {msg && <p className="text-center mt-4 text-green-600">{msg}</p>}
            </div>
        </div>
    );
};

export default AccommodationForm;
