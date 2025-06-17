/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Jun, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Dependencies
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const { rateLimit } = require('express-rate-limit');
const cors = require('cors');

// Internal Dependencies
const authRouter = require('./routes/auth.route');
const seedRouter = require('./routes/seed.route');
const { clientError, serverError } = require('./middlewares/errors.middleware');
const { clientSite } = require('./secret');

// App Initialize
const app = express();

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  limit: 10, // Limit each IP to 5 requests per `window` (here, per 1 minute)
  message: 'Too many attempts. Please try again later.',
});

// Middlewares
app.use(limiter);
app.use(
  cors({
    origin: clientSite,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
);
app.use(morgan('dev'));
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));

// Routes
app.use('/api/v1/seed', seedRouter);
app.use('/api/v1/auth', authRouter);

// Client error handler
app.use(clientError);

// Server error handler
app.use(serverError);

// Module Export
module.exports = app;
