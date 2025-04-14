import React from "react";
import Img from '../../Assets/hp7.png'
import PathImg from '../../Assets/path.svg'
import Img2 from '../../Assets/hp7(2).png';

const HomePage7 = () => {
  return (
    <div className="py-12 px-6 md:px-20 font-sans" style={{ backgroundImage: `url(${PathImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={{ color: "#5D2446" }} className="text-[38px] font-medium font-['Bricolage_Grotesque'] inline-block w-full md:w-[819px] mb-8">
        Regulatory Measures for Safer Roads
      </div>
      <p className="!font-['Nunito'] text-center text-sm md:text-base text-gray-600 mb-10">
        Australia enforces stringent regulations to enhance road safety
      </p>
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="w-full md:w-1/2">
          <img 
            src={Img}
            alt="Road Safety Measures" 
            className="w-full h-[280px] object-cover rounded-lg shadow-lg !rounded-[50px]"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3 style={{color:'#318631'}} className="!font-['Nunito'] text-lg md:text-xl font-semibold text-gray-800 mb-3">
          Heavy Vehicle National Law (HVNL)
          </h3>
          <p className="!font-['Nunito'] text-gray-600 text-sm md:text-base">
          This law standardizes safety and compliance requirements across most Australian states and territories, focusing on fatigue management, vehicle standards, and load restraints.
          </p>
        </div>
      </div>  
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="w-full md:w-1/2">
          <img 
            src={Img2}
            alt="Traffic Signs and Signals" 
            className="w-full h-[280px] object-cover rounded-lg shadow-lg !rounded-[50px]"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3 style={{color:'#318631'}} className="!font-['Nunito'] text-lg md:text-xl font-semibold text-gray-800 mb-3">
          Chain of Responsibility (CoR)
          </h3>
          <p className="!font-['Nunito'] text-gray-600 text-sm md:text-base">
          Under the HVNL, all parties in the supply chain, including employers and schedulers, are held accountable for safety breaches. For instance, in a notable case, a trucking administrator's conviction was overturned on appeal due to procedural issues, highlighting the complexities of enforcing CoR provisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage7;