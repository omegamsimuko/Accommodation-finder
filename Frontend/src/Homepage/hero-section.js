import React, { useState } from 'react';
import { SlMagnifier } from "react-icons/sl";
import { ReactComponent as FilterIcon } from './filter.svg';  // Ensure this path is correct

const HeroSection = () => {
  // State to handle the search input
  const [searchText, setSearchText] = useState('');

  // State to toggle the filter menu
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  // State to handle filter values
  const [filters, setFilters] = useState({
    gender: '',
    location: '',
    roomType: '',
    priceRange: '',
  });

  // Handle input changes for the search bar
  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Toggle filter menu visibility
  const toggleFilterMenu = () => {
    setShowFilterMenu(!showFilterMenu);
  };

  // Apply filters and close the menu
  const handleApplyFilters = () => {
    console.log('Filters applied:', filters);
    setShowFilterMenu(false); // Optionally close the filter menu after applying filters
  };

  return (
    <div
      className="relative bg-cover bg-center text-white py-60 flex flex-col items-center"
      style={{
        backgroundImage: "url('https://www.lianapress.hk/media/userfiles/128732/1538968565/hostel-g.jpg')", // Replace with your image URL
      }}
    >
      {/* Title (Header) */}
      <h1 className="text-4xl font-bold mb-6">Search for your next hostel</h1>

      {/* Search Bar and Filter Button Container */}
      <div className="relative flex items-center mb-6 space-x-4">
        {/* Search Bar */}
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <SlMagnifier className="text-black" />
          </div>
          <input
            type="text"
            value={searchText} // Bind the value to the state
            onChange={handleSearchInputChange} // Update state when input changes
            placeholder=""
            className="pl-10 p-2 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-white text-black" // Add text-black to change text color
          />
        </div>

        {/* Filter Button */}
        <button 
          onClick={toggleFilterMenu} // Toggle the filter menu visibility
          className="bg-white text-[#053359] px-4 py-2 rounded-lg transition-transform transform hover:scale-105 flex items-center space-x-2"
        >
          <FilterIcon className="text-black w-5 h-5" /> {/* Adjust icon size */}
          <span>Filter</span>
        </button>
      </div>

      {/* Filter Menu (Conditional Rendering) */}
      {showFilterMenu && (
        <div className="absolute top-20 bg-white text-[#053359] rounded-lg shadow-lg w-64 p-4 space-y-4">
          <h3 className="font-semibold">Filters</h3>

          {/* Gender Filter */}
          <div>
            <label className="block">Gender</label>
            <select
              name="gender"
              value={filters.gender}
              onChange={handleFilterChange}
              className="w-full p-2 rounded-lg border"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="unisex">Unisex</option>
            </select>
          </div>

          {/* Location Filter */}
          <div>
            <label className="block">Location</label>
            <select
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              className="w-full p-2 rounded-lg border"
            >
              <option value="">Select Location</option>
              <option value="rural">Rural</option>
              <option value="urban">Urban</option>
            </select>
          </div>

          {/* Room Type Filter */}
          <div>
            <label className="block">Room Type</label>
            <select
              name="roomType"
              value={filters.roomType}
              onChange={handleFilterChange}
              className="w-full p-2 rounded-lg border"
            >
              <option value="">Select Room Type</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="dorm">Dorm-style</option>
            </select>
          </div>

          {/* Price Range Filter */}
          <div>
            <label className="block">Price Range</label>
            <select
              name="priceRange"
              value={filters.priceRange}
              onChange={handleFilterChange}
              className="w-full p-2 rounded-lg border"
            >
              <option value="">Select Price Range</option>
              <option value="20k-30k">20k-30k</option>
              <option value="30k-40k">30k-40k</option>
              <option value="40k-50k">40k-50k</option>
              <option value="50k-60k">50k-60k</option>
              <option value="60k+">60k+</option>
            </select>
          </div>

          {/* OK Button */}
          <div className="mt-4">
            <button
              onClick={handleApplyFilters}
              className="w-full p-2 bg-[#053359] text-white rounded-lg"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>

  );
};

export default HeroSection;
