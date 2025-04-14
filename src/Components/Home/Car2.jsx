import React, { useState, useEffect, useRef } from 'react';
import './Car.css';
import { useNavigate } from 'react-router-dom';
import Img from '../../Assets/Final 12.svg';
import Road from '../../Assets/unionRoad3.png';

const Car2 = () => {
  const [offset, setOffset] = useState(0);
  const carSectionRef = useRef(null);
  const hasScrolled = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (hasScrolled.current) return; 
      
      const carSection = carSectionRef.current;
      if (!carSection) return;

      const rect = carSection.getBoundingClientRect();

    
      if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
        const docWidth = document.body.clientWidth;
        const slidesWidth = document.getElementById('imgs').clientWidth;
        const mouseX = e.pageX;

       
        const newOffset = (mouseX / docWidth * slidesWidth * 0.3);

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
        
    
        const slidesWidth = document.getElementById('imgs').clientWidth;
        const newOffset = slidesWidth * effectProgress * 0.2;
        
        setOffset(newOffset);
        
    
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
  }, []);

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
          fontSize: '34px',
          fontWeight: 'bold',
          color: '#5D2446',
          marginBottom: '1rem',
          fontFamily: 'Bricolage Grotesque, sans-serif',
          color:'##D9D9D9'
        }}>
          Whether you're seeking legal guidance, safety tips, or the latest news on trucking laws
        </h2>
        <p style={{
          fontSize: '24px',
          color: '#6d6d6e',
          maxWidth: '800px',
          margin: '0 auto',
          fontFamily: 'Nunito, sans-serif',
          color:'#ffc72c'
        }}>
          We're here to help you navigate the road ahead!
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
        <div
          id="imgs"
          style={{
            transform: `translate3d(${offset}px, 0, 0)`,
            WebkitTransform: `translate3d(${offset}px, 0, 0)`,
            transition: 'transform 0.3s ease-out',
            left: '0',
            margin: '0',
            width: '100%'
          }}
        >
          <div style={{ 
            maxWidth: '50%', 
            marginLeft: '10%' 
          }}>
            <img
              src={Img}
              alt="Car"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car2;