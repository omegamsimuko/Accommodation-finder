import React, { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [profilePicture, setProfilePicture] = useState(
    "https://via.placeholder.com/150"
  );
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);

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
    // Perform save logic here (e.g., API call to update user profile)
    setIsEditingName(false);
    setIsEditingEmail(false);
    alert("Changes saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full shadow-lg"
            src={profilePicture}
            alt="Profile"
          />
          <label
            htmlFor="profile-picture"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
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
        <div className="mt-6 flex items-center">
          <label className="block text-gray-800 font-semibold mr-2">Name:</label>
          {isEditingName ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-2 border rounded-md flex-1"
            />
          ) : (
            <span className="flex-1">{name}</span>
          )}
          <button
            onClick={() => setIsEditingName(true)}
            className="ml-2 text-blue-500 hover:text-blue-700"
          >
            Edit
          </button>
        </div>
        <div className="mt-6 flex items-center">
          <label className="block text-gray-800 font-semibold mr-2">Email:</label>
          {isEditingEmail ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 border rounded-md flex-1"
            />
          ) : (
            <span className="flex-1">{email}</span>
          )}
          <button
            onClick={() => setIsEditingEmail(true)}
            className="ml-2 text-blue-500 hover:text-blue-700"
          >
            Edit
          </button>
        </div>
        <button
          onClick={handleSaveChanges}
          className="mt-6 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;

