import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `BCA Student at New Horizon College, Bangalore.
    Aspiring Full-Stack Developer & Game UI Architect.`;
  const aboutText = `Hi, I’m a BCA student and aspiring full‑stack developer based in Madurai, Tamil Nadu (currently studying at New Horizon College, Bangalore), with a strong passion for building interactive web and game‑focused projects. I specialize in JavaScript, Python, Dart/Flutter, and Lua, and I enjoy working on full‑stack web apps, Discord bots, and game‑related scripting (especially FiveM RP servers using QB‑Core).

I’m particularly interested in game development (Godot, Roblox), AI/ML integration, and local LLM deployment, and I actively experiment with tools like Ollama, Supabase, and Vercel to ship real‑world prototypes. As a hands‑on learner, I focus on turning ideas into working MVPs, whether it’s a marketplace app in Flutter, a Discord bot, or a customized FiveM resource.

I enjoy contributing to open‑source projects, engaging in Discord/Reddit communities, and keeping my stack lean and budget‑friendly. My goal is to become a versatile, product‑driven developer who ships clean, scalable solutions while continuously learning and staying close to the latest in AI, gaming, and web technologies.`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    if (imgRef.current) {
      gsap.set(imgRef.current, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
      });
      gsap.to(imgRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 2,
        ease: "power4.out",
        scrollTrigger: { trigger: imgRef.current },
      });
    }
  }, []);
  return (
    <section
      id="about"
      className="relative flex flex-col justify-between min-h-screen pt-20 overflow-hidden bg-white"
    >
      <div className="z-10 w-full px-4 sm:px-6 md:px-10 lg:px-20">
        <AnimatedHeaderSection
          title={"About me"}
          text={text}
          textColor={"text-black"}
          withScrollTrigger={true}
        />
      </div>

      <div className="flex flex-col items-center justify-between w-full gap-10 px-6 py-20 pb-32 md:px-10 lg:px-24 md:flex-row">
        <div className="w-full md:w-1/2">
          <AnimatedTextLines
            text={aboutText}
            className={"w-full"}
            lineClassName="mb-6 last:mb-0"
          />
        </div>
        <img
          ref={imgRef}
          src="images/img3.jpg"
          alt="man"
          className="w-md rounded-3xl"
          loading="lazy"
          decoding="async"
          width="448"
          height="500"
        />
      </div>
    </section>
  );
};

export default About;
