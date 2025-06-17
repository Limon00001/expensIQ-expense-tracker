/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 18 Jun, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Dependencies
const createError = require('http-errors');
const jwt = require('jsonwebtoken');

// Internal Dependencies
const User = require('../models/User');
const { jwtAccessKey } = require('../secret');

// Protected Middleware
const protect = async (req, res, next) => {
  // Get Token
  const token = req.headers.authorization?.split(' ')[1];

  // Check Token
  if (!token) {
    return next(createError(401, 'Unauthorized'));
  }

  try {
    // Verify Token
    const decoded = jwt.verify(token, jwtAccessKey);

    // Check Token
    if (!decoded) {
      return next(createError(401, 'Unauthorized'));
    }

    // Get User
    const user = await User.findOne({ email: decoded.email });

    // Check User
    if (!user) {
      return next(createError(401, 'Unauthorized'));
    }

    // Set User
    req.user = user.toObject({ versionKey: false, exclude: ['password'] });

    // Next
    next();
  } catch (error) {
    return next(createError(401, 'Unauthorized'));
  }
};

// Module exports
module.exports = { protect };
