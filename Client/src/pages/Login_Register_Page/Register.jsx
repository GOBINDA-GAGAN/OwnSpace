import { useContext, useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register,serverError } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "Anurag Singh",
    email: "anurag@gmail.com",
    password: "abcd",
  });

  const [isSuccess, setIsSuccess] = useState(false);

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear the server error as soon as the user starts typing in Email
    if (name === "email" && serverError) {
      setServerError("");
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSuccess(false); // reset success if any

    register(formData);

    // try {
    //   const response = await fetch(`${BASE_URL}/auth/user/register`, {
    //     method: "POST",
    //     body: JSON.stringify(formData),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   const data = await response.json();

    //   if (data.error) {
    //     // Show error below the email field (e.g., "Email already exists")
    //     setServerError(data.error);
    //   } else {
    //     // Registration success
    //     setIsSuccess(true);
    //     setTimeout(() => {
    //       navigate("/");
    //     }, 2000);
    //   }
    // } catch (error) {
    //   // In case fetch fails
    //   console.error("Error:", error);
    //   setServerError("Something went wrong. Please try again.");
    // }
  };
  // If there's an error, we'll add "input-error" class to both fields
  const hasError = Boolean(serverError);

  return (
    <div
      className="min-h-screen flex items-center justify-center 
  bg-[url('/field-bright-yellow-rapeseed-spring.jpg')] bg-cover bg-center bg-no-repeat px-2"
    >
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-green-400 rounded-full"></div>
            <h2 className="text-2xl font-semibold text-gray-800">CloudHub</h2>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Create Your Account
        </h3>
        <p className="text-gray-500 text-center text-sm mb-6">
          Sign up with your work email and get started in seconds
        </p>

        {/* Google & Apple Buttons */}
        <button className="w-full cursor-pointer flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 mb-3 hover:bg-gray-100 transition">
          <FcGoogle className="text-2xl" />
          <span className="text-gray-700 font-medium">Sign up with Google</span>
        </button>

        <div className="flex items-center justify-center mb-4 text-gray-400 text-sm">
          <span className="border-b w-full mr-2"></span>
          <span>Or</span>
          <span className="border-b w-full ml-2"></span>
        </div>

        {/* Register Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2`}
            />
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ex: name@company.com"
              required
              className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 ${
                hasError
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-green-400"
              }`}
            />
            {hasError && (
              <p className="text-red-500 text-sm mt-1">{serverError}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2`}
            />
            {/* Eye icon */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition"
          >
            {isSuccess ? "Registration Successful" : "Register"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
