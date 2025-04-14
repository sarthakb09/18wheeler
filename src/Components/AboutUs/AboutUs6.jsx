import React from "react";
import Img from '../../Assets/hp8.png'

const AboutUs6 = () => {
    return (
        <div style={{
            backgroundImage: `url(${Img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }} className="flex flex-col items-center justify-center text-white bg-black py-16 px-4 min-h-screen rounded-[30px] mb-[30px]">
            <h1 className="text-[49px] font-medium font-bricolage text-center mb-4 !font-['Bricolage_Grotesque']">
                Take Action Today for Safer Roads in Australia
            </h1>
            <p className="text-[28px] font-medium text-center max-w-2xl mb-8 !font-['Nunito']">
                If you or a loved one has been affected by an 18-wheeler accident, we are here to fight for your rights and justice.
            </p>
            <div className="bg-[#ffc72c] text-[#1b1818] rounded-xl shadow-md px-8 py-2.5 font-bold text-lg !font-['Nunito']">
                Claim Form
            </div>
        </div>
    );
};

export default AboutUs6;
