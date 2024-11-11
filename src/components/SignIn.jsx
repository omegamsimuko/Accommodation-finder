import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { MdMailOutline, MdKey } from "react-icons/md";

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <div className="text-center mb-6">
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
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign in
          </button>
          <div className="text-center mt-4">
            <p className="text-gray-600">
              forgot password?{" "}
              <a href="#" className="text-blue-600 font-medium">
                Reset
              </a>
            </p>
          </div>
        </form>
        <div className="text-center mt-6">
          <Link to="SignUp" className="text-blue-600 font-medium">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SignInForm;
