import React from "react";
import Navbar from "../NavBar/Navbar";
import HomePage3 from "./HomePage3";
import HomePage4 from "./HomePage4";
import Homepage5 from "./HomePage5";
import Homepage6 from "./Homepage6";
import Homepage7 from "./Homepage7";
import Homepage8 from "./HomePage8";
import HomePage from "../HeroPage/HeroPage";
// import CarLeft from "./CarLeft";
import HomeDiff1 from "./HomeDiff1";
import TestimonialCarousel from "./TestimonialCarousel";
import Footer from "../Footer/Footer";
import HorizontalScrollPage from "./HorizontalScrollPage";
import Car from "./Car";
import Car2 from "./Car2";
const HomeMain = () => {
  return (
    <main>
        <Navbar />
    
        <HomePage />
        {/* <HomeDiff1/> */}
        {/* <Car/> */}
        <TestimonialCarousel />
        <Car2/>
        <HomePage3/>
        <HomePage4/>
        <Homepage5/>
        <Homepage6/>
        {/* <HorizontalScrollPage /> */}
        <Homepage7/>
    
        <Homepage8/>
        <Car/>
        <Footer/>
        {/* <HorizontalScrollPage /> */}
    </main>
  );
};


export default HomeMain;