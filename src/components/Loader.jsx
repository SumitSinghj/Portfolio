import React from 'react';

const Loader = ({ theme }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${
      theme === 'dark' ? 'bg-[#0f172a]' : 'bg-[#f0f4ff]'
    }`}>
      <div className="relative">
        <div className={`w-16 h-16 rounded-full border-4 ${
          theme === 'dark' ? 'border-white/20' : 'border-gray-900/20'
        }`}></div>
        <div className={`absolute top-0 left-0 w-16 h-16 rounded-full border-4 ${
          theme === 'dark' ? 'border-white border-t-transparent' : 'border-gray-900 border-t-transparent'
        } animate-spin`}></div>
      </div>
    </div>
  );
};

export default Loader;