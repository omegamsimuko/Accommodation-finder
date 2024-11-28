import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../componets/logo.png";
import api from "axios";
import { MdMailOutline, MdKey } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";

function SignInForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const onSubmit = async () => {
    try {
      const response = await api.post("http://localhost:3001/auth/login", { email, password });
      console.log("Login successful:", response.data); // Log entire response

      localStorage.setItem("user", JSON.stringify({
        id: response.data.id,
        role: response.data.role,
        email: response.data.email,
      }));
      localStorage.setItem("token", response.data.token);
  
       navigate('/');
       
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message); // Detailed error log
      alert("Invalid email or password. Please try again.");
    }
  };
  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        {/* Back Button */}
        <button
          className="flex items-center text-[#053359] mb-4"
          onClick={() => navigate('/')} // Navigate back to home
        >
          <FaArrowLeft className="mr-2" /> Home
        </button>

        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="logo" className="w-20 mb-4" />
          <h1 className="text-2xl font-bold">Sign in to iFind</h1>
          <p className="text-gray-600">
            Find convenient housing options tailored for you
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Input */}
          <div className="w-full">
            <div className="relative">
              <MdMailOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg pointer-events-none" />
              <div className="absolute left-10 top-1/2 transform -translate-y-1/2 w-px h-10 bg-gray-300 pointer-events-none"></div>
              <input
                id="email"
                type="email"
                className={`w-full px-12 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                {...register("email", { required: "Email is required" })}
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-2 text-left">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="w-full">
            <div className="relative">
              <MdKey className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg pointer-events-none" />
              <div className="absolute left-10 top-1/2 transform -translate-y-1/2 w-px h-10 bg-gray-300 pointer-events-none"></div>
              <input
                id="password"
                type="password"
                className={`w-full px-12 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                {...register("password", { required: "Password is required" })}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-2 text-left">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#053359] text-white py-2 rounded-lg transition duration-200"
          >
            Sign in
          </button>
        </form>

        {/* Additional Links */}
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Forgot password?{" "}
            <a href="#" className="text-babyblue-500 font-medium">
              Reset
            </a>
          </p>
        </div>
        <div className="text-center mt-6">
          <Link to="/signup" className="text-babyblue-500 font-medium">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
