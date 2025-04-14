import React from "react";
import Image from '../../Assets/hp81.png'

const Homepage8 = () => {
  return (
    <div style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }} className="flex flex-col items-center justify-center text-white bg-black py-16 px-4 min-h-screen rounded-[30px] mb-[30px]">
      <h1 className="text-[49px] font-medium !font-['Bricolage_Grotesque'] text-center mb-4">
        Contact us
      </h1>
      <p className="text-[28px] !font-['Nunito'] font-medium text-center max-w-2xl mb-8">
        for a truck accident attorney to explore your options
      </p>
      <div className="bg-[#ffc72c] !font-['Nunito'] text-[#1b1818] rounded-xl shadow-md px-8 py-2.5 font-bold text-lg">
        Claim Form
      </div>
    </div>
  );
};

export default Homepage8;
