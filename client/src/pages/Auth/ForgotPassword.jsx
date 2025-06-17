/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Jun, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// Internal Imports
import AuthLayout from '../../components/layouts/AuthLayout';

// ForgotPassword Component
const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  // Form Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Reset Password</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Enter your email and we'll send you instructions to reset your
          password
        </p>

        {/* Reset Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input Field */}
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className={`w-full px-10 py-2.5 bg-white rounded-lg border border-gray-200 focus:border-teal-500 focus:outline-none ${
                loading ? 'cursor-not-allowed' : ''
              }`}
              required
            />
          </div>

          {/* Submit Button */}
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
                <span>Sending Instructions...</span>
              </div>
            ) : (
              'Send Instructions'
            )}
          </button>

          {/* Back to Login Link */}
          <p className="text-center text-sm text-gray-600">
            Remember your password?{' '}
            <Link
              to="/login"
              disabled={loading}
              className={`text-teal-600 hover:text-teal-700 ${
                loading ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              Back to login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

// Export
export default ForgotPassword;
