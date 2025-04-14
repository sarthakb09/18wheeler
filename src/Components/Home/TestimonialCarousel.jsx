import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Img from '../../Assets/HomeDiff1.png';
import Img2 from '../../Assets/HomeDiff2.png';
import Img3 from '../../Assets/HomeDiff3.png';
import Img4 from '../../Assets/HomeDiff5.png';
import Img5 from '../../Assets/HomeDiff6.png'; 
import PathImg from '../../Assets/path2.svg'

const testimonialData = [
  {
    id: 1,
    name: "Driver Fatigue",
    role: "Long-haul drivers may exceed regulated hours, leading to decreased alertness and accidents.",
    quote: "This supply chain management solution has revolutionized how we track and manage our fleet. The real-time analytics have increased our efficiency by 35%.",
    image: Img
  },
  {
    id: 2,
    name: "Mechanical Failures",
    role: "Inadequate maintenance can result in brake failures or other mechanical issues, especially on challenging terrains.",
    quote: "After implementing this system, we've reduced delivery delays by 48%. The dashboard provides insights that have transformed our decision-making process.",
    image: Img2
  },
  {
    id: 3,
    name: "Blind Spots",
    role: "Smaller vehicles lingering in a truck's blind spot can lead to collisions during lane changes.",
    quote: "The predictive analytics feature has helped us anticipate bottlenecks before they occur. This has been a game-changer for our operational efficiency.",
    image: Img3
  },
  {
    id: 4,
    name: "Overloading",
    role: "Exceeding weight limits can cause rollovers, particularly during sharp turns or sudden maneuvers.",
    quote: "The safety monitoring features have significantly reduced our accident rates. I can confidently say our drivers are safer on the road now.",
    image: Img4
  },
  {
    id: 5,
    name: "Adverse Weather Conditions",
    role: "Exceeding weight limits can cause rollovers, particularly during sharp turns or sudden maneuvers.",
    quote: "From inventory management to route optimization, this solution has streamlined every aspect of our supply chain. The ROI has been remarkable.",
    image: Img5
  }
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const cardsRef = useRef([]);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const quoteRef = useRef(null);
  const contentRef = useRef(null);
  
  const calculateCardStyles = (index) => {
    const currentIndex = activeIndex;
    const totalCards = testimonialData.length;
    
    let relativeIndex = (index - currentIndex + totalCards) % totalCards;

    if (relativeIndex > totalCards / 2) {
      relativeIndex = relativeIndex - totalCards;
    }
    
    const styles = {
      zIndex: 10 - Math.abs(relativeIndex),
      opacity: relativeIndex === 0 ? 1 : 0.8 - Math.abs(relativeIndex) * 0.2,
      transform: `
        translateX(${relativeIndex === 0 ? 0 : (relativeIndex < 0 ? -12 : 12)}%) 
        translateY(${relativeIndex === 0 ? 0 : 5}%) 
        rotateY(${relativeIndex === 0 ? 0 : (relativeIndex < 0 ? -20 : 20)}deg) 
        scale(${relativeIndex === 0 ? 1 : 0.85})
      `,
    };
    
    return styles;
  };
  
  const goToNext = () => {
    const nextIndex = (activeIndex + 1) % testimonialData.length;
    animateCardTransition(nextIndex);
    animateTextTransition(nextIndex);
  };
  
  const goToPrev = () => {
    const prevIndex = (activeIndex - 1 + testimonialData.length) % testimonialData.length;
    animateCardTransition(prevIndex);
    animateTextTransition(prevIndex);
  };
  
  const animateCardTransition = (newIndex) => {
    // Immediately update the state
    setActiveIndex(newIndex);
    
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      const isActive = index === newIndex;
      
      gsap.to(card, {
        duration: 0.35,
        x: isActive ? 0 : (index > newIndex ? '15%' : '-15%'),
        y: isActive ? 0 : 30,
        rotationY: isActive ? 0 : (index > newIndex ? 25 : -25),
        scale: isActive ? 1 : 0.85,
        opacity: isActive ? 1 : 0.7,
        ease: "power1.out",
        overwrite: "auto",
      });
    });
  };
  
  const animateTextTransition = (newIndex) => {
    // Fast fade out then fade in
    gsap.to([nameRef.current, roleRef.current, quoteRef.current], {
      duration: 0.2,
      y: -5,
      opacity: 0,
      stagger: 0.03,
      ease: "power1.out",
      onComplete: () => {
        gsap.to([nameRef.current, roleRef.current, quoteRef.current], {
          duration: 0.25,
          y: 0,
          opacity: 1,
          stagger: 0.03,
          ease: "power1.out",
        });
      }
    });
  };
  
  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, testimonialData.length);
    
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      const styles = calculateCardStyles(index);
      const isActive = index === activeIndex;
      
      gsap.set(card, {
        zIndex: styles.zIndex,
        x: isActive ? 0 : (index > activeIndex ? '15%' : '-15%'),
        y: isActive ? 0 : 30,
        rotationY: isActive ? 0 : (index > activeIndex ? 25 : -25),
        scale: isActive ? 1 : 0.85,
        opacity: isActive ? 1 : 0.7,
      });
    });
    
    gsap.from([nameRef.current, roleRef.current, quoteRef.current], {
      duration: 0.7,
      y: 30,
      opacity: 0,
      stagger: 0.15,
      ease: "back.out(1.4)",
    });
  }, []);
  
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 font-['Bricolage_Grotesque']" style={{ backgroundColor: "#f8f5ee", backgroundImage: `url(${PathImg})` }}>
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
      <div className="max-w-7xl mx-auto">
       
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 xl:space-x-16">
          <div className="relative w-full lg:w-1/2 h-[350px] md:h-[450px] lg:mb-0">
            <div className="relative w-full h-full perspective-[1200px]">
              {testimonialData.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="absolute top-0 left-0 w-full h-full transform transition-all duration-700 rounded-[85px] overflow-hidden shadow-xl"
                  style={{
                    ...calculateCardStyles(index),
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s profile`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-opacity-20"></div>
                </div>
              ))}
            </div>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {testimonialData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    animateCardTransition(index);
                    animateTextTransition(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-[#5D2446] w-8' : 'bg-[#9e7d62]'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div ref={contentRef} className="w-full lg:w-1/2 text-left">
            <div className="relative rounded-[85px] md:p-10 ">
              
              <div className=" z-10">

                <div className="mt-24">
                  <h4 
                    ref={nameRef} 
                    className="text-[26px] !font-['Nunito'] text-[#5D2446]"
                  >
                    {testimonialData[activeIndex].name}
                  </h4>
                  <p 
                    ref={roleRef} 
                    className="text-[#9e7d62] !font-['Nunito']"
                  >
                    {testimonialData[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-start space-x-4 mt-8">
              <button 
                onClick={goToPrev} 
                className="w-12 h-12 rounded-full flex items-center justify-center bg-[#9e7d62] text-white transition-colors hover:bg-[#5D2446]"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={goToNext} 
                className="w-12 h-12 rounded-full flex items-center justify-center bg-[#9e7d62] text-white transition-colors hover:bg-[#5D2446]"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel; 