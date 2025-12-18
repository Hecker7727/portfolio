import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { Component as EtheralShadow } from "@/components/ui/etheral-shadow";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `I deliver premium, results-driven 
web and app experiences that 
give you an unfair advantage`;

  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <AnimatedHeaderSection
        isMobile={isMobile}
        subTitle={"Hello I Am"}
        title={"Jayesh Patil"}
        text={text}
        textColor={"text-black"}
      />
      <div className="absolute inset-0 -z-50 w-screen h-screen">
        <EtheralShadow
          color="rgba(101, 101, 101, 1)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 1, scale: 1.2 }}
          sizing="fill"
        />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-[#d6d6d6]" />
      </div>
    </section>
  );
};

export default Hero;
