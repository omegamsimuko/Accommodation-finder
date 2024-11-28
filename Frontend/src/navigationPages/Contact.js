import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [userEmail, setUserEmail] = useState(""); // State to store the email

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Retrieve email from localStorage and set it
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email) {
      setUserEmail(storedUser.email); // Set email from localStorage
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_h5x7djp',
        'template_7rhzf4d',
        form.current,
        {
          publicKey: 'aKwU9LC2Lu1UiQ2uk',
        }
      )
      .then(
        (response) => {
          console.log('SUCCESS:', response);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Message sending failed. Please try again.');
        }
      );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-5 py-10 mt-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Contact</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="from_name" className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="user_email" className="block text-gray-700 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                placeholder="Your Email"
                value={userEmail} // Set the email value from state
                readOnly // Make the email field read-only
                required
              />
            </div>

            {/* Recipient Name Field */}
            <div>
              <label htmlFor="to_name" className="block text-gray-700 font-medium mb-2">
                Recipient Email
              </label>
              <input
                type="text"
                id="to_name"
                name="to_name"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                placeholder="Recipient Name"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex space-x-4 justify-center">
              <button
                type="submit"
                className="px-6 py-2 font-semibold text-white rounded-full bg-[#053359] hover:bg-indigo-700"
              >
                Send Message
              </button>
              <button
                type="button"
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400"
                onClick={() => form.current.reset()}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
