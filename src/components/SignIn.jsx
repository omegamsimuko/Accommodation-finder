import React,{useState} from "react";
import { useForm } from "react-hook-form";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import api from "../api/axios";
import { MdMailOutline, MdKey } from "react-icons/md";

function SignInForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
// function SignInForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await api.post("http://localhost:3000/auth/login", { email, password });
      console.log("Signup successful:", response.data);
  }
    // try {
    //   const response = await fetch("http://localhost3000/auth/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (response.ok) {
    //     const result = await response.json();
    //     console.log("Login successful:", result);
        
    //   } else {
    //     console.error("Login failed");
    //     alert("Invalid credentials, please try again.");
    //   }
    catch (error) {
      console.error("Error:", error);
      alert("An error occurred, please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <div className="flex flex-col items-center mb-6">
          <img src={logo}alt="logo" classname="w-20 mb-4"/>
          <h1 className="text-2xl font-bold">Sign in to iFind</h1>
          <p className="text-gray-600">
            find convenient housing options tailored for you
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="relative w-full">
            <MdMailOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg pointer-events-none" />

            <div className="absolute left-10 top-1/2 transform -translate-y-1/2 w-px h-10 bg-gray-300 pointer-events-none"></div>

            <input
              id="email"
              type="email"
              className="w-full px-12 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              {...register("email", { required: "Email is required" })}
              placeholder="Email Address"
            />

            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="relative w-full">
            <MdKey className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg pointer-events-none" />

            <div className="absolute left-10 top-1/2 transform -translate-y-1/2 w-px h-10 bg-gray-300 pointer-events-none"></div>

            <input
              id="password"
              type="password"
              className="w-full px-12 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-deepBlue text-white py-2 rounded-lg  transition duration-200"
          >
            Sign in
          </button>
          <div className="text-center mt-4">
            <p className="text-gray-600">
              forgot password?{" "}
              <a href="#" className="text-babyblue-500 font-medium">
                Reset
              </a>
            </p>
          </div>
        </form>
        <div className="text-center mt-6">
          <Link to="SignUp" className="text-babyblue-500 font-medium">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
