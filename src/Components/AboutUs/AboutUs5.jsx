
import React from "react";
import img from '../../Assets/au5.png';
import img2 from '../../Assets/au52.png';
import img3 from '../../Assets/au53.png';

const Homepage6 = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute right-[-250px] top-1/2 transform -translate-y-1/2 rounded-full bg-[rgba(199,183,158,0.7)] opacity-40 w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] z-0" />
      <div className="relative z-10 text-center mb-16">
        <h1 style={{ color: '#5D2446' }} className="text-[28px] sm:text-[32px] md:text-[38px] font-medium !font-['Bricolage_Grotesque'] mb-6">
        OUR COMMITMENT
        </h1>
      </div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 w-full max-w-[1200px]">
        <div
          className="relative rounded-[40px] sm:rounded-[70px] lg:rounded-[90px] w-full sm:w-[90%] lg:w-[473px] h-[700px] sm:h-[800px] lg:h-[875px] overflow-hidden text-white text-[26px] sm:text-[30px] font-bold"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(27,24,24,0)] to-[rgba(27,24,24,0.7)]" />
          <div className="relative z-2 px-[25px] py-0 bottom-[25px] sm:p-8 mt-[500px] sm:mt-[580px] lg:mt-[600px] text-left">
            <div className="!font-['Bricolage_Grotesque']">OUR COMMITMENT</div>
            <div className="text-[18px] sm:text-[20px] font-medium mt-3 sm:mt-4 leading-7 sm:leading-8 w-full sm:w-[90%] !font-['Nunito']">
            At Big Rig Lawsuit, our commitment goes beyond legal representation; we advocate, educate, and fight for a future free from the devastating impact of these accidents.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 w-full sm:w-[90%] lg:w-auto"> 
          <div
            className="relative rounded-[40px] sm:rounded-[70px] lg:rounded-[90px] w-full h-[400px] sm:h-[420px] lg:w-[600px] overflow-hidden text-white text-[26px] sm:text-[30px] font-bold"
            style={{
              backgroundImage: `url(${img2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(27,24,24,0)] to-[rgba(27,24,24,0.7)]" />
            <div className="relative z-10 px-[25px] py-0 bottom-[20px] sm:p-8 mt-[180px] sm:mt-[200px] text-left">
              <div className="!font-['Bricolage_Grotesque']">Compensation </div>
              <div className="text-[18px] sm:text-[20px] font-medium mt-3 sm:mt-4 leading-7 sm:leading-8 w-full !font-['Nunito']">
              Our trusted legal partners have secured millions in compensation, providing families with the financial support they need to cover medical bills, lost income, and other hardships. 
              </div>
            </div>
          </div>
          <div
            className="relative rounded-[40px] sm:rounded-[70px] lg:rounded-[90px] w-full h-[400px] sm:h-[420px] lg:w-[600px] overflow-hidden text-white text-[26px] sm:text-[30px] font-bold"
            style={{
              backgroundImage: `url(${img3})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(27,24,24,0)] to-[rgba(27,24,24,0.7)]" />
            <div className="relative z-10 px-[25px] py-0 bottom-[20px] mt-[180px] sm:mt-[200px] text-left">
              <div className="!font-['Bricolage_Grotesque']">Awareness</div>
              <div className="text-[18px] sm:text-[20px] font-medium mt-3 sm:mt-4 leading-7 sm:leading-8 w-full !font-['Nunito']">
              We deliver essential insights on big rig hazards, workplace safety regulations, and legal rights, equipping individuals with the knowledge to safeguard themselves and their loved ones. 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage6;
