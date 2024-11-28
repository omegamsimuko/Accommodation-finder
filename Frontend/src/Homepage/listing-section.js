import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router
import axios from 'axios'; // Import axios to make HTTP requests
import HostelCard from '../componets/hostel-card'; // Fixed typo: 'componets' to 'components'

function ListingSection() {
  const [hostels, setHostels] = useState([]); // State to hold hostel data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  // Static hostel data
  const staticHostel = {
    title: 'Incah 1 Hostel Only',
    description: 'A comfortable hostel with 20 rooms, located near Chancellor College campus.',
    locationType: 'urban',
    detailedLocation: 'near matiya primary',
    gender: 'male',
    roomType: ['double'],
    spaceAvailable: 20,
    rentalFee: 500,
    additionalFees: ['bills'],
    images: [
      'https://i.pinimg.com/originals/f6/c9/a3/f6c9a3cbb33bc8bbed47844c4b7852ae.jpg',
      'https://a.hwstatic.com/image/upload/f_auto,q_auto/v1/propertyimages/1/11398/q3hq1lh9tepnvlxy05vg'
    ],
    thumbnail_image: 'https://influencedigest.com/wp-content/uploads/2022/01/Hostels.jpg',
    ownerId: 1, // Assuming ownerId should be a number
    id: '19'  // Static ID for the hostel
  };

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios.get('http://localhost:3001/accomodation-listing') // Ensure this endpoint matches your backend
      .then((response) => {
        const fetchedHostels = response.data;
        
        // Merge static hostel with fetched hostels
        const allHostels = [staticHostel, ...fetchedHostels];
        
        // Sort hostels by ID in descending order
        const sortedHostels = allHostels.sort((a, b) => b.id - a.id);
        
        setHostels(sortedHostels); // Store the sorted hostels in the state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError(error.message); // Handle any errors
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="bg-gray-100 p-6">
      {loading ? (
        <p>Loading hostels...</p> // Show loading text while fetching data
      ) : error ? (
        <p>Error: {error}</p> // Show error message if the API request fails
      ) : (
        <div className="flex flex-wrap justify-center">
          {/* Render hostels fetched from the API and the static one */}
          {hostels.length > 0 ? (
            hostels.map((hostel) => (
              <div key={hostel.id} className="w-full sm:w-1/2 md:w-1/3 p-2">
                <Link to={`/hostel/${hostel.id}`} className="block">  {/* Use ID for navigation */}
                  <HostelCard hostel={hostel} />
                </Link>
              </div>
            ))
          ) : (
            <p>No hostels available at the moment.</p> // Show message if no hostels are found
          )}
        </div>
      )}
    </div>
  );
}

export default ListingSection;
