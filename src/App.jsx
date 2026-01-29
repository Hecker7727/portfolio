import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import ReactLenis from "lenis/react";
import CustomCursor from "./components/CustomCursor";
import GoogleAnalytics from "./components/GoogleAnalytics";

const App = () => {
  const canonicalUrl = "https://jayeshbpatil.com";

  return (
    <HelmetProvider>
      <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
        <Helmet>
          <title>Jayesh Patil - Full Stack Developer India | Creative Portfolio</title>
          <meta 
            name="description" 
            content="I deliver premium, results-driven web and app experiences. Jayesh Patil is a Full Stack Developer in India specializing in high-performance, animated, and aesthetic websites." 
          />
          <link rel="canonical" href={canonicalUrl} />
          <meta name="robots" content="index, follow" />
        </Helmet>
        
        <main className="opacity-100">
          <Navbar />
          <Hero />
          
          {/* 
            Critical SEO Change: 
            Removed Suspense and Lazy Loading to ensure Googlebot 
            sees all text content on the initial render without 
            waiting for hydration or chunk loading.
          */}
          <ServiceSummary />
          <Services />
          <About />
          <Works />
          <ContactSummary />
          <Contact />
          
          <CustomCursor />
          <GoogleAnalytics />
        </main>
      </ReactLenis>
    </HelmetProvider>
  );
};

export default App;
