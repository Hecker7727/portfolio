import React, { Suspense } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ReactLenis from "lenis/react";
import CustomCursor from "./components/CustomCursor";
import GoogleAnalytics from "./components/GoogleAnalytics";

const ServiceSummary = React.lazy(() => import("./sections/ServiceSummary"));
const Services = React.lazy(() => import("./sections/Services"));
const About = React.lazy(() => import("./sections/About"));
const Works = React.lazy(() => import("./sections/Works"));
const ContactSummary = React.lazy(() => import("./sections/ContactSummary"));
const Contact = React.lazy(() => import("./sections/Contact"));

const App = () => {


  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      <div className="opacity-100 transition-opacity duration-1000">
        <Navbar />
        <Hero />
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <ServiceSummary />
          <Services />
          <About />
          <Works />
          <ContactSummary />
          <Contact />
        </Suspense>
        <CustomCursor />
        <GoogleAnalytics />
      </div>
    </ReactLenis>
  );
};

export default App;
