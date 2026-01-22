import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production`;
  const aboutText = `I’m a Full Stack Developer who builds reliable, scalable web applications with a strong focus on performance and user experience. I work primarily with the MERN stack, developing SaaS platforms, dashboards, and production-ready web apps used by real users.

My approach combines clean frontend design with well-structured backend systems, ensuring that applications are not only visually polished but also secure, maintainable, and scalable. I enjoy solving complex problems, improving workflows, and turning ideas into practical digital products.

I’m driven by continuous improvement and hands-on development, always looking to build better systems and contribute meaningfully to the products I work on.`;
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

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Code with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-[26px] text-white/80">
        <img
          ref={imgRef}
          src="images/img3.png"
          alt="man"
          className="w-md rounded-3xl"
          loading="lazy"
          decoding="async"
          width="448"
          height="500"
        />
        <AnimatedTextLines
          text={aboutText}
          className={"w-full"}
          lineClassName="mb-8 last:mb-0"
        />
      </div>
    </section>
  );
};

export default About;
