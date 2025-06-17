/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Jun, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Configurations
const UPLOAD_USER_DIR = 'public/images/users';
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const FILE_TYPES = ['png', 'jpg', 'jpeg'];
const BUFFER_FILE_TYPES = ['image/png', 'image/jpg', 'image/jpeg'];

// Module exports
module.exports = {
  UPLOAD_USER_DIR,
  MAX_FILE_SIZE,
  FILE_TYPES,
  BUFFER_FILE_TYPES,
};
