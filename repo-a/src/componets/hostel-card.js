import React from 'react';

const HostelCard = ({ hostel }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden m-4 transition-transform transform hover:scale-105 duration-200">
      {/* Image section */}
      <div className="h-48 overflow-hidden">
        <img 
          src={hostel?.images && hostel.images.length > 0 ? hostel.images[0] : 'https://via.placeholder.com/400x300?text=No+Image'} 
          alt={hostel.title}
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Content section */}
      <div className="p-5 bg-[#053359]">
        <h2 className="text-2xl font-semibold text-gray-100 mb-1">{hostel.title}</h2>
        <p className="text-sm text-gray-100 mb-3">{hostel.description}</p>

        {/* Location Type */}
        <div className="text-gray-100 mb-1">
          <span className="font-semibold">Location Type:</span> {hostel.locationType || 'Not Available'}
        </div>
        
        {/* Gender */}
        <div className="text-gray-100 mb-1">
          <span className="font-semibold">Gender:</span> {hostel.gender || 'Not Available'}
        </div>

        {/* Rental Fee */}
        <div className="text-gray-100 mb-4">
          <span className="font-semibold">Price:</span> K{hostel?.rentalFee?.toLocaleString() || 'Not Available'} / month
        </div>
      </div>
    </div>
  );
};

export default HostelCard;
