import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const BASE_URL = "http://localhost:4000";

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "anurag@gmail.com",
    password: "abcd",
  });

  // serverError will hold the error message from the server
  const [serverError, setServerError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear the server error as soon as the user starts typing in either field
    if (serverError) {
      setServerError("");
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);

      if (data.error) {
        // If there's an error, set the serverError message
        setServerError(data.error);
      } else {
        // On success, navigate to home or any other protected route
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
      setServerError("Something went wrong.");
    }
  };

  // If there's an error, we'll add "input-error" class to both fields
  const hasError = Boolean(serverError);

  return (
    <div
      className="min-h-screen flex items-center justify-center 
  bg-[url('/field-bright-yellow-rapeseed-spring.jpg')] bg-cover bg-center bg-no-repeat px-2"
    >
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-green-400 rounded-full"></div>
            <h2 className="text-2xl font-semibold text-gray-800">CloudHub</h2>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Welcome Back!
        </h3>
        <p className="text-gray-500 text-center text-sm mb-6">
          Sign in with your work email and get started in seconds
        </p>

        {/* Google & Apple Buttons */}
        <button className="w-full cursor-pointer flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 mb-3 hover:bg-gray-100 transition">
          <FcGoogle className="text-2xl" />
          <span className="text-gray-700 font-medium">Sign in with Google</span>
        </button>

        <div className="flex items-center justify-center mb-4 text-gray-400 text-sm">
          <span className="border-b w-full mr-2"></span>
          <span>Or</span>
          <span className="border-b w-full ml-2"></span>
        </div>

        {/* Login Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
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

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 ${
                hasError
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-green-400"
              }`}
            />
            {/* Eye icon */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3  text-gray-500"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
            {hasError && (
              <p className="text-red-500 text-sm mt-1">{serverError}</p>
            )}

            <div className="text-right mt-1">
              <a href="#" className="text-sm text-green-600 hover:underline">
                Forgot Password
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-green-600 font-medium hover:underline"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
