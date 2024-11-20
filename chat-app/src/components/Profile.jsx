import React, { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("");
  const [about, setAbout] = useState(
    ""
  );
  const [email, setEmail] = useState(" ");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState(" ");
  const [profilePicture, setProfilePicture] = useState(
    "https://via.placeholder.com/150"
  );

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
        <div className="mt-6">
          <label className="block text-gray-800 font-semibold">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mt-6">
          <label className="block text-gray-800 font-semibold">About Me</label>
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            rows="4"
            className="mt-1 w-full px-3 py-2 border rounded-md"
          ></textarea>
        </div>
        <div className="mt-6">
          <label className="block text-gray-800 font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mt-6">
          <label className="block text-gray-800 font-semibold">Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mt-6">
          <label className="block text-gray-800 font-semibold">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button className="mt-6 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
