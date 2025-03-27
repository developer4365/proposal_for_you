import React, { useState, useRef, useEffect } from 'react';

interface ProposalCardProps {
  onYesClick: () => void;
}

const ProposalCard: React.FC<ProposalCardProps> = ({ onYesClick }) => {
  const [attempts, setAttempts] = useState(0);
  const [noButtonText, setNoButtonText] = useState("No");
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getRandomPosition = () => {
    if (containerRef.current && noButtonRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const btnRect = noButtonRef.current.getBoundingClientRect();
      
      // Calculate max positions while keeping button in viewport
      const maxX = containerRect.width - btnRect.width - 20;
      const maxY = containerRect.height - btnRect.height - 20;
      
      // Generate random position
      const randomX = Math.max(20, Math.random() * maxX);
      const randomY = Math.max(20, Math.random() * maxY);
      
      return { x: randomX, y: randomY };
    }
    return { x: 0, y: 0 };
  };

  const moveNoButton = () => {
    if (noButtonRef.current) {
      const { x, y } = getRandomPosition();
      
      noButtonRef.current.style.position = 'absolute';
      noButtonRef.current.style.left = `${x}px`;
      noButtonRef.current.style.top = `${y}px`;
      
      // Update attempts and button text
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      
      if (newAttempts >= 10) {
        setNoButtonText("Just give up! 😝");
      } else if (newAttempts >= 5) {
        setNoButtonText("Still trying? 😏");
      } else if (newAttempts >= 3) {
        setNoButtonText("Nice try! 😉");
      }
    }
  };

  // Set initial position for No button
  useEffect(() => {
    moveNoButton();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={containerRef} className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md flex flex-col items-center transform transition-all duration-300 hover:shadow-xl relative z-10">
      {/* Heading with decorative elements */}
      <div className="w-full flex justify-center mb-4">
        <div className="text-[#FF6B8B] text-2xl">❤️</div>
        <h1 className="font-['Dancing_Script'] text-[#FF6B8B] text-2xl md:text-3xl font-bold text-center mx-2">Special Message</h1>
        <div className="text-[#FF6B8B] text-2xl">❤️</div>
      </div>
      
      {/* Couple Image */}
      <div className="w-full mb-6 rounded-lg overflow-hidden shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1539489870484-2af526f2907b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
          alt="Loving couple" 
          className="w-full h-52 object-cover"
        />
      </div>
      
      {/* Proposal Message */}
      <div className="text-center mb-8">
        <p className="font-['Dancing_Script'] text-gray-700 text-xl md:text-2xl leading-relaxed">
          "Like mithai like kulfi <br />
          Rasmalai hai pishta barfi <br />
          Sardiya vich garmiya lagti <br />
          Jbb tu mere sath chlti. <br />
          <span className="text-[#FF6B8B] font-bold">My dear I love you"</span>
        </p>
        <h2 className="font-['Dancing_Script'] text-2xl md:text-3xl font-bold text-[#7F5AF0] mt-4">Will you marry me?</h2>
      </div>
      
      {/* Response Buttons */}
      <div className="flex justify-center space-x-8 w-full mt-2 relative" style={{ height: "60px" }}>
        <button 
          className="bg-[#FF6B8B] hover:bg-pink-500 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 transform hover:scale-105"
          onClick={onYesClick}
        >
          Yes
        </button>
        <button 
          ref={noButtonRef}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-8 rounded-full shadow-md transition duration-300"
          onMouseOver={moveNoButton}
          onClick={moveNoButton}
          onTouchStart={(e) => {
            e.preventDefault();
            moveNoButton();
          }}
        >
          {noButtonText}
        </button>
      </div>
    </div>
  );
};

export default ProposalCard;
