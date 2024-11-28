import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // For making HTTP requests

const Dashboard = () => {
  const [listings, setListings] = useState([]); // State to store listings
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors
  const [user, setUser] = useState({ name: "", email: "", role: "" }); // State to store user details

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log("Fetching user data...");

        // Retrieve user details from local storage
        const storedUser = JSON.parse(localStorage.getItem("user"));
        console.log("Stored User:", storedUser);

        if (!storedUser?.id || !storedUser?.role) {
          throw new Error("User details not found or invalid in local storage");
        }

        const { id: userId, role } = storedUser;

        // Validate role
        const validRoles = ["property-owner", "agent", "student"];
        if (!validRoles.includes(role)) {
          throw new Error(`Unexpected role: ${role}. Valid roles are: ${validRoles.join(", ")}`);
        }

        // Determine API endpoint based on role
        let apiEndpoint;
        if (role === "property-owner") {
          apiEndpoint = `http://localhost:3001/property-owner/${userId}`;
        } else if (role === "agent") {
          apiEndpoint = `http://localhost:3001/agent/${userId}`;
        } else if (role === "student") {
          apiEndpoint = `http://localhost:3001/student/${userId}`;
        }

        console.log("API Endpoint:", apiEndpoint);

        // Fetch data
        const response = await axios.get(apiEndpoint);
        console.log("API Response:", response.data);

        // Set user details and listings
        setUser({
          name: response.data.name || "No name available",
          email: response.data.email || "No email available",
          role,
        });
        setListings(Array.isArray(response.data.listings) ? response.data.listings : []);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user data:", err.message);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []); // Runs once when the component mounts

  if (loading) {
    return <p>Loading your dashboard...</p>; // Show loading state
  }

  if (error) {
    return <p>Error: {error}</p>; // Show error message
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto px-5 py-10 mt-8">
        <div className="bg-white shadow rounded-lg p-6">
          {/* User Profile */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-gray-600">
                {user.name ? user.name.charAt(0).toUpperCase() : ""}
              </span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {user.name || "N/A"}
              </h2>
              <p className="text-gray-500">{user.email || "No email available"}</p>
              <p className="text-gray-500 capitalize">{user.role || "Role unavailable"}</p>
            </div>
          </div>

          {/* Listings Section */}
          <h3 className="text-lg font-medium text-gray-700 mb-4">
            {user.role === "student" ? "My Bookings" : "My Listings"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array.isArray(listings) && listings.length > 0 ? (
              listings.map((listing) => (
                <div
                  key={listing.id} // Use unique `id` for key
                  className="p-4 border rounded-lg bg-gray-50 shadow-sm"
                >
                  {/* Listing Details */}
                  <h4 className="text-gray-800 font-semibold">{listing.title}</h4>
                  <p className="text-gray-600">Description: {listing.description}</p>
                  <p className="text-gray-600">Location Type: {listing.locationType}</p>
                  <p className="text-gray-600">Detailed Location: {listing.detailedLocation}</p>
                  <p className="text-gray-600">Gender: {listing.gender}</p>
                  <p className="text-gray-600">Space Available: {listing.spaceAvailable}</p>
                  <p className="text-gray-600">Rental Fee: K{listing.rentalFee}</p>
                  <p className="text-gray-600">Booking Fee: K{listing.bookingFee}</p>
                  <p className="text-gray-600">
                    Additional Fees:{" "}
                    {Array.isArray(listing.additionalFees)
                      ? listing.additionalFees.join(", ")
                      : "None"}
                  </p>
                </div>
              ))
            ) : (
              <p>No {user.role === "student" ? "bookings" : "listings"} available at the moment.</p>
            )}
          </div>

          {/* Action Buttons */}
          {user.role !== "student" && (
            <div className="mt-6 flex space-x-4">
              <Link to="/postForm">
                <button className="bg-[#053359] text-white px-4 py-2 rounded hover:bg-blue-600">
                  Add Listing
                </button>
              </Link>
              <Link to="/bookingRequest">
                <button className="bg-[#053359] text-white px-4 py-2 rounded hover:bg-blue-600">
                  Booking Requests
                </button>
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
