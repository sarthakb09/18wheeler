import React from 'react';
import BannerImg from '../../Assets/banner.png'
const HeroBanner = () => {
  return (
    <div
      className="relative w-full h-[779px] overflow-y-auto text-white"
      style={{
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/30" />

 
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[80px] text-center w-full z-10">
        {/* <h1 className="text-[64px] font-bold underline !font-['Bricolage_Grotesque']">Big Rig Crash Lawsuits</h1> */}
        <h1 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold !font-['Bricolage_Grotesque']">
        Big Rig Crash Lawsuits
        </h1>
        <p className="mt-6 text-[16px] sm:text-[20px] md:text-[32px] font-light font-nunito max-w-[90%] sm:max-w-[80%] md:max-w-[60%] mx-auto !font-['Nunito']">
        Legal Help for 18 Wheeler Accident Victims
        </p>
      </div>

     
      <div className="absolute bottom-0 left-0 w-full bg-[#ffc72c] h-[63px] text-[#1e1e1e] text-[20px] overflow-hidden flex items-center font-medium">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          <span className="px-4">18-Wheeler Accidents Reason: Driver Fatigue / Negligence / 50% Longer Braking Distance</span>
          <span className="px-4">18-Wheeler Accidents Reason: Driver Fatigue / Negligence / 50% Longer Braking Distance</span>
          <span className="px-4">18-Wheeler Accidents Reason: Driver Fatigue / Negligence / 50% Longer Braking Distance</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default HeroBanner;
