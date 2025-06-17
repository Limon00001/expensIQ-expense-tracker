/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Jun, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Dependencies
const createError = require('http-errors');

// Internal Dependencies
const { successResponse } = require('./response.controllers');
const { createToken } = require('../helpers/token.helper');
const { EMAIL_VERIFICATION_TEMPLATE } = require('../configs/constants');
const { clientSite, jwtAccessKey } = require('../secret');
const { sendEmail } = require('../helpers/email.helper');
const User = require('../models/User');

// Register
const registerUser = async (req, res, next) => {
  const { fullName, email, password, profileImageUrl } = req.body;

  // Validation
  if (!fullName || !email || !password) {
    return next(createError(400, 'All fields are required'));
  }

  try {
    // Check the user email
    const existingUser = await User.findOne({ email });

    // Check if user already exists
    if (existingUser) {
      return next(createError(400, 'Email already in use'));
    }

    // Create Token
    const token = createToken({ fullName, email }, jwtAccessKey, '10m');

    // Prepare Email
    const emailData = {
      email,
      subject: 'Account Verification Email',
      html: EMAIL_VERIFICATION_TEMPLATE.replace('{{token}}', token).replace(
        '{{clientSite}}',
        clientSite,
      ),
    };

    // Send Email
    try {
      await sendEmail(emailData);
    } catch (error) {
      return next(createError(500, 'Failed to send email'));
    }

    // Create new user
    const newUser = await User.create({
      fullName,
      email,
      password,
      profileImageUrl,
    });

    // Delete password
    newUser.password = undefined;

    // Response
    return successResponse(res, {
      statusCode: 200,
      message: `Please check your email ${email}`,
      payload: {
        id: newUser._id,
        user: newUser,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Login
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return next(createError(400, 'All fields are required'));
  }

  try {
    // Find user
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return next(createError(400, 'This email is not registered'));
    }

    // Compare Password
    const isMatch = await user.comparePassword(password);

    // Check Password
    if (!isMatch) {
      return next(createError(400, 'Invalid credentials'));
    }

    // Create Token
    const token = createToken({ email }, jwtAccessKey, '10m');

    // Response
    return successResponse(res, {
      message: 'Login successful',
      payload: {
        id: user._id,
        user,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get User
const getUserInfo = (req, res, next) => {
  const user = req.user;

  // Validation
  if (!user) {
    return next(createError(401, 'Unauthorized'));
  }

  // Response
  return successResponse(res, {
    message: 'User info fetched successfully',
    payload: {
      user,
    },
  });
};

// Module exports
module.exports = { registerUser, loginUser, getUserInfo };
