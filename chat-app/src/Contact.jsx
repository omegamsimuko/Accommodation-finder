import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  // Send email function using EmailJS
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent form reload
  
    emailjs
      .sendForm(
        'service_h5x7djp',  // Your EmailJS service ID
        'template_7rhzf4d',  // Your EmailJS template ID
        form.current,        // Form reference
        {
          publicKey: 'aKwU9LC2Lu1UiQ2uk',  // Your public key (do not expose private key)
        }
      )
      .then(
        (response) => {
          console.log('SUCCESS:', response); // Log response from EmailJS
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error); // Log error from EmailJS
          alert('Message sending failed. Please try again.');
        }
      );
  };
  
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="from_name" className="block text-sm font-semibold text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="from_name"          // Ensure this matches the template variable
            name="from_name"        // Ensure this matches the template variable
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="user_email" className="block text-sm font-semibold text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"       // Ensure this matches the template variable
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Recipient Name Field */}
        <div>
          <label htmlFor="to_name" className="block text-sm font-semibold text-gray-700">
            Recipient Name
          </label>
          <input
            type="text"
            id="to_name"            // Ensure this matches the template variable
            name="to_name"          // Ensure this matches the template variable
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"          // Ensure this matches the template variable
            rows="5"
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 mt-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
