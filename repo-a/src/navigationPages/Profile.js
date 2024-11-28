import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi"; // Import logout icon

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); // Email state
  const [profilePicture, setProfilePicture] = useState(
    "https://via.placeholder.com/150"
  );
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const navigate = useNavigate(); // For navigation after logout

  // Fetch user data from localStorage when the component mounts
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setName(storedUser.name || ""); // If name exists in localStorage, set it
      setEmail(storedUser.email || ""); // If email exists in localStorage, set it
    }
  }, []);

  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    setIsEditingName(false);
    setIsEditingEmail(false);
    alert("Changes saved successfully!");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    alert("You have been logged out.");
    navigate("/"); // Navigate to home page after logout
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-24 p-6">
      {/* Adjust padding-top for fixed header */}
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 relative">
        {/* Logout Icon in Top Right Corner */}
        <div className="absolute top-4 right-4 text-center">
          <button
            onClick={handleLogout}
            className="flex flex-col items-center text-[#053359] hover:text-[#053359]"
          >
            <FiLogOut className="w-6 h-6" /> {/* Logout Icon */}
            <span className="text-sm">Logout</span>
          </button>
        </div>

        {/* Profile Picture Section */}
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full shadow-md"
            src={profilePicture}
            alt="Profile"
          />
          <label
            htmlFor="profile-picture"
            className="mt-4 bg-[#053359] text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-800"
          >
            Upload Picture
          </label>
          <input
            type="file"
            id="profile-picture"
            accept="image/*"
            className="hidden"
            onChange={handlePictureUpload}
          />
        </div>

        {/* Name Section */}
        <div className="mt-6 flex items-center">
          <label className="block text-gray-700 font-semibold mr-2">
            Name:
          </label>
          {isEditingName ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-2 border rounded-md flex-1 focus:outline-none focus:ring focus:border-blue-300"
            />
          ) : (
            <span className="flex-1 text-gray-900">{name || "Your Name"}</span>
          )}
          <button
            onClick={() => setIsEditingName(true)}
            className="ml-2 text-[#053359] hover:text-blue-800"
          >
            Edit
          </button>
        </div>

        {/* Email Section */}
        <div className="mt-6 flex items-center">
          <label className="block text-gray-700 font-semibold mr-2">
            Email:
          </label>
          {isEditingEmail ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 border rounded-md flex-1 focus:outline-none focus:ring focus:border-blue-300"
            />
          ) : (
            <span className="flex-1 text-gray-900">{email || "Your Email"}</span>
          )}
          <button
            onClick={() => setIsEditingEmail(true)}
            className="ml-2 text-[#053359] hover:text-blue-800"
          >
            Edit
          </button>
        </div>

        {/* Save Changes Button */}
        <button
          onClick={handleSaveChanges}
          className="mt-6 w-full bg-[#053359] text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
