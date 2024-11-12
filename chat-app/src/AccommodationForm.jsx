import React, { useState } from 'react';
import logo from "./components/iFind logo.png"; // Logo import

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
        additionalFee: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData(prevState => ({
                ...prevState,
                [name]: files[0]
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            formDataToSend.append(key, formData[key]);
        });
        console.log(formDataToSend);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-dark-blue py-10">
            <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-8">
                    <img src={logo} alt="Logo" className="mx-auto mb-4" />
                    <h1 className="text-3xl font-semibold text-dark-blue">Post Accommodation Listing</h1>
                </div>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
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

                        {/* Room Type */}
                        <div>
                            <label htmlFor="roomType" className="block text-lg font-medium text-dark-blue mb-2">Room Type</label>
                            <input
                                type="text"
                                id="roomType"
                                name="roomType"
                                value={formData.roomType}
                                onChange={handleChange}
                                required
                                placeholder="Enter room type"
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

                        {/* Additional Fee */}
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

                        {/* Image Upload */}
                        <div>
                            <label htmlFor="image" className="block text-lg font-medium text-dark-blue mb-2">Upload Image</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                onChange={handleChange}
                                className="w-full text-sm text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 transition-all"
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button type="submit" className="w-full p-4 bg-indigo-900 text-white font-semibold rounded-md hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600">
                                Post Listing
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AccommodationForm;