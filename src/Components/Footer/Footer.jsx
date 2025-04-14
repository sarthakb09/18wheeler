import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscriptionStatus, setSubscriptionStatus] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
    
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        
      
        setIsAnimated(true);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        
     
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setSubscriptionStatus('Please enter a valid email address');
           
            const formElement = e.target;
            formElement.classList.add('shake-animation');
            setTimeout(() => formElement.classList.remove('shake-animation'), 500);
            return;
        }

        try {
      
            setSubscriptionStatus('Subscribing...');
            
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setSubscriptionStatus('Thank you for subscribing!');
                setEmail('');
          
                const formElement = e.target;
                formElement.classList.add('success-animation');
                setTimeout(() => formElement.classList.remove('success-animation'), 1000);
            } else {
                setSubscriptionStatus('Subscription failed. Please try again.');
        
                const formElement = e.target;
                formElement.classList.add('error-animation');
                setTimeout(() => formElement.classList.remove('error-animation'), 500);
            }
        } catch (error) {
            setSubscriptionStatus('An error occurred. Please try again.');
          
            const formElement = e.target;
            formElement.classList.add('error-animation');
            setTimeout(() => formElement.classList.remove('error-animation'), 500);
        }
    };

    
    const LinkItem = ({ text, url = '#' }) => {
        const [isHovered, setIsHovered] = useState(false);
        
        return (
            <li 
                style={{
                    margin: '8px 0',
                    transition: 'transform 0.2s ease, color 0.2s ease',
                    transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
                    color: isHovered ? '#e2cfc4' : '#f9f9f9',
                    cursor: 'pointer'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => window.location.href = url}
            >
                {text}
            </li>
        );
    };

    
    const SocialIcon = ({ Icon, url = '#' }) => {
        const [isHovered, setIsHovered] = useState(false);
        
        return (
            <a 
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    fontSize: '24px',
                    color: isHovered ? '#ffffff' : '#e2cfc4',
                    transition: 'transform 0.3s ease, color 0.3s ease',
                    transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                    display: 'inline-block'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Icon />
            </a>
        );
    };

    return (
        <footer
            style={{
                backgroundColor: '#816756',
                color: '#fff',
                fontFamily: 'Poppins',
                padding: isMobile ? '40px 20px' : '60px 80px',
                transition: 'padding 0.3s ease',
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'translateY(0)' : 'translateY(50px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease'
            }}
        >
            <style>
                {`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                @keyframes success-pulse {
                    0% { box-shadow: 0 0 0 0 rgba(39, 174, 96, 0.4); }
                    70% { box-shadow: 0 0 0 10px rgba(39, 174, 96, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(39, 174, 96, 0); }
                }
                @keyframes error-pulse {
                    0% { box-shadow: 0 0 0 0 rgba(231, 76, 60, 0.4); }
                    70% { box-shadow: 0 0 0 10px rgba(231, 76, 60, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(231, 76, 60, 0); }
                }
                
                .shake-animation {
                    animation: shake 0.5s ease-in-out;
                }
                .success-animation {
                    animation: success-pulse 1s;
                }
                .error-animation {
                    animation: error-pulse 1s;
                }
                `}
            </style>
            <div
                style={{
                    display: 'flex',
                    justifyContent: isMobile ? 'center' : 'space-between',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? '30px' : '0',
                    alignItems: isMobile ? 'center' : 'flex-start',
                    flexWrap: 'wrap',
                }}
            >
             
                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? '20px' : '40px',
                    alignItems: isMobile ? 'center' : 'flex-start',
                    width: isMobile ? '100%' : 'auto',
                }}>
                 
                <div
                    style={{
                        backgroundColor: '#d9d9d9',
                        padding: '30px 40px',
                        fontFamily: "'Playfair Display'",
                        fontSize: '25px',
                        color: '#000',
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        }}
                        className="footer-logo"
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
                        }}
                        onClick={() => window.location.href = '/'}
                >
                    Logo
                </div>

                  
                <div
                    style={{
                        fontSize: '18px',
                        color: '#f9f9f9',
                        textAlign: isMobile ? 'center' : 'left',
                        }}
                    >
                        <h3 style={{ 
                            textDecoration: 'underline', 
                            fontWeight: '600',
                            marginBottom: '15px',
                            position: 'relative',
                            display: 'inline-block'
                        }}>
                            Company
                        </h3>
                        <ul style={{ 
                            listStyle: 'none', 
                            padding: 0,
                            transition: 'all 0.3s ease' 
                        }}>
                            <LinkItem text="About Company" url="/about" />
                            <LinkItem text="Contact us" url="/contact" />
                            <LinkItem text="Terms and Conditions" url="/terms" />
                            <LinkItem text="Privacy Policy" url="/privacy" />
                    </ul>
                    </div>
                </div>

          
                <div style={{ 
                    width: isMobile ? '100%' : 'auto', 
                    textAlign: isMobile ? 'center' : 'left',
                    transition: 'all 0.3s ease'
                }}>
                    <h4 style={{
                        position: 'relative',
                        display: 'inline-block',
                        marginBottom: '15px',
                    }}>
                        Stay up to date
                    </h4>
                    <form
                        onSubmit={handleSubscribe}
                        style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            gap: '10px',
                            marginTop: '15px',
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                padding: '10px 15px',
                                borderRadius: '20px',
                                border: '1px solid #c7b79e',
                                flex: 1,
                                width: isMobile ? '100%' : 'auto',
                                transition: 'all 0.3s ease',
                                outline: 'none',
                            }}
                            onFocus={(e) => {
                                e.target.style.boxShadow = '0 0 0 2px rgba(226, 207, 196, 0.5)';
                            }}
                            onBlur={(e) => {
                                e.target.style.boxShadow = 'none';
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                padding: '10px 20px',
                                borderRadius: '20px',
                                backgroundColor: '#fff',
                                color: '#000',
                                fontWeight: '600',
                                width: isMobile ? '100%' : 'auto',
                                cursor: 'pointer',
                                border: 'none',
                                transition: 'all 0.3s ease',
                                outline: 'none',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#e2cfc4';
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#fff';
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                            }}
                        >
                            Subscribe
                        </button>
                    </form>
                    {subscriptionStatus && (
                        <p style={{ 
                            marginTop: '10px', 
                            fontSize: '14px',
                            color: subscriptionStatus.includes('Thank you') ? '#4CAF50' : 
                                   subscriptionStatus.includes('Subscribing') ? '#FFC107' : '#FF5252',
                            animation: subscriptionStatus ? 'fadeIn 0.5s ease' : 'none',
                            transition: 'all 0.3s ease'
                        }}>
                            {subscriptionStatus}
                        </p>
                    )}
                </div>
            </div>

           
            <div
                style={{
                    marginTop: '40px',
                    display: 'flex',
                    justifyContent: isMobile ? 'center' : 'space-between',
                    alignItems: 'center',
                    flexDirection: isMobile ? 'column' : 'row',
                    textAlign: isMobile ? 'center' : 'left',
                    gap: isMobile ? '20px' : '0',
                }}
            >
                <p style={{ fontSize: '16px', fontWeight: '300' }}>© 2025. All rights reserved</p>
                <a
                    href="mailto:info@connect2attorney.com"
                    style={{ 
                        color: '#f9f9f9', 
                        textDecoration: 'none',
                        borderBottom: '1px dotted #e2cfc4',
                        padding: '0 2px',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.color = '#e2cfc4';
                        e.target.style.borderBottom = '1px solid #e2cfc4';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = '#f9f9f9';
                        e.target.style.borderBottom = '1px dotted #e2cfc4';
                    }}
                >
                    info@connect2attorney.com
                </a>
              
                <div
                    style={{
                        display: 'flex',
                        gap: '20px',
                        justifyContent: isMobile ? 'center' : 'flex-end',
                    }}
                >
                    <SocialIcon Icon={FaFacebook} url="https://facebook.com" />
                    <SocialIcon Icon={FaTwitter} url="https://twitter.com" />
                    <SocialIcon Icon={FaInstagram} url="https://instagram.com" />
                    <SocialIcon Icon={FaLinkedin} url="https://linkedin.com" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
