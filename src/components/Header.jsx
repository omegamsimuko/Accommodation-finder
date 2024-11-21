import React from 'react'

const Header = () => {
  return (

    < div className="bg-white shadow">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-700">IFIND</h1>
      <nav className="flex space-x-4">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Home
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          All Hostels
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          LandlordPortal
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          About Us
        </a>
      </nav>
    </div>
  </div>
  )
}

export default Header
