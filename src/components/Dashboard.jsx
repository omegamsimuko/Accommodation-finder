import React from 'react'
import Header from "./Header";

const Dashboard = () => {
    const hostels = [
        {
          name: "Apawo Compounds",
          location: "Pamdale",
          cost: "K 30,000",
          gender: "Girls",
        },
        {
          name: "Profit",
          location: "Small Bridge",
          cost: "K 40,000",
          gender: "Boys",
        },
        {
          name: "Blue Gate",
          location: "Malawi",
          cost: "K 30,000",
          gender: "Girls & Boys",
        },
      ];
    
      return (
        <>
        <Header/>
        <div className="bg-gray-100 min-h-screen">
         
    
          {/* Main Content */}
          <main className="container mx-auto px-4 py-8">
            <div className="bg-white shadow rounded-lg p-6">
              {/* User Profile */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-600">L</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">Lucy Sabola</h2>
                  <p className="text-gray-500">0998808777</p>
                </div>
              </div>
    
              {/* Hostels List */}
              <h3 className="text-lg font-medium text-gray-700 mb-4">My Hostels</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hostels.map((hostel, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg bg-gray-50 shadow-sm"
                  >
                    <h4 className="text-gray-800 font-semibold">{hostel.name}</h4>
                    <p className="text-gray-600">Location: {hostel.location}</p>
                    <p className="text-gray-600">Cost: {hostel.cost}</p>
                    <p className="text-gray-600">Gender: {hostel.gender}</p>
                  </div>
                ))}
              </div>
    
              {/* Action Buttons */}
              <div className="mt-6 flex space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Add Hostel
                </button>
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
                  Logout
                </button>
              </div>
            </div>
          </main>
        </div>
        </>
      )
    
}

export default Dashboard
