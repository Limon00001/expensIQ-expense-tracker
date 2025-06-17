/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 17 Jun, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { LuTrendingUpDown, LuWallet } from 'react-icons/lu';

// Internal Imports
import banner from '../../assets/images/banner.png';

// AuthLayout
const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section - Form Content */}
      <div className="w-screen h-screen md:w-[60vw] px-8 lg:px-12 pt-8 pb-12 bg-teal-100/90 relative">
        {/* Logo/Brand Section */}
        <div className="flex items-center gap-2 mb-8">
          <LuWallet className="text-2xl text-teal-600" />
          <h2 className="text-xl font-semibold text-black">ExpensIQ</h2>
        </div>

        {/* Main Content */}
        <div className="h-[calc(100vh-120px)] flex flex-col justify-center">
          {children}
        </div>
      </div>

      {/* Right Section - Decorative Elements */}
      <div className="hidden md:block w-[40vw] h-screen bg-teal-100/80 overflow-hidden p-8 relative">
        {/* Decorative Shapes */}
        <div className="absolute w-48 h-48 rounded-[40px] -top-7 -left-5 bg-teal-600/70 animate-pulse" />
        <div className="absolute w-48 h-56 rounded-[40px] border-[20px] border-teal-800/30 top-[30%] -right-10" />
        <div className="absolute w-48 h-48 rounded-[40px] bg-teal-600 -bottom-7 -left-5 animate-pulse" />

        {/* Stats Cards */}
        <div className="relative z-10 space-y-4">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track your income & expenses"
            value="430,000"
            color="bg-teal-600"
          />
        </div>

        {/* Banner Image */}
        <img
          src={banner}
          alt="Financial Management"
          className="w-64 lg:w-[90%] absolute bottom-10 left-1/2 -translate-x-1/2 drop-shadow-2xl transition-transform hover:scale-105"
        />

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-teal-100/50" />
      </div>
    </div>
  );
};

// Stats Card Component
const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg shadow-teal-400/10 border border-gray-200/50 hover:shadow-xl transition-shadow duration-300">
      <div
        className={`w-12 h-12 flex items-center justify-center text-2xl text-white ${color} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-xs text-gray-600 font-medium mb-1">{label}</h6>
        <span className="text-[20px] font-semibold">${value}</span>
      </div>
    </div>
  );
};

// Export
export default AuthLayout;
