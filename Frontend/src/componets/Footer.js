import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Brand Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-3">Accommodation Finder</h2>
            <p className="text-gray-400">
              Your one-stop solution for finding affordable hostels near Chancellor College in Zomba.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="hover:text-white">
                <a href="/listings">View Listings</a>
              </li>
              <li className="hover:text-white">
                <a href="/about">About Us</a>
              </li>
              <li className="hover:text-white">
                <a href="/contact">Contact Us</a>
              </li>
              <li className="hover:text-white">
                <a href="/faq">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
            <p className="text-gray-400 mb-4">
              Chancellor College, Zomba, Malawi<br />
              Email: <a href="mailto:info@accommodationfinder.com" className="text-white">info@accommodationfinder.com</a>
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-8">
          © 2024 Accommodation Finder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
