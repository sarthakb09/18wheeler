import React, { useState, useRef, useEffect } from 'react';
import VectorImg from '../../Assets/Vector.png';
import Image from '../../Assets/homepage4.png';
import Image2 from '../../Assets/homepage4(2).png'
import Img from '../../Assets/au4.png';
import Img2 from '../../Assets/au4(2).png';
import Img3 from '../../Assets/au4(3).png';

const AboutUs4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [deviceType, setDeviceType] = useState('desktop');
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [scrollEndReached, setScrollEndReached] = useState(false);
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const isScrollingRef = useRef(false);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDeviceType('mobile');
      } else if (width < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
 
    const handleWheel = (e) => {
      if (!sliderRef.current || isScrollingRef.current) return;
      
      e.preventDefault();
      
      const delta = e.deltaY;
      const currentScroll = sliderRef.current.scrollLeft;
      const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      
      if (currentScroll >= maxScroll - 10 && delta > 0 && scrollEndReached) {
        setScrollEndReached(false);
        const nextSection = sectionRef.current.nextElementSibling;
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
      
      isScrollingRef.current = true;
      
      sliderRef.current.scrollBy({
        left: delta,
        top: 0,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 200);
    };
    
    const preventParentScroll = (e) => {
      if (!scrollEndReached) {
        e.preventDefault();
      }
    };
    
    if (sliderRef.current) {
      sliderRef.current.addEventListener('wheel', handleWheel, { passive: false });
      sliderRef.current.addEventListener('touchmove', preventParentScroll, { passive: false });
    }
    
    if (sectionRef.current) {
      sectionRef.current.addEventListener('wheel', (e) => {
        if (e.target.closest('.slider-container') && !scrollEndReached) {
          e.preventDefault();
        }
      }, { passive: false });
    }
    
    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener('wheel', handleWheel);
        sliderRef.current.removeEventListener('touchmove', preventParentScroll);
      }
      
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('wheel', preventParentScroll);
      }
    };
  }, [scrollEndReached]);

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${scrollProgress}%`;
    }
  }, [scrollProgress]);

  const slides = [
    {
      image: Img,
      smallImage: VectorImg,
      title: "Severe Injuries",
      description: "We are committed to supporting individuals and families impacted by 18-wheeler accidents, ensuring they have access to top legal representation."
    },
    {
      image: Img2,
      smallImage: VectorImg,
      title: "Economic Impact",
      description: "We strive to educate the public on 18-wheeler safety, legal rights, and preventative measures to reduce accidents."
    },
    {
      image: Img3,
      smallImage: VectorImg,
      title: "Environmental consequences",
      description: "By driving change through legal action and awareness, we work toward a future with stricter safety regulations and fewer trucking accidents."
    }
  ];

  const getSlideWidth = () => {
    if (!sliderRef.current) return 0;

    switch (deviceType) {
      case 'mobile':
        return sliderRef.current.offsetWidth;
      case 'tablet':
        return sliderRef.current.offsetWidth * 0.85;
      case 'desktop':
      default:
        return sliderRef.current.offsetWidth * 0.7;
    }
  };

  const scrollToSlide = (index) => {
    setCurrentSlide(index);
    if (sliderRef.current) {
      const slideWidth = getSlideWidth();
      const scrollPosition = index * slideWidth;
      sliderRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = (e) => {
    if (sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollLeft;
      const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      const progress = (scrollPosition / maxScroll) * 100;
      setScrollProgress(progress);

      // If we're near the end of scrolling
      if (scrollPosition >= maxScroll - 10) {
        setScrollEndReached(true);
      } else {
        setScrollEndReached(false);
      }

      const slideWidth = getSlideWidth();
      const newIndex = Math.round(scrollPosition / slideWidth);

      if (newIndex !== currentSlide && newIndex >= 0 && newIndex < slides.length) {
        setCurrentSlide(newIndex);
      }
      
      if (scrollPosition > 10) {
        setShowScrollHint(false);
      }
    }
  };

  const renderScrollHint = () => (
    <div className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-opacity duration-500 ${showScrollHint ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex items-center bg-black bg-opacity-70 text-white px-3 py-2 rounded-lg">
        <div className="mr-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="whitespace-nowrap text-sm">Scroll horizontally</span>
      </div>
    </div>
  );

  const renderProgressBar = () => (
    <div className="flex items-center w-full mt-6 relative">
      <div className="flex-grow h-1 bg-gray-200 relative overflow-hidden mr-4">
        <div 
          ref={progressBarRef}
          className="h-full bg-[#5D2446] transition-all duration-300 absolute top-0 left-0"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <button 
          onClick={() => scrollToSlide(Math.max(0, currentSlide - 1))}
          className={`flex items-center justify-center w-8 h-8 rounded-full bg-[#5D2446] text-white transition-opacity duration-300 ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-[#4A1C37]'}`}
          disabled={currentSlide === 0}
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button 
          onClick={() => scrollToSlide(Math.min(slides.length - 1, currentSlide + 1))}
          className={`flex items-center justify-center w-8 h-8 rounded-full bg-[#5D2446] text-white transition-opacity duration-300 ${currentSlide === slides.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-[#4A1C37]'}`}
          disabled={currentSlide === slides.length - 1}
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );

  const renderScrollEndHint = () => (
    <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${scrollEndReached ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex flex-col items-center bg-black bg-opacity-70 text-white px-3 py-2 rounded-lg">
        <span className="text-sm">Continue scrolling down</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );


  const renderMobileView = () => (
    <div ref={sectionRef} className="flex flex-col p-4 relative overflow-hidden">
      <div className="text-center mb-8">
        <div style={{ color: "#5D2446" }} className="text-[22px] sm:text-[28px] font-medium font-['Bricolage_Grotesque'] inline-block w-full mb-4 mt-2">
          OUR MISSION
        </div>
        <div className="text-[#6d6d6e] text-base !font-['Nunito'] !font-normal text-[16px] sm:text-[18px] leading-[24px]">
          At Big Rig Lawsuit, our mission is to provide essential resources, legal guidance, and advocacy.
        </div>
      </div>

      <div className="relative w-full mx-auto slider-container">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ scrollSnapType: 'x mandatory' }}
          onScroll={handleScroll}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-[100%] w-full snap-start flex-shrink-0"
              style={{ scrollSnapAlign: 'start' }}
              onClick={() => scrollToSlide(index)}
            >
              <div className="flex flex-col items-center cursor-pointer px-2">
                <div className="mb-4 w-full">
                  <img
                    src={slide.image}
                    alt={`Mission ${index + 1}`}
                    className="w-full h-[300px] sm:h-[220px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full text-center">
                  <div className="flex flex-col items-center">
                    <p className="!font-['Nunito'] text-[15px] sm:text-[16px] w-full max-w-[250px] sm:max-w-[340px] mx-auto break-words" style={{ color: '#2C3C58' }}>
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {renderScrollHint()}
        {renderScrollEndHint()}
      </div>

      {renderProgressBar()}
      
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-[#5D2446]' : 'bg-gray-300'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );

  
  const renderTabletView = () => (
    <div ref={sectionRef} className="flex flex-col p-5 relative overflow-hidden">
      <div className="text-center mb-10">
        <div style={{ color: "#5D2446" }} className="text-[32px] font-medium font-['Bricolage_Grotesque'] inline-block w-full mb-6">
          OUR MISSION
        </div>
        <div className="text-[#6d6d6e] text-lg !font-['Nunito'] !font-normal text-[22px] leading-[30px]">
          At Big Rig Lawsuit, our mission is to provide essential resources, legal guidance, and advocacy.
        </div>
      </div>

      <div className="relative max-w-full mx-auto w-[100%] slider-container">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ scrollSnapType: 'x mandatory' }}
          onScroll={handleScroll}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-[85%] px-3 snap-start flex-shrink-0"
              style={{ scrollSnapAlign: 'start' }}
              onClick={() => scrollToSlide(index)}
            >
              <div className="flex flex-col items-center cursor-pointer">
                <div className="mb-5 w-full">
                  <img
                    src={slide.image}
                    alt={`Mission ${index + 1}`}
                    className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full text-center">
                  <div className="flex flex-col items-center">
                    <p className="!font-['Nunito'] text-[16px] w-full max-w-[500px] mx-auto mt-4" style={{ color: '#2C3C58' }}>
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {renderScrollHint()}
        {renderScrollEndHint()}
      </div>

      {renderProgressBar()}
      
      <div className="flex justify-center mt-6 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-3.5 h-3.5 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-[#5D2446]' : 'bg-gray-300'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );

 
  const renderDesktopView = () => (
    <div ref={sectionRef} className="flex flex-col min-h-screen p-5 relative overflow-hidden">
      <div className="text-center mb-12">
        <div style={{ color: "#5D2446" }} className="text-[38px] font-medium font-['Bricolage_Grotesque'] inline-block w-full md:w-[819px] mb-8">
          OUR MISSION
        </div>
        <div className="text-[#6d6d6e] text-lg !font-['Nunito'] !font-normal text-[26px] leading-[36px]">
          At Big Rig Lawsuit, our mission is to provide essential resources, legal guidance, and advocacy.
        </div>
      </div>

      <div className="relative max-w-full mx-auto w-[100%] slider-container">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ scrollSnapType: 'x mandatory' }}
          onScroll={handleScroll}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-[70%] px-4 snap-start flex-shrink-0"
              style={{ scrollSnapAlign: 'start' }}
              onClick={() => scrollToSlide(index)}
            >
              <div className="flex items-center gap-12 cursor-pointer">
                <div>
                  <img
                    src={slide.image}
                    alt={`Mission ${index + 1}`}
                    className="w-[500px] h-[80vh] object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-1/2 text-left">
                  <div className="flex flex-col items-start">
                    <p className="!font-['Nunito'] text-gray-600 w-[250px]" style={{ color: '#2C3C58' }}>
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {renderScrollHint()}
        {renderScrollEndHint()}
      </div>
      
      {renderProgressBar()}
    </div>
  );

 
  switch (deviceType) {
    case 'mobile':
      return renderMobileView();
    case 'tablet':
      return renderTabletView();
    case 'desktop':
    default:
      return renderDesktopView();
  }
};

export default AboutUs4;
