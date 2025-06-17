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
import Input from '../../components/Inputs/Input';
import ProfilePictureUploadSelector from '../../components/inputs/ProfilePictureUploadSelector';
import AuthLayout from '../../components/layouts/AuthLayout';
import { validateEmail, validatePassword } from '../../utils/helpers';

// SignUp Component
const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    profilePic: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setErrors((prev) => ({ ...prev, profilePic: '' }));
    if (file) {
      setProfilePic(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Remove selected image
  const removeImage = () => {
    setProfilePic(null);
    setPreview(null);
    setErrors((prev) => ({ ...prev, profilePic: '' }));
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {
      profilePic: '',
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    let hasError = false;

    if (!profilePic) {
      validationErrors.profilePic = 'Profile picture is required.';
      hasError = true;
    }
    if (!formData.name.trim()) {
      validationErrors.name = 'Full name is required.';
      hasError = true;
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required.';
      hasError = true;
    } else if (!validateEmail(formData.email)) {
      validationErrors.email = 'Please enter a valid email.';
      hasError = true;
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required.';
      hasError = true;
    } else if (!validatePassword(formData.password)) {
      validationErrors.password = 'Password must meet requirements.';
      hasError = true;
    }
    if (!formData.confirmPassword.trim()) {
      validationErrors.confirmPassword = 'Please confirm password.';
      hasError = true;
    } else if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match.';
      hasError = true;
    }

    setErrors(validationErrors);
    if (hasError) return;

    setLoading(true);
    try {
      // TODO: submit form
    } catch (err) {
      // handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-auto mt-4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-1 mb-6">
          Enter your details to sign up
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture Upload */}
          <ProfilePictureUploadSelector
            preview={preview}
            removeImage={removeImage}
            onImageChange={handleImageChange}
            errors={errors}
            loading={loading}
          />

          {/* Name Field */}
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              icon={<FiUser />}
              value={formData.name}
              onChange={handleInputChange}
              disabled={loading}
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              icon={<FiMail />}
              value={formData.email}
              onChange={handleInputChange}
              disabled={loading}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
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
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <div className="relative">
              <Input
                type={showConfirm ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                icon={<FiLock />}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirm ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-red-500 mt-1">
                {errors.confirmPassword}
              </p>
            )}
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
              <div className="flex items-center justify-center gap-2">
                <AiOutlineLoading3Quarters className="animate-spin" />
                <span>Signing up...</span>
              </div>
            ) : (
              'Sign Up'
            )}
          </button>

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

export default SignUp;
