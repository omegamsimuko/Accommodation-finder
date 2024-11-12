import React, { useState } from 'react';
import logo from "./components/iFind logo.png";
import { useForm } from "react-hook-form";

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

        // For now, just logging the form data to the console
        console.log(formDataToSend);

        // You can make an API call here to submit the form data
        // Example: fetch('/submit-accommodation', { method: 'POST', body: formDataToSend });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg grid gap-6">
                <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                    <img src={logo} alt="Logo" className="mx-auto" />
                </h1>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                placeholder="Enter hostel name"
                                className="w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                rows="5"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                placeholder="Describe the accommodation"
                                className="w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 resize-y"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="locationType" className="block text-sm font-medium text-gray-700 mb-2">Location Type</label>
                            <select
                                id="locationType"
                                name="locationType"
                                value={formData.locationType}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Location Type</option>
                                <option value="urban">Urban</option>
                                <option value="rural">Rural</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="detailedLocation" className="block text-sm font-medium text-gray-700 mb-2">Detailed Location</label>
                            <input
                                type="text"
                                id="detailedLocation"
                                name="detailedLocation"
                                value={formData.detailedLocation}
                                onChange={handleChange}
                                required
                                placeholder="Enter location detail"
                                className="w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="unisex">Unisex</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
                            <input
                                type="text"
                                id="roomType"
                                name="roomType"
                                value={formData.roomType}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="spaceAvailable" className="block text-sm font-medium text-gray-700 mb-2">Space Available</label>
                            <input
                                type="number"
                                id="spaceAvailable"
                                name="spaceAvailable"
                                value={formData.spaceAvailable}
                                onChange={handleChange}
                                required
                                placeholder="Space available"
                                className="w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="rentalFee" className="block text-sm font-medium text-gray-700 mb-2">Rental Fee (MK)</label>
                            <input
                                type="number"
                                id="rentalFee"
                                name="rentalFee"
                                value={formData.rentalFee}
                                onChange={handleChange}
                                required
                                placeholder="Rental fee"
                                className="w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="additionalFee" className="block text-sm font-medium text-gray-700 mb-2">Additional Fee</label>
                            <input
                                type="text"
                                id="additionalFee"
                                name="additionalFee"
                                value={formData.additionalFee}
                                onChange={handleChange}
                                required
                                placeholder="Additional fee"
                                className="w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">Upload Image</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                onChange={handleChange}
                                className="w-full text-sm text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <button type="submit" className="w-full p-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
                        Post Listing
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AccommodationForm;
