import React, { useState, useEffect, useRef } from "react";
import Img from '../../Assets/homepage4.png';
import Img2 from '../../Assets/hp5(2).png';
import Img3 from '../../Assets/hp5(3).png';
import Img4 from '../../Assets/hp5.png';

const Homepage5 = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const cardRefs = useRef([]);


  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640); 
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setVisibleCards([]);
      return;
    }

    const observers = [];
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, 
    };

    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => [...prev.filter(id => id !== index + 1), index + 1]);
          } else {
            setVisibleCards(prev => prev.filter(id => id !== index + 1));
          }
        });
      }, observerOptions);
      
      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [isMobile]);

  const setCardRef = (index) => (el) => {
    cardRefs.current[index] = el;
  };

  const cards = [
    {
      id: 1,
      title: "Personal Injury Claims",
      description: "Victims can claim for medical expenses, lost wages, and pain and suffering.",
      image: Img4,
      height: "517px"
    },
    {
      id: 2,
      title: "Wrongful Death Claims",
      description: "Families can seek compensation for loss of support, funeral expenses, and emotional distress.",
      image: Img2,
      height: "454px"
    },
    {
      id: 3,
      title: "Workers Compensation",
      description: "Employees injured at work can receive benefits for medical treatment and lost wages.",
      image: Img3,
      height: "454px"
    }
  ];

  return (
    <div className="relative flex flex-col items-center gap-10 py-12 px-4 sm:px-6 lg:px-8">
      <div
        style={{ color: "#5D2446" }}
        className="text-[28px] sm:text-[32px] md:text-[38px] font-medium font-['Bricolage_Grotesque'] text-center w-full max-w-[819px] mb-6"
      >
        Legal Rights and Pursuit of Justice for Accident Victims
      </div>

      <div className="font-['Nunito'] text-[#6d6d6e] text-base sm:text-lg text-center max-w-[800px]">
        Victims of heavy vehicle accidents in Australia have legal avenues to seek compensation
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 sm:gap-10 mt-10">
        {cards.map((card, index) => (
          <div
            key={card.id}
            ref={setCardRef(index)}
            className={`relative rounded-[40px] sm:rounded-[85px] w-full sm:w-[360px] md:w-[408px] h-[450px] sm:h-[${card.height}] text-[22px] sm:text-[28px] text-white cursor-pointer transition-all duration-300 hover:scale-105`}
            onMouseEnter={() => !isMobile && setHoveredCard(card.id)}
            onMouseLeave={() => !isMobile && setHoveredCard(null)}
          >
            <img
              className="rounded-[40px] sm:rounded-[85px] w-full h-full object-cover"
              alt={card.title}
              src={card.image}
            />
            <div className="absolute inset-0 rounded-[40px] sm:rounded-[85px] bg-gradient-to-b from-transparent to-[#121d2a] " />
            <b className="absolute !font-['Nunito'] bottom-[110px] left-1/2 transform -translate-x-1/2 text-center">
              {card.title}
            </b>
            <div 
              className={`absolute !font-['Nunito'] bottom-4 left-1/2 transform -translate-x-1/2 text-[16px] sm:text-[20px] text-[#f9f9f9] text-center px-4 sm:px-0 w-full sm:w-[362px] transition-opacity duration-300 delay-150 ${
                (isMobile && visibleCards.includes(card.id)) || (!isMobile && hoveredCard === card.id) 
                  ? 'opacity-100' 
                  : 'opacity-0'
              }`}
            >
              {card.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage5;
