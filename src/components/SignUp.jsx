import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function SignUpForm() {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log("Form data:", data);
        alert("Form submitted!");
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center mb-2">Sign Up for iFind</h1>
                <p className="text-center text-gray-500 mb-6">
                    Discover the perfect accommodation for your next stay
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex space-x-4">
                <div className="w-1/2">
                    <input
                        {...register("firstName", { required: "First name is required" })}
                        placeholder="First Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                    {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
                </div>
                <div className="w-1/2">
                    <input
                        {...register("lastName", { required: "Last name is required" })}
                        placeholder="Last Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
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
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    
                    <input
                        {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
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
                    
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            {...register("isAgent")}
                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label className="ml-2 text-gray-700">
                            Register as Agent/Property owner
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </form>
                <div className='flex flex-row justify-center items-center mt-4'>
                <p className="text-center text-gray-500 mr-4">Already have an account?</p>
                < Link to ="/" className="text-blue-600 font-medium"> Sign In </Link>
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;
