import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HeroSection from "./hero-section";
import ListingSection from "./listing-section";

function Homepage() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    gender: "",
    location: "",
    roomType: "",
    priceRange: "",
  });
  const [user, setUser] = useState(null); // Track user state
  const navigate = useNavigate();

  // Sync user state with localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null); // Update state immediately
    navigate("/"); // Navigate after setting user state to null
  };

  // Refetch user state on each render to detect changes
  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    // Listen for localStorage changes (e.g., login/logout)
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/accomodation-listings",
          { params: filters }
        );
        setListings(response.data);
      } catch (error) {
        console.error("Error fetching listings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [filters]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="homepage">
      <HeroSection onFilterChange={handleFilterChange} />
      <ListingSection />
      <h1>Listings</h1>
      <div className="listings-container">
        {listings.length > 0 ? (
          listings.map((listing) => (
            <div key={listing.id} className="listing">
              <h2>{listing.title}</h2>
              <p>{listing.description}</p>
            </div>
          ))
        ) : (
          <p>No listings found for the selected filters.</p>
        )}
      </div>

      {/* Conditionally render buttons */}
      {user ? (
        <button className="myfind-button">MyFind</button>
      ) : (
        <button onClick={() => navigate("/sign-in")} className="signin-button">
          
        </button>
      )}
    </div>
  );
}

export default Homepage;
