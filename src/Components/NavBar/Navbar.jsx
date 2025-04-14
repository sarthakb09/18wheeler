import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Set active link based on current route
  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path);
    // Log the active link for debugging
    console.log('Active Link:', path);
  }, [location]);
  
  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Handle scroll direction to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      // Detect scroll direction
      const currentScrollY = window.scrollY;
      
      // Change navbar background when scrolled
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > 500) {
        if (currentScrollY > lastScrollY && !isMenuOpen) {
          setHideNavbar(true);
        } else {
          setHideNavbar(false);
        }
      } else {
        setHideNavbar(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to handle navigation with scroll to top and animation
  const handleNavigation = (to) => {
    console.log('handleNavigation called with path:', to);
    
    // Add exit animation
    if (isMenuOpen) {
      const menuElement = document.querySelector('.mobile-menu');
      if (menuElement) {
        menuElement.style.animation = 'slideOut 0.3s forwards';
        setTimeout(() => {
          setIsMenuOpen(false);
          window.scrollTo(0, 0);
          navigate(to);
          // Update active link state immediately for visual feedback
          setActiveLink(to);
        }, 250);
      } else {
        setIsMenuOpen(false);
        window.scrollTo(0, 0);
        navigate(to);
        setActiveLink(to);
      }
    } else {
      window.scrollTo(0, 0);
      navigate(to);
      setActiveLink(to);
    }
  };

  // Custom Link component with hover effects and active state
  const NavLink = ({ to, onClick, children, className }) => {
    const isActive = activeLink === to;
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <button 
        onClick={() => {
          if (onClick) onClick();
          handleNavigation(to);
        }} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`nav-link no-underline relative ${className} ${isActive ? 'text-yellow-500' : ''}`}
        style={{ 
          textDecoration: 'none', 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer',
          position: 'relative',
          padding: '5px 0',
          transition: 'all 0.3s ease'
        }}
      >
        {children}
        <span 
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: isActive ? '100%' : isHovered ? '80%' : '0',
            height: '2px',
            backgroundColor: '#ffc72c',
            transition: 'all 0.3s ease'
          }}
        />
      </button>
    );
  };

  // Button with hover animation
  const AnimatedButton = ({ onClick, children, className }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`animated-button ${className}`}
        style={{
          backgroundColor: "#ffc72c",
          transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
          boxShadow: isHovered ? '0 6px 15px rgba(255, 199, 44, 0.3)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease'
        }}
      >
        {children}
      </button>
    );
  };

  return (
    <>
      {/* Fullscreen Mobile Menu Overlay - Placed outside navbar to avoid z-index issues */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-white md:hidden z-[9999] flex flex-col mobile-menu"
          style={{ 
            animation: 'fadeIn 0.3s forwards',
            overflowY: 'auto'
          }}
        >
          <style jsx>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            
            @keyframes slideOut {
              from { opacity: 1; transform: translateY(0); }
              to { opacity: 0; transform: translateY(-10px); }
            }
          `}</style>
          
          {/* Header with brand & close button */}
          <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100 sticky top-0 bg-white z-10">
            <div 
              className="text-black text-xl font-bold cursor-pointer flex items-center space-x-2"
              onClick={() => handleNavigation('/')}
            >
              <div 
                style={{
                  backgroundColor: '#ffc72c',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '10px'
                }}
              >
                <span style={{ fontWeight: 'bold', color: '#fff', fontSize: '20px' }}>L</span>
              </div>
              <span >Logo</span>
            </div>
            <button
              onClick={() => {
                console.log('Closing menu');
                const menuElement = document.querySelector('.mobile-menu');
                if (menuElement) {
                  menuElement.style.animation = 'slideOut 0.3s forwards';
                  setTimeout(() => {
                    setIsMenuOpen(false);
                  }, 250);
                } else {
                  setIsMenuOpen(false);
                }
              }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-black focus:outline-none transition-all duration-300"
              style={{
                transform: 'rotate(0deg)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(90deg)';
                e.currentTarget.style.backgroundColor = '#f3f4f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotate(0deg)';
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Main Navigation Links */}
          <div className="flex-1 px-8 py-10">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Menu</h2>
              
              <div className="space-y-8">
                <FullScreenNavItem 
                  label="Home" 
                  to="/" 
                  onNavigate={handleNavigation}
                  isActive={activeLink === '/'}
                />
                
                
                 <FullScreenNavItem 
                  label="About Us" 
                  to="/about" 
                  onNavigate={handleNavigation}
                  isActive={activeLink === '/about'}
                />
                
                <FullScreenNavItem 
                  label="Contact Us" 
                  to="/contact" 
                  onNavigate={handleNavigation}
                  isActive={activeLink === '/contact'}
                />
                
                {/* <div className="border-t border-gray-100 pt-8 mt-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Support</h3>
                  <div className="space-y-6">
                    <FullScreenSubNavItem 
                      label="Help Center" 
                      to="/help" 
                      onNavigate={handleNavigation}
                      isActive={activeLink === '/help'}
                    />
                    <FullScreenSubNavItem 
                      label="FAQ" 
                      to="/faq" 
                      onNavigate={handleNavigation}
                      isActive={activeLink === '/faq'}
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="px-8 py-8 bg-gray-50 border-t border-gray-100">
            <div className="max-w-md mx-auto">
              <button 
                onClick={() => handleNavigation('/claim')}
                className="block w-full bg-yellow-400 text-gray-900 rounded-xl px-6 py-4 text-center shadow-md font-bold text-lg transition-all duration-300 border-none cursor-pointer"
                style={{ 
                  backgroundColor: "#ffc72c",
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <span className="relative z-10">Submit Claim Form</span>
                <span 
                  className="absolute inset-0 bg-yellow-500 transform scale-x-0 origin-left transition-transform duration-300"
                  style={{
                    transformOrigin: 'left',
                    transition: 'transform 0.3s ease'
                  }}
                ></span>
              </button>
              
              <div className="mt-6 flex justify-center space-x-5">
                <SocialIcon type="facebook" size="large" />
                <SocialIcon type="twitter" size="large" />
                <SocialIcon type="instagram" size="large" />
              </div>
            </div>
          </div>
        </div>
      )}

      <div 
        className={`fixed top-0 left-0 w-full px-4 md:px-12 py-6 flex justify-between items-center z-40 transition-all duration-500 ${
        isScrolled || isMenuOpen ? 'bg-white shadow-md' : 'bg-white/10 backdrop-blur-md'
        } ${hideNavbar ? '-translate-y-full' : 'translate-y-0'}`}
        style={{
          transform: hideNavbar ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 0.4s ease, background-color 0.3s ease, box-shadow 0.3s ease'
        }}
      >
        {/* Logo with subtle animation */}
        <div 
        
          className="text-xl font-bold text-black cursor-pointer"
          onClick={() => handleNavigation('/')}
          style={{
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s ease',
            backgroundColor: '#d9d9d9',
                        padding: '15px 30px',
                        fontFamily: "'Playfair Display'",
                        fontSize: '25px',
                        color: '#000',
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          logo
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <AnimatedButton 
            onClick={() => handleNavigation('/claim')}
            className="rounded-xl px-4 py-2 shadow-md font-bold text-sm hover:bg-yellow-500 transition-colors border-none text-gray-900"
          >
            Claim Form
          </AnimatedButton>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none text-black hamburger-menu"
            aria-label="Toggle menu"
            style={{
              position: 'relative',
              zIndex: 60,
              padding: '8px'
            }}
          >
            <div className={`w-6 flex flex-col justify-between h-5 transition-all ${isMenuOpen ? 'transform' : ''}`}>
              <span 
                className={`h-0.5 bg-black block transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`} 
              />
              <span 
                className={`h-0.5 bg-black block transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`} 
              />
              <span 
                className={`h-0.5 bg-black block transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`} 
              />
            </div>
          </button>
        </div>
        
        {/* Desktop Menu with Hover Effects */}
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          <NavLink
            to="/"
            className="text-black transition-colors duration-200"
          >
            Home
          </NavLink>
          
          <NavLink
            to="/about"
            className="text-black transition-colors duration-200"
          >
            About Us
          </NavLink>
          
          <NavLink
            to="/contact"
            className="text-black transition-colors duration-200"
          >
            Contact Us
          </NavLink>
        </div>
        
        {/* Desktop Claim Form Button */}
        <AnimatedButton 
          onClick={() => handleNavigation('/claim')}
          className="hidden md:block rounded-xl px-6 py-3 shadow-md font-bold transition-colors text-gray-900"
        >
          Claim Form
        </AnimatedButton>
      </div>
    </>
  );
};

// Full screen navigation item with enhanced animations
const FullScreenNavItem = ({ label, to, onNavigate, isActive }) => {
  return (
    <div className="group">
      <button 
        onClick={() => {
          console.log('Navigation item clicked:', to);
          onNavigate(to);
        }}
        className={`block text-xl font-bold transition-colors duration-300 bg-transparent border-none cursor-pointer ${
          isActive ? 'text-yellow-500' : 'text-gray-900 hover:text-yellow-500'
        }`}
      >
        {label}
      </button>
      <div className={`h-0.5 mt-2 transition-all duration-300 ${
        isActive ? 'w-12 bg-yellow-500' : 'w-0 bg-yellow-500 group-hover:w-12'
      }`}></div>
    </div>
  );
};

// Full screen navigation submenu item
const FullScreenSubNavItem = ({ label, to, onNavigate, isActive }) => {
  return (
    <button 
      onClick={() => onNavigate(to)}
      className={`block text-lg transition-all duration-200 bg-transparent border-none cursor-pointer text-left w-full ${
        isActive ? 'text-yellow-500 font-medium' : 'text-gray-700 hover:text-yellow-500'
      }`}
    >
      {label}
    </button>
  );
};

// Social media icon for mobile menu
const SocialIcon = ({ type, size = 'small' }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getIcon = () => {
    switch(type) {
      case 'facebook':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={size === 'large' ? "h-5 w-5" : "h-4 w-4"} fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        );
      case 'twitter':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={size === 'large' ? "h-5 w-5" : "h-4 w-4"} fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        );
      case 'instagram':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={size === 'large' ? "h-5 w-5" : "h-4 w-4"} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      default:
        return null;
    }
  };
  
  return (
    <a 
      href={`https://${type}.com`}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 ${
        size === 'large' ? 'w-10 h-10' : 'w-8 h-8'
      }`}
      style={{
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
        backgroundColor: isHovered ? '#f9fafb' : '#f3f4f6'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {getIcon()}
    </a>
  );
};

export default Navbar;