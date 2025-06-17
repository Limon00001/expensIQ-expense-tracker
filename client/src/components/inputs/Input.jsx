/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Jun, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

// Input Component
const Input = ({
  type = 'text',
  name,
  placeholder,
  icon,
  value,
  onChange,
  disabled = false,
  required = true,
}) => {
  const [show, setShow] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (show ? 'text' : 'password') : type;

  return (
    <div className="relative">
      {icon && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </span>
      )}
      <input
        type={inputType}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-10 py-2.5 bg-white rounded-lg border border-gray-200 focus:border-teal-500 focus:outline-none ${
          disabled ? 'cursor-not-allowed opacity-50' : ''
        }`}
        required={required}
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          disabled={disabled}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          {show ? <FiEyeOff /> : <FiEye />}
        </button>
      )}
    </div>
  );
};

// Export
export default Input;
