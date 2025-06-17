/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Jun, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Dependencies
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Internal Dependencies
const { salt, defaultImagePath } = require('../secret');

// Model Schema
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'User name is required'],
      maxlength: [31, 'Maximum length exceeds'],
      minlength: [3, 'Name must be 3 characters long'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'User email is required'],
      unique: true,
      lowercase: true,
      validate: {
        validator: function (value) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
        },
        message: 'Please enter a valid email address',
      },
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters long'],
    },
    profileImageUrl: {
      // For String Type
      type: String,
      default: defaultImagePath,
    },
  },
  {
    timestamps: true,
  },
);

// Hash Password Before Saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, Number(salt));
  next();
});

// Compare Password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Model
const User = mongoose.model('User', userSchema);

// Model Export
module.exports = User;
