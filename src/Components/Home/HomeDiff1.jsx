
import React, { useState } from 'react';
import Img from '../../Assets/HomeDiff1.png';
import Img2 from '../../Assets/HomeDiff2.png';
import Img3 from '../../Assets/HomeDiff3.png';
import Img4 from '../../Assets/HomeDiff5.png';
import Img5 from '../../Assets/HomeDiff6.png'; 
import PathImg from '../../Assets/path2.svg'

const slides = [
  {
    image: Img,
    title: "Driver Fatigue",
    description: "Long-haul drivers may exceed regulated hours, leading to decreased alertness and accidents."
  },
  {
    image: Img2,
    title: "Mechanical Failures",
    description: "Inadequate maintenance can result in brake failures or other mechanical issues, especially on challenging terrains."
  },
  {
    image: Img3,
    title: "Blind Spots",
    description: "Smaller vehicles lingering in a truck's blind spot can lead to collisions during lane changes."
  },
  {
    image: Img4,
    title: "Overloading",
    description: "Exceeding weight limits can cause rollovers, particularly during sharp turns or sudden maneuvers."
  },
  {
    image: Img5,
    title: "Adverse Weather Conditions",
    description: "Exceeding weight limits can cause rollovers, particularly during sharp turns or sudden maneuvers."
  },
];

const HomeDiff1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className='relative pt-[50px]'>
      <div className="text-center mb-12">
        <div
          style={{ color: "#5D2446" }}
          className="text-[28px] md:text-[38px] font-medium font-['Bricolage_Grotesque'] inline-block w-full md:w-[819px] mb-8"
        >
          Common Causes of Heavy Vehicle Accidents in Australia
        </div>
        <div className="text-[#6d6d6e] text-lg !font-['Nunito'] !font-normal text-[20px] md:text-[26px] leading-[30px] md:leading-[36px]">
          Accidents involving heavy vehicles often result in severe injuries or fatalities.
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-[65vh] md:h-[85vh] lg:h-[85vh] font-sans">
       
        <div className="w-full md:w-1/2 h-[250px] md:h-full relative">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full"
          >
            →
          </button>
        </div>

       
        <div className="w-full md:w-1/2 h-[55%] md:h-full bg-[#9e7d62] text-white relative px-6 md:px-16 py-10 flex flex-col justify-center">
          <div className="z-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 !font-['Bricolage_Grotesque'">{slides[currentSlide].title}</h2>
            <p className="text-base md:text-lg leading-relaxed !font-['Nunito']">
              {slides[currentSlide].description}
            </p>
          </div>

         
          <div className="absolute bottom-6 right-6 flex space-x-2 z-20">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full bg-white cursor-pointer transition-opacity duration-200 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-70'
                }`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>

          
          <div className="absolute inset-0 opacity-50 z-0">
            <img
              src={PathImg}
              alt="Tire Track"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDiff1;
