/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Jun, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FiEye, FiEyeOff, FiLock, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// Internal Imports
import Input from '../../components/Inputs/Input';
import AuthLayout from '../../components/layouts/AuthLayout';
import { validateEmail } from '../../utils/helpers';

// Login Component
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ email: '', password: '' });
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Form Submission Handler
  const handleSubmit = (e) => {
    // Prevent Form Submission
    e.preventDefault();

    // Form Validation
    let hasError = false;
    const newError = { email: '', password: '' };

    // Email Validation
    if (!validateEmail(formData.email)) {
      newError.email = 'Please enter a valid email address.';
      hasError = true;
    }

    // Password Validation
    if (!formData.password) {
      newError.password = 'Password is required.';
      hasError = true;
    }

    setError(newError);

    // Return if there are errors
    if (hasError) return;

    // TODO: proceed with API call
    setLoading(true);
  };

  // Input Change Handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to log in
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input Field */}
          <div className="relative">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              icon={<FiMail />}
              value={formData.email}
              onChange={handleInputChange}
              disabled={loading}
            />
            {error.email && (
              <p className="text-sm text-red-500 mt-1">{error.email}</p>
            )}
          </div>

          {/* Password Input Field with Password Visibility Toggle */}
          <div>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                icon={<FiLock />}
                value={formData.password}
                onChange={handleInputChange}
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {error.password && (
              <p className="text-sm text-red-500 mt-1">{error.password}</p>
            )}
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between text-xs">
            <label
              className={`flex items-center space-x-2 ${
                loading ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <input
                type="checkbox"
                disabled={loading}
                className={`w-4 h-4 accent-teal-600 rounded ${
                  loading ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}
              />
              <span className="text-gray-600">Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              disabled={loading}
              className={`text-teal-600 hover:text-teal-700  ${
                loading ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors ${
              loading ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-4">
                <AiOutlineLoading3Quarters className="animate-spin" />
                <span>Signing in ...</span>
              </div>
            ) : (
              'Sign in'
            )}
          </button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link
              to="/sign-up"
              disabled={loading}
              className={`text-teal-600 hover:text-teal-700 ${
                loading ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

// Export
export default Login;
