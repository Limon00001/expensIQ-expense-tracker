/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Jun, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { FiUser } from 'react-icons/fi';

// Profile Picture Selector
const ProfilePictureUploadSelector = ({
  preview,
  removeImage,
  onImageChange,
  errors,
  loading,
}) => {
  return (
    <>
      <div className="flex justify-center mb-4">
        <div className="relative group w-18 h-18 rounded-full bg-teal-200/80 overflow-hidden">
          {preview ? (
            <>
              <img
                src={preview}
                alt="Profile Preview"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-1 right-1 bg-white rounded-full p-1 text-gray-600 hover:text-gray-800"
              />
            </>
          ) : (
            <FiUser className="w-full h-full text-teal-600 p-4" />
          )}
          <label
            htmlFor="profilePic"
            className="absolute inset-0 bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-white"
          />
        </div>
        <input
          id="profilePic"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onImageChange}
          disabled={loading}
        />
      </div>
      {errors.profilePic && (
        <p className="text-center text-sm text-red-500">{errors.profilePic}</p>
      )}
    </>
  );
};

// Export
export default ProfilePictureUploadSelector;
