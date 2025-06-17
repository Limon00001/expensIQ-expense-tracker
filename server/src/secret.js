/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Jun, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Dependencies
const dotenv = require('dotenv');

// Environment Configuration
dotenv.config();

// Configurations
const port = process.env.PORT || 5000;
// const dbUrl = process.env.MONGO_ATLAS_URL || process.env.MONGO_COMPASS_URL;
const dbUrl = process.env.MONGO_COMPASS_URL;
const salt = process.env.SALT;
const defaultImagePath =
  process.env.DEFAULT_USER_IMAGE_PATH || 'public/images/users/default.png';
const jwtAccessKey = process.env.JWT_ACCESS_KEY;
const smtpUser = process.env.SMTP_USERNAME || '';
const smtpPassword = process.env.SMTP_PASSWORD || '';
const clientSite = process.env.CLIENT_SITE;

// Module Export
module.exports = {
  port,
  dbUrl,
  salt,
  defaultImagePath,
  jwtAccessKey,
  smtpUser,
  smtpPassword,
  clientSite,
};
