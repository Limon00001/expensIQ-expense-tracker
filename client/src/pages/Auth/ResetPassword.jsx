/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Jun, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FiEye, FiEyeOff, FiLock } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

// Internal Imports
import AuthLayout from '../../components/layouts/AuthLayout';

// ResetPassword Component
const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      navigate('/login');
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">
          Create New Password
        </h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Your new password must be different from previous used passwords
        </p>

        {/* Reset Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* New Password Field */}
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword.password ? 'text' : 'password'}
              name="password"
              placeholder="New password"
              value={formData.password}
              onChange={handleInputChange}
              disabled={loading}
              className={`w-full px-10 py-2.5 bg-white rounded-lg border border-gray-200 focus:border-teal-500 focus:outline-none ${
                loading ? 'cursor-not-allowed' : ''
              }`}
              required
            />
            <button
              type="button"
              onClick={() =>
                setShowPassword((prev) => ({
                  ...prev,
                  password: !prev.password,
                }))
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword.password ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword.confirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              disabled={loading}
              className={`w-full px-10 py-2.5 bg-white rounded-lg border border-gray-200 focus:border-teal-500 focus:outline-none ${
                loading ? 'cursor-not-allowed' : ''
              }`}
              required
            />
            <button
              type="button"
              onClick={() =>
                setShowPassword((prev) => ({
                  ...prev,
                  confirmPassword: !prev.confirmPassword,
                }))
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword.confirmPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {/* Password Requirements */}
          <div className="space-y-2 text-xs text-gray-600">
            <p>Password requirements:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Minimum 8 characters long</li>
              <li>At least one uppercase letter</li>
              <li>At least one number</li>
              <li>At least one special character</li>
            </ul>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2.5 bg-teal-600 text-white rounded-lg transition-colors ${
              loading
                ? 'cursor-not-allowed'
                : 'hover:bg-teal-700 cursor-pointer'
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-4">
                <AiOutlineLoading3Quarters className="animate-spin" />
                <span>Resetting Password...</span>
              </div>
            ) : (
              'Reset Password'
            )}
          </button>

          {/* Back to Login */}
          <p className="text-center text-sm text-gray-600">
            Remember your password?{' '}
            <Link to="/login" className="text-teal-600 hover:text-teal-700">
              Back to login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

// Export
export default ResetPassword;
