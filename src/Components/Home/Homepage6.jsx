import React, { useState, useEffect, useRef } from "react";
import img from '../../Assets/hp6.png';
import img2 from '../../Assets/hp62.png';
import img3 from '../../Assets/hp63.png';

const Homepage6 = () => {
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
      title: "Drivers",
      description: "For negligent actions such as speeding or driving under the influence.",
      image: img,
      isLarge: true
    },
    {
      id: 2,
      title: "Companies",
      description: "For inadequate training, maintenance, or supervision of drivers.",
      image: img2,
      isLarge: false
    },
    {
      id: 3,
      title: "Manufacturers",
      description: "For defective vehicle parts or design flaws causing accidents.",
      image: img3,
      isLarge: false
    }
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden py-14 px-4 sm:px-6 lg:px-8">
      <div className="absolute right-[-250px] top-1/2 transform -translate-y-1/2 rounded-full bg-[rgba(199,183,158,0.7)] opacity-40 w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] z-0" />
      <div className="relative z-10 text-center mb-16">
        <h1 style={{ color: '#5D2446' }} className="text-[28px] sm:text-[32px] md:text-[38px] font-medium !font-['Bricolage_Grotesque'] mb-6">
          Determining Liability
        </h1>
        <p className="!font-['Nunito'] text-base sm:text-lg text-[#6d6d6e] max-w-[700px] mx-auto">
          The consequences of heavy vehicle accidents are profound
        </p>
      </div>

      
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 w-full max-w-[1200px]">
       
        <div
          ref={setCardRef(0)}
          className="relative rounded-[40px] sm:rounded-[70px] lg:rounded-[90px] w-full sm:w-[90%] lg:w-[473px] h-[700px] sm:h-[800px] lg:h-[875px] overflow-hidden text-white text-[26px] sm:text-[30px] font-bold cursor-pointer transition-transform duration-300 hover:scale-105"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
          }}
          onMouseEnter={() => !isMobile && setHoveredCard(1)}
          onMouseLeave={() => !isMobile && setHoveredCard(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(27,24,24,0)] to-[rgba(27,24,24,0.7)]" />
          <div className="relative !font-['Nunito'] z-10 p-6 sm:p-8 mt-[500px] sm:mt-[580px] lg:mt-[600px]">
            <div>{cards[0].title}</div>
            <div 
              className={`text-[18px] sm:text-[20px] font-medium mt-3 sm:mt-4 leading-7 sm:leading-8 w-full sm:w-[90%] transition-opacity duration-300 delay-150 ${
                (isMobile && visibleCards.includes(1)) || (!isMobile && hoveredCard === 1)
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
            >
              {cards[0].description}
            </div>
          </div>
        </div>

        
        <div className="flex flex-col gap-10 w-full sm:w-[90%] lg:w-auto">
         
          <div
            ref={setCardRef(1)}
            className="relative rounded-[40px] sm:rounded-[70px] lg:rounded-[90px] w-full h-[400px] sm:h-[420px] lg:w-[600px] overflow-hidden text-white text-[26px] sm:text-[30px] font-bold cursor-pointer transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage: `url(${img2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
            onMouseEnter={() => !isMobile && setHoveredCard(2)}
            onMouseLeave={() => !isMobile && setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(27,24,24,0)] to-[rgba(27,24,24,0.7)]" />
            <div className="relative !font-['Nunito'] z-10 p-6 sm:p-8 mt-[180px] sm:mt-[200px]">
              <div>{cards[1].title}</div>
              <div 
                className={`text-[18px] sm:text-[20px] font-medium mt-3 sm:mt-4 leading-7 sm:leading-8 w-full transition-opacity duration-300 delay-150 ${
                  (isMobile && visibleCards.includes(2)) || (!isMobile && hoveredCard === 2)
                    ? 'opacity-100'
                    : 'opacity-0'
                }`}
              >
                {cards[1].description}
              </div>
            </div>
          </div>

         
          <div
            ref={setCardRef(2)}
            className="relative rounded-[40px] sm:rounded-[70px] lg:rounded-[90px] w-full h-[400px] sm:h-[420px] lg:w-[600px] overflow-hidden text-white text-[26px] sm:text-[30px] font-bold cursor-pointer transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage: `url(${img3})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
            onMouseEnter={() => !isMobile && setHoveredCard(3)}
            onMouseLeave={() => !isMobile && setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(27,24,24,0)] to-[rgba(27,24,24,0.7)]" />
            <div className="relative !font-['Nunito'] z-10 p-6 sm:p-8 mt-[180px] sm:mt-[200px]">
              <div>{cards[2].title}</div>
              <div 
                className={`text-[18px] sm:text-[20px] font-medium mt-3 sm:mt-4 leading-7 sm:leading-8 w-full transition-opacity duration-300 delay-150 ${
                  (isMobile && visibleCards.includes(3)) || (!isMobile && hoveredCard === 3)
                    ? 'opacity-100'
                    : 'opacity-0'
                }`}
              >
                {cards[2].description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage6;
