import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { useState, useEffect, Suspense, lazy } from "react";
import { useInView } from "react-intersection-observer";

const LazyEtheralShadow = lazy(() => import("@/components/ui/etheral-shadow").then(module => ({ default: module.Component })));

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const [showBackground, setShowBackground] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "200px 0px 0px 0px",
  });

  useEffect(() => {
    if (isMobile) {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          setTimeout(() => setShowBackground(true), 2000);
        }, { timeout: 3000 });
      } else {
        setTimeout(() => setShowBackground(true), 2500);
      }
    } else {
      setTimeout(() => setShowBackground(true), 100);
    }
  }, [isMobile]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex flex-col items-center justify-center w-full min-h-screen pt-20 overflow-hidden bg-white"
    >
      <div className="z-10 w-full px-4 sm:px-6 md:px-10 lg:px-20">
        <AnimatedHeaderSection
          isMobile={isMobile}
          subTitle={"BCA Student & Aspiring Full Stack Developer"}
          title={"Haresh"}
          text={`Building Interactive Web & Game-Focused Projects.
Specializing in FiveM Scripting (Lua), Flutter, and AI/ML Integration.
Based in Madurai, TN · 1st Year BCA · New Horizon College.`}
          textColor={"text-black"}
          subTitleClassName="text-sm sm:text-base md:text-lg lg:text-xl font-medium"
        />
      </div>
      <div className="absolute inset-0 -z-50 w-screen h-screen">
        {showBackground && (
          <Suspense fallback={null}>
            <LazyEtheralShadow
              color="rgba(101, 101, 101, 1)"
              animation={{ scale: 100, speed: 90 }}
              noise={{ opacity: 1, scale: 1.2 }}
              sizing="fill"
              paused={!inView || isMobile}
            />
          </Suspense>
        )}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-[#d6d6d6]" />
      </div>
    </section>
  );
};

export default Hero;
