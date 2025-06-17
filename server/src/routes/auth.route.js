/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Jun, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Dependencies
const express = require('express');

// Internal Dependencies
const {
  registerUser,
  loginUser,
  getUserInfo,
} = require('../controllers/auth.controller');
const { protect } = require('../middlewares/auth.middleware');

// Initialize
const authRouter = express.Router();

// Routes
authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);
authRouter.get('/get-user', protect, getUserInfo);

// Module Export
module.exports = authRouter;
