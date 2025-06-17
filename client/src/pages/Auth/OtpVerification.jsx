/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Jun, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { useEffect, useRef, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

// Internal Imports
import AuthLayout from '../../components/layouts/AuthLayout';

// OtpVerification Component
const OtpVerification = () => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(60);

  const navigate = useNavigate();

  // Handle OTP Input
  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle Backspace
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      navigate('/reset-password');
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  // Countdown Timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">
          Enter Verification Code
        </h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          We've sent a verification code to your email
        </p>

        {/* OTP Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* OTP Input Fields */}
          <div className="flex justify-between gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                disabled={loading}
                className={`w-12 h-12 text-center text-xl font-semibold rounded-lg border border-gray-200 focus:border-teal-500 focus:outline-none ${
                  loading ? 'cursor-not-allowed bg-gray-50' : 'bg-white'
                }`}
                required
              />
            ))}
          </div>

          {/* Timer and Resend */}
          <div className="text-center">
            {timer > 0 ? (
              <p className="text-sm text-gray-600">
                Resend code in{' '}
                <span className="text-teal-600 font-semibold">{timer}s</span>
              </p>
            ) : (
              <button
                type="button"
                onClick={() => setTimer(60)}
                disabled={loading}
                className={`text-sm text-teal-600 hover:text-teal-700 ${
                  loading ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                Resend Code
              </button>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || otp.includes('')}
            className={`w-full py-2.5 bg-teal-600 text-white rounded-lg transition-colors ${
              loading || otp.includes('')
                ? 'cursor-not-allowed bg-teal-400'
                : 'hover:bg-teal-700'
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-4">
                <AiOutlineLoading3Quarters className="animate-spin" />
                <span>Verifying...</span>
              </div>
            ) : (
              'Verify'
            )}
          </button>

          {/* Back Link */}
          <p className="text-center text-sm text-gray-600">
            Didn't receive the code?{' '}
            <Link
              to="/forgot-password"
              className="text-teal-600 hover:text-teal-700"
            >
              Try another email
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

// Export
export default OtpVerification;
