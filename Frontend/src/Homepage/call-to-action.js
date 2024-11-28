import React from 'react';

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">
        Ready to Find Your Perfect Accommodation?
      </h2>
      <p className="text-lg mb-6 max-w-2xl mx-auto">
        Discover the best options for comfortable and affordable housing near Chancellor College.
        Browse hostels, compare prices, and book your ideal place to stay!
      </p>
      <button className="bg-white text-purple-500 font-semibold px-8 py-3 rounded-full shadow-lg transform transition hover:scale-105 hover:bg-gray-100">
       About us
      </button>
    </div>
  );
};

export default CallToAction;
