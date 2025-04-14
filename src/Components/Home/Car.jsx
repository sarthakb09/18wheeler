import React, { useState, useEffect, useRef } from 'react';
import './Car.css';
import { useNavigate } from 'react-router-dom';
import Img from '../../Assets/Final 1.svg';
import Road from '../../Assets/unionRoad2.png';

const Car = () => {
  const [offset, setOffset] = useState(500);
  const carSectionRef = useRef(null);
  const hasScrolled = useRef(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    

    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {

    const handleMouseMove = (e) => {
      if (hasScrolled.current) return;
      if (isMobile) return; 
      
      const carSection = carSectionRef.current;
      if (!carSection) return;

      const rect = carSection.getBoundingClientRect();


      if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
        const docWidth = document.body.clientWidth;
        const mouseX = e.pageX;
        
      
        const positionRatio = mouseX / docWidth;
        

        const newOffset = 500 - (positionRatio * 400);
        
        setOffset(newOffset);
      }
    };


    const handleScroll = () => {
      const carSection = carSectionRef.current;
      if (!carSection) return;

      const rect = carSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const scrollProgress = 1 - (rect.top / viewportHeight);
        
        const effectProgress = Math.max(0.1, Math.min(0.9, scrollProgress));
        
        if (!isMobile) {
          const newOffset = 500 - (effectProgress * 400);
          setOffset(newOffset);
        }
        
        hasScrolled.current = true;
        setTimeout(() => {
          hasScrolled.current = false;
        }, 1000); 
      }
    };


    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    

    handleScroll();


    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  const handleNavigation = (to) => {
    console.log('handleNavigation called with path:', to);
   
      window.scrollTo(0, 0);
      navigate(to);
 
  };

  return (
    <div className="car-wrapper" style={{
      position: 'relative',
      backgroundImage: `url(${Road})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      padding: '2rem 0',
      marginBottom: '2rem',
      overflow: 'hidden'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '2rem',
        position: 'relative',
        zIndex: 5
      }}>
        <h2 style={{
          fontSize: isMobile ? '24px' : '32px',
          fontWeight: 'bold',
          marginBottom: '1rem',
          fontFamily: 'Bricolage Grotesque, sans-serif',
          color:'#ffc72c'
        }}>
          INJURED IN A 12-WHEELER ACCIDENT? YOU DESERVE JUSTICE
        </h2>
        <p style={{
          fontSize: isMobile ? '16px' : '18px',
          color: '#6d6d6e',
          maxWidth: '800px',
          margin: '0 auto',
          fontFamily: 'Nunito, sans-serif'
        }}>
          We fight for truck accident victims. Get the compensation you deserve. no upfront fees, just results.
        </p>
        <div className="mt-6 flex justify-center" style={{ margin: '1.5rem auto', maxWidth: '250px' }}>
        <button
          onClick={() => handleNavigation('/claim')}
          className="block w-full bg-yellow-400 text-gray-900 rounded-xl px-6 py-4 text-center shadow-md font-bold text-lg transition-all duration-300 border-none cursor-pointer"
          style={{
            backgroundColor: "#ffc72c",
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <span className="relative z-10">Claim Form</span>
          <span
            className="absolute inset-0 bg-yellow-500 transform scale-x-0 origin-left transition-transform duration-300"
            style={{
              transformOrigin: 'left',
              transition: 'transform 0.3s ease'
            }}
          ></span>
        </button>
        </div>
      </div>

      <div className="car-section" ref={carSectionRef}>
        {isMobile ? (

          <div
            id="imgs"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              position: 'relative'
            }}
          >
            <div style={{ 
              maxWidth: '80%',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <img
                src={Img}
                alt="Car"
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>
          </div>
        ) : (
        
          <div
            id="imgs"
            style={{
              transform: `translate3d(${-offset}px, 0, 0)`,
              WebkitTransform: `translate3d(${-offset}px, 0, 0)`,
              transition: 'transform 0.3s ease-out',
              position: 'absolute',
              right: '0',
              left: 'auto',
              margin: '0',
              width: '100%'
            }}
          >
            <div style={{ 
              maxWidth: '50%', 
              marginLeft: 'auto',
              marginRight: '5%'
            }}>
              <img
                src={Img}
                alt="Car"
                style={{
                  maxWidth: '100%',
                  height: '600px'
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Car;