
import React from 'react';
import Img from '../../Assets/aboutus.png'

const AboutUs = () => {
  return (
    <div
      className="relative w-full h-[779px] md:h-[779px] sm:h-auto overflow-y-auto text-white"
      style={{
        backgroundImage: `url(${Img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/30" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[80px] w-full z-10 px-4 text-center">
        <h1 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold !font-['Bricolage_Grotesque']">
          About Us
        </h1>
        <p className="mt-6 text-[16px] sm:text-[20px] md:text-[32px] font-light font-nunito max-w-[90%] sm:max-w-[80%] md:max-w-[60%] mx-auto !font-['Nunito']">
          We are dedicated to standing with individuals and families impacted by 18-wheeler accidents. With a deep understanding of trucking laws and personal injury claims, our experienced legal team fights for the justice and compensation you deserve.
        </p>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
