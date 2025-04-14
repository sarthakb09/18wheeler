import React from 'react';

const Road = () => {
  return (
    <div className="relative w-full py-20 bg-[#121D2A] flex flex-col items-center justify-center">
      {/* Road graphic and divider */}
      <div className="w-full max-w-4xl relative mb-16 opacity-40">
        <div className="relative">
          {/* Vector road graphic */}
          <img 
            src="/vector_road.svg" 
            alt="Road path" 
            className="w-full"
            style={{ stroke: '#454B53', strokeWidth: '180px' }}
          />
          
          {/* Dashed divider */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <img 
              src="/divider_road.svg" 
              alt="Road divider" 
              className="w-full"
              style={{ stroke: '#E3D58A', strokeWidth: '5px', strokeDasharray: '20 20' }}
            />
          </div>
        </div>
      </div>

      {/* Heading */}
      <h2 
        className="text-[26px] font-extrabold text-[#FFC72C] text-center mb-6"
        style={{ 
          fontFamily: 'Nunito, sans-serif',
          lineHeight: '2em'
        }}
      >
        We're here to help you navigate the road ahead!
      </h2>

      {/* Subtext */}
      <p 
        className="text-[32px] text-[#9CA4AD] text-center max-w-4xl"
        style={{ 
          fontFamily: 'Bricolage Grotesque, sans-serif',
          fontWeight: 400,
          lineHeight: '1.3125em'
        }}
      >
        Whether you're seeking legal guidance, safety tips, or the latest news on trucking laws
      </p>
    </div>
  );
};

export default Road; 