/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Jun, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FiEye, FiEyeOff, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// Internal Imports
import AuthLayout from '../../components/layouts/AuthLayout';

// SignUp Component
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      setLoading(true);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Enter your details to sign up
        </p>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              disabled={loading}
              className={`w-full px-10 py-2.5 bg-white rounded-lg border border-gray-200 focus:border-teal-500 focus:outline-none ${
                loading ? 'cursor-not-allowed' : ''
              }`}
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              disabled={loading}
              className={`w-full px-10 py-2.5 bg-white rounded-lg border border-gray-200 focus:border-teal-500 focus:outline-none ${
                loading ? 'cursor-not-allowed' : ''
              }`}
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              disabled={loading}
              className={`w-full px-10 py-2.5 bg-white rounded-lg border border-gray-200 focus:border-teal-500 focus:outline-none ${
                loading ? 'cursor-not-allowed' : ''
              }`}
              required
              value={formData.password}
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type={showConfirm ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              disabled={loading}
              className={`w-full px-10 py-2.5 bg-white rounded-lg border border-gray-200 focus:border-teal-500 focus:outline-none ${
                loading ? 'cursor-not-allowed' : ''
              }`}
              required
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={() => setShowConfirm((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              {showConfirm ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {/* Sign Up Button */}
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
                <span>Signing up ...</span>
              </div>
            ) : (
              'Sign Up'
            )}
          </button>

          {/* Redirect to Login */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              to="/login"
              disabled={loading}
              className={`text-teal-600 hover:text-teal-700 ${
                loading ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

// Export
export default SignUp;
