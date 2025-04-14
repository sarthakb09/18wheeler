import React, { useEffect } from 'react';
import Img from '../../Assets/Final 1.png'
import Img2 from '../../Assets/Final 2.png'

const HorizontalScrollPage = () => {
  useEffect(() => {
    const scrollHorizontally = (e) => {
      e = window.event || e;
      const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      const scrollSpeed = 60;

      document.documentElement.scrollLeft -= delta * scrollSpeed;
      document.body.scrollLeft -= delta * scrollSpeed;

      e.preventDefault();
    };

 
    if (window.addEventListener) {
      window.addEventListener('mousewheel', scrollHorizontally, { passive: false });
      window.addEventListener('DOMMouseScroll', scrollHorizontally, { passive: false });
    } else {
      window.attachEvent('onmousewheel', scrollHorizontally);
    }

    return () => {
      if (window.removeEventListener) {
        window.removeEventListener('mousewheel', scrollHorizontally);
        window.removeEventListener('DOMMouseScroll', scrollHorizontally);
      } else {
        window.detachEvent('onmousewheel', scrollHorizontally);
      }
    };
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <div style={styles.textContent}>
          <h1 style={styles.header}>INJURED IN A 12-WHEELER ACCIDENT?<br />YOU DESERVE JUSTICE</h1>
          <p style={styles.paragraph}>We fight for truck accident victims. Get the compensation you deserve. No upfront fees, just results.</p>
          <button style={styles.claimButton}>CLAIM NOW</button>
        </div>
      </div>
      
      <div style={styles.roadSection}>
        <div style={styles.road}>
          <div style={styles.roadLine}></div>
        </div>
        <div style={styles.imageContainer}>
          <img src={Img2} style={styles.image} alt="Truck Accident Attorney" />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    width: '200%',
    overflow: 'hidden',
    background: 'linear-gradient(90deg, #f7971e, #8e2de2)',
    backgroundSize: '210% auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '2rem 4rem',
    position: 'relative',
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '1400px',
    marginBottom: '2rem',
  },
  textContent: {
    width: '70%',
    padding: '2rem',
    textAlign: 'center',
  },
  header: {
    color: '#fff',
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    lineHeight: '1.2',
  },
  paragraph: {
    color: '#fff',
    fontSize: '1.5rem',
    marginBottom: '2.5rem',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto 2.5rem auto',
  },
  claimButton: {
    backgroundColor: '#ff3e3e',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    padding: '1rem 2.5rem',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  },
  roadSection: {
    width: '100%',
    height: '50vh',
    position: 'relative',
    marginTop: '2rem',
  },
  road: {
    width: '100%',
    height: '120px',
    backgroundColor: '#333333',
    position: 'absolute',
    bottom: '25%',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
  },
  roadLine: {
    width: '100%',
    height: '10px',
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    borderStyle: 'dashed',
    borderColor: '#ffffff',
    borderWidth: '0 10px',
  },
  imageContainer: {
    position: 'absolute',
    bottom: '30%',
    right: '10%',
    width: '35%',
    zIndex: 10,
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '10px',
    // boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  },
  text: {
    color: '#fff',
    fontSize: '4vw',
    fontFamily: 'monospace',
  },
};

export default HorizontalScrollPage;
