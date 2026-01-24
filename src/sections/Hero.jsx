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
    rootMargin: "200px 0px 0px 0px", // Keep it active a bit before/after
  });

  useEffect(() => {
    if (isMobile) {
      // Defer heavy animations on mobile until idle or 2.5s fallback
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          setTimeout(() => setShowBackground(true), 2000); // 2s inside idle
        }, { timeout: 3000 });
      } else {
        setTimeout(() => setShowBackground(true), 2500);
      }
    } else {
      setTimeout(() => setShowBackground(true), 100);
    }
  }, [isMobile]);

  const text = `I deliver premium, results-driven 
web and app experiences that 
give you an unfair advantage`;

  return (
    <section ref={ref} id="home" className="flex flex-col justify-end min-h-screen">
      {/* Visually hidden H1 for immediate LCP and SEO discovery */}
      <h1 className="sr-only">
        Jayesh Patil - Full Stack Developer India
      </h1>
      <AnimatedHeaderSection
        isMobile={isMobile}
        subTitle={"Hello I Am"}
        title={"Jayesh Patil"}
        text={text}
        textColor={"text-black"}
      />
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
