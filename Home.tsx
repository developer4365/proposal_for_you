import React from 'react';
import ProposalCard from '@/components/ProposalCard';
import PrankReveal from '@/components/PrankReveal';
import FloatingHearts from '@/components/FloatingHearts';

const Home: React.FC = () => {
  const [showPrank, setShowPrank] = React.useState(false);

  const handleYesClick = () => {
    setShowPrank(true);
  };

  const handleCloseClick = () => {
    setShowPrank(false);
  };

  return (
    <div className="font-poppins bg-gray-50 min-h-screen">
      <div className={`flex flex-col items-center justify-center min-h-screen p-4 relative overflow-hidden ${showPrank ? 'blur-sm' : ''}`}>
        <FloatingHearts />
        <ProposalCard onYesClick={handleYesClick} />
      </div>
      
      {showPrank && <PrankReveal onClose={handleCloseClick} />}
    </div>
  );
};

export default Home;
