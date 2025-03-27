import React from 'react';

const FloatingHearts: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style jsx>{`
        .heart {
          position: absolute;
          animation: floatHeart 6s ease-in-out infinite;
          opacity: 0.6;
        }
        @keyframes floatHeart {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
      
      <div className="heart text-4xl" style={{ top: '10%', left: '10%' }}>❤️</div>
      <div className="heart text-4xl" style={{ top: '20%', left: '80%', animationDelay: '1s' }}>❤️</div>
      <div className="heart text-4xl" style={{ top: '70%', left: '15%', animationDelay: '2s' }}>❤️</div>
      <div className="heart text-4xl" style={{ top: '60%', left: '85%', animationDelay: '3s' }}>❤️</div>
      <div className="heart text-4xl" style={{ top: '85%', left: '45%', animationDelay: '4s' }}>❤️</div>
    </div>
  );
};

export default FloatingHearts;
