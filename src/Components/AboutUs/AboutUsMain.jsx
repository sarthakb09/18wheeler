import React from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import AboutUs from "./AboutUs";
import AboutUs2 from "./AboutUs2";
import AboutUs4 from "./AboutUs4";
import AboutUs5 from "./AboutUs5";
import AboutUs6 from "./AboutUs6";

const AboutUsMain = () => {
  return (
    <main>
        <Navbar />
        <AboutUs/>
        <AboutUs2/>
        <AboutUs4/>
        <AboutUs5/>
        <AboutUs6/>
        <Footer/>
    </main>
  );
};


export default AboutUsMain;