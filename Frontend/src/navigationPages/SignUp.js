import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../componets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import api from "axios";
import { FaArrowLeft } from "react-icons/fa";

function SignUpForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [selectedRole, setSelectedRole] = useState(null); // Track the selected role
    const navigate = useNavigate();

    const onSubmit = async () => {
        // Set boolean values for isOwner and isAgent
        const isOwner = selectedRole === "propertyOwner";
        const isAgent = selectedRole === "agent";

        try {
            const response = await api.post("http://localhost:3001/auth/signup", {
                firstName,
                lastName,
                email,
                password,
                isOwner,
                isAgent
            });
            console.log("Signup successful:", response.data);

            localStorage.setItem("user", JSON.stringify({
                id: response.data.id,
                role: response.data.role,
                email: response.data.email,
              }));
              localStorage.setItem("token", response.data.token);
          
            navigate('/');
            
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred, please try again.");
        }
    };

    const handleCheckboxChange = (role) => {
        setSelectedRole(role === selectedRole ? null : role); // Toggle the role selection
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md relative">
                {/* Back Button */}
                <button
                    className="flex items-center text-[#053359] mb-4"
                    onClick={() => navigate('/')} // Navigate back to home
                >
                    <FaArrowLeft className="mr-2" /> 
                </button>

                <div className="flex flex-col items-center mb-6">
                    <img src={logo} alt="logo" className="w-30 h-15" />
                    <h1 className="text-2xl font-bold text-center mb-2">Sign Up for iFind</h1>
                    <p className="mb-2 -mt-2 text-center">
                        Discover the perfect accommodation for your next stay
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <input
                                {...register("firstName", { required: "First name is required" })}
                                placeholder="First Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                            {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
                        </div>
                        <div className="w-1/2">
                            <input
                                {...register("lastName", { required: "Last name is required" })}
                                placeholder="Last Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                onChange={(e) => setLastname(e.target.value)}
                            />
                            {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
                        </div>
                    </div>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Invalid email" }
                        })}
                        placeholder="Email address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                    <input
                        {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                    <input
                        {...register("confirmPassword", {
                            required: "Please confirm your password",
                            validate: (value) => value === watch("password") || "Passwords do not match"
                        })}
                        type="password"
                        placeholder="Confirm password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                    {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}

                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                {...register("isAgent")}
                                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                checked={selectedRole === "agent"}
                                onChange={() => handleCheckboxChange("agent")}
                            />
                            <label className="ml-2 text-gray-700">Register as Agent</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                {...register("isPropertyOwner")}
                                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                checked={selectedRole === "propertyOwner"}
                                onChange={() => handleCheckboxChange("propertyOwner")}
                            />
                            <label className="ml-2 text-gray-700">Register as Property Owner</label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-[#053359] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </form>
                <div className="flex flex-row justify-center items-center mt-4">
                    <p className="text-center text-gray-500 mr-4">Already have an account?</p>
                    <Link to="/" className="text-skyblue-600 font-medium"> Sign In </Link>
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;
