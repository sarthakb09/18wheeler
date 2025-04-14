// /* eslint-disable no-undef */
// import './App.css';
// import LoginPage from './Components/LoginPage/LoginPage';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Anomalies from "./Components/Admin/Anomalies/Anomalies"
// import DataInsight from "./Components/Admin/DataInsight/DataInsight"
// import ChoroplethMap from "./Components/Admin/DataInsight/MapComponent"
// import TrendsChart from "./Components/Admin/Trends/Trends"
// import Interactivity from "./Components/Admin/Interactivity/Interactivity"
// import Emission from "./Components/Admin/Sustainabilty/Emission"
// import Main from "./Components/Admin/Interactivity/Main"
// import Dashboards from "./Components/Admin/Dashboard/Dashboard"

// import "leaflet/dist/leaflet.css";

// import React from "react";

// function App() {
  

//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <LoginPage />, 
//     },
  
//     {
//       path: '/Anomalies',
//       element: <Anomalies />,
//     },
//     {
//       path: '/TrendsChart',
//       element: <TrendsChart />,
//     },
//     {
//       path: '/DataInsight',
//       element: <DataInsight />,
//     },
//     {
//       path: '/Interactivity',
//       element: <Interactivity />,
//     },
//     {
//       path: '/Main',
//       element: <Main />,
//     },
//     {
//       path: '/Dashboards',
//       element: <Dashboards />,
//     },
//     {
//       path: '/Main',
//       element: <Main />,
//     },
//     {
//       path: '/Emission',
//       element: <Emission />,
//     },
//     {
//       path: '/ChoroplethMap',
//       element: <ChoroplethMap />,
//     },
   
   
   
//     {
//       path: '*',
//       element: <h1>404 - Page Not Found</h1>,
//     },
//   ]);

//   return (
//      <RouterProvider router={router} />
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import HomePage3 from './Components/Home/HomePage3';
import HeroBanner from './Components/HeroPage/HeroPage';
import Navbar from './Components/NavBar/Navbar';
import HomePage4 from './Components/Home/HomePage4';
import HomePage5 from './Components/Home/HomePage5';
import Homepage7 from './Components/Home/Homepage7';
import Homepage8 from './Components/Home/HomePage8';
import HomeMain from './Components/Home/HomeMain';
import Footer from './Components/Footer/Footer';
import contactUs from './Components/ContactUs/ContactUs';
import ContactUsMain from './Components/ContactUs/ContactUsMain';
import ClaimForm from './Components/ClaimForm/ClamForm';
import Aboutus from './Components/AboutUs/AboutUs';
import AboutUs6 from './Components/AboutUs/AboutUs6';
import AboutUs2 from './Components/AboutUs/AboutUs2';
import AboutUsMain from './Components/AboutUs/AboutUsMain';
import Road from './Components/Road';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={styles.container}>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<HomeMain />} />
          <Route path="/about" element={<AboutUsMain />} />
          <Route path="/contact" element={<ContactUsMain />} />
          <Route path="/claim" element={<ClaimForm />} />
          {/* <Route path="/road" element={<Road />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
};

export default App;
