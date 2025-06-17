/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Jun, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Dependencies
const createError = require('http-errors');

// Internal Dependencies
const data = require('../data');
const User = require('../models/User');

// Seed Controller
const seedUser = async (req, res, next) => {
  try {
    // Delete all existing users
    await User.deleteMany({});

    // Create new user
    const newUser = await User.insertMany(data.users);

    // Response
    return res.status(201).json(newUser);
  } catch (error) {
    console.error('Error during user seeding:', error);
    next(
      createError(
        500,
        'We encountered a technical issue while processing your registration. Please try again later.',
      ),
    );
  }
};

// Module exports
module.exports = { seedUser };
