import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Experience = () => {
  const text = `Full Stack Developer with hands-on experience
    in modern web technologies and
    agile development practices.`;

  const experienceData = [
    {
      title: "Game UI Architect & FiveM Engineer",
      company: "Specialized Scripting",
      period: "2024 - Present",
      type: "Remote / Open Source",
      description: "Focusing on immersive, high-performance user interfaces for FiveM roleplay servers.",
      responsibilities: [
        "Developing custom NUI (Native User Interface) components using React and Vanilla CSS",
        "Optimizing Lua scripts (QB-Core) to ensure minimal server-side latency and high client-side FPS",
        "Designing diegetic UI elements that blend seamlessly with the GTA V game world",
        "Implementing secure Lua-to-JS bridges for complex data handling"
      ],
    },
    {
      title: "Full-Stack Web & AI Explorer",
      company: "MVP Development",
      period: "2024 - Present",
      type: "Self-Project Focus",
      description: "Building production-ready MVPs with modern web stacks and AI integration.",
      responsibilities: [
        "Architecting cross-platform mobile apps using Flutter and Dart (e.g., Marketplace prototypes)",
        "Experimenting with local LLM deployment using Ollama and building AI-driven Discord bots",
        "Leveraging Supabase and Vercel for scalable, serverless backend solutions",
        "Contributing to open-source and staying at the forefront of AI and web technologies"
      ]
    }
  ];

  const experienceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); //768px

  useGSAP(() => {
    experienceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);

  return (
    <section id="experience" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection
        subTitle={"Professional Journey"}
        title={"Experience"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
        titleFontSize="text-5xl sm:text-6xl md:text-[8rem]" // <-- custom size
      />

      {experienceData.map((experience, index) => (
        <div
          ref={(el) => (experienceRefs.current[index] = el)}
          key={index}
          className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
          style={
            isDesktop
              ? {
                top: `calc(10vh + ${index * 5}em)`,
                marginBottom: `${(experienceData.length - index - 1) * 5}rem`,
              }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-4xl lg:text-5xl">{experience.title}</h2>
                <p className="text-2xl text-white/80">{experience.company}</p>
                <p className="text-xl text-white/60">{`${experience.period} | ${experience.type}`}</p>
              </div>
              <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                {experience.description}
              </p>
              <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                {experience.responsibilities.map((responsibility, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex">
                      <span className="mr-12 text-lg text-white/30">
                        0{itemIndex + 1}
                      </span>
                      {responsibility}
                    </h3>
                    {itemIndex < experience.responsibilities.length - 1 && (
                      <div className="w-full h-px my-2 bg-white/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
