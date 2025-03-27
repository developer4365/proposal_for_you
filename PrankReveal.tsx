import React from 'react';

interface PrankRevealProps {
  onClose: () => void;
}

const PrankReveal: React.FC<PrankRevealProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md m-4 flex flex-col items-center animate-bounce">
        {/* Prank Message */}
        <div className="text-center mb-4">
          <h2 className="font-['Dancing_Script'] text-2xl md:text-3xl font-bold text-[#FFC300] mb-4">
            "ULLU BNAYA BDA MJA AAYA"
          </h2>
          <p className="text-xl font-semibold text-gray-800">HAPPY APRIL FOOL (1 APRIL)</p>
          <p className="text-lg text-gray-700 mt-1">GUSSA MTT HONA</p>
        </div>
        
        {/* Emoji */}
        <div className="text-7xl my-6">😂</div>
        
        {/* Close Button */}
        <button 
          className="mt-4 bg-[#FFC300] hover:bg-yellow-400 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
          onClick={onClose}
        >
          Got me! 😄
        </button>
      </div>
    </div>
  );
};

export default PrankReveal;
