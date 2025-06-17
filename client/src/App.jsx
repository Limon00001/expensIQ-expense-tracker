/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Jun, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from 'react-router-dom';

// Internal Imports
import ForgotPassword from './pages/Auth/ForgotPassword';
import Login from './pages/Auth/Login';
import OtpVerification from './pages/Auth/OtpVerification';
import ResetPassword from './pages/Auth/ResetPassword';
import SignUp from './pages/Auth/SignUp';
import Expense from './pages/Dashboard/Expense';
import Home from './pages/Dashboard/Home';
import Income from './pages/Dashboard/Income';

const App = () => {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={true} />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/sign-up" exact element={<SignUp />} />
        <Route path="/dashboard" exact element={<Home />} />
        <Route path="/income" exact element={<Income />} />
        <Route path="/expense" exact element={<Expense />} />
        <Route path="/forgot-password" exact element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<OtpVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

// Export
export default App;

// Root Component
const Root = () => {
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem('token');

  // If authenticated, redirect to dashboard
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};
