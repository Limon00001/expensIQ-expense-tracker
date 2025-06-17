/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Jun, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Email Validation Function
const validateEmail = (email) => {
  // Regular expression for a basic email validation.
  // This regex checks for:
  // ^               - start of the string
  // [^\s@]+         - one or more characters that are not whitespace or '@' (local part)
  // @               - literal '@'
  // [^\s@]+         - one or more characters that are not whitespace or '@' (domain name)
  // \.              - literal '.'
  // [^\s@]+         - one or more characters that are not whitespace or '@' (top-level domain)
  // $               - end of the string
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Password Validation Function
const validatePassword = (password) => {
  const requirements = [
    /.{8,}/, // Minimum 8 characters
    /[A-Z]/, // At least one uppercase letter
    /\d/, // At least one number
    /[!@#$%^&*(),.?":{}|<>]/, // At least one special character
  ];
  return requirements.every((pattern) => pattern.test(password));
};

// Export
export { validateEmail, validatePassword };
