/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Jun, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Dependencies
const mongoose = require('mongoose');

// Internal Dependencies
const { dbUrl } = require('../secret');

// Database Configuration
const dbConfig = async (options = {}) => {
  try {
    await mongoose.connect(dbUrl, options);
    console.log(`Database setup successful`);

    mongoose.connection.on('error', (err) =>
      console.error(`Database connection error ${err}`),
    );
  } catch (error) {
    console.log(`Database setup failed ${error}`);
    process.exit(1);
  }
};

// Module Export
module.exports = dbConfig;
