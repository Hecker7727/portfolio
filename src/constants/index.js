// index.js
// export const servicesData = [
//   {
//     title: "FullStack Development",
//     description:
//       "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
//     items: [
//       {
//         title: "Backend Engineering",
//         description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
//       },
//       {
//         title: "Frontend Excellence",
//         description: "(React, Vue, TypeScript, Interactive UI/UX)",
//       },
//       {
//         title: "Database Design",
//         description: "(SQL/NoSQL Optimization, Scalable Structures)",
//       },
//     ],
//   },
//   {
//     title: "DevOps & Cloud Solutions",
//     description:
//       "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
//     items: [
//       {
//         title: "CI/CD Pipelines",
//         description: "(GitHub Actions, Docker, Kubernetes)",
//       },
//       {
//         title: "Server Management ",
//         description: "(Linux, Nginx, Load Balancing)",
//       },
//       {
//         title: "Performance Tuning",
//         description: "(Caching, Compression, Lighthouse 90+ Scores)",
//       },
//     ],
//   },
//   {
//     title: "Security & Optimization",
//     description:
//       "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
//     items: [
//       {
//         title: "Code Audits",
//         description: "(Refactoring, Tech Debt Cleanup)",
//       },
//       {
//         title: "Pen Testing",
//         description: "(Vulnerability Assessments)",
//       },
//       {
//         title: "SEO Tech Stack",
//         description: "(SSR, Metadata, Structured Data)",
//       },
//     ],
//   },
//   {
//     title: "Web & Mobile Apps",
//     description:
//       "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
//     items: [
//       {
//         title: "Cross-Platform Apps",
//         description: "(Single codebase for iOS/Android/Web)",
//       },
//       {
//         title: "PWAs",
//         description: "(Offline mode, Push Notifications)",
//       },
//       {
//         title: "E-Commerce",
//         description: "(Checkout flows, Payment Gateways, Inventory APIs)",
//       },
//     ],
//   },
// ];

export const projects = [
  {
    id: 101,
    name: "Riyansh Ayurvedic E-Commerce",
    description:
      "A premium ayurvedic e-commerce platform offering a range of natural health products. Features a clean, responsive design for a seamless shopping experience.",
    href: "https://www.riyanshamrit.com/",
    image: "/images/Riyansh-Ayurvedic-E-Commerce.png",
    bgImage: "/images/Riyansh-Ayurvedic-E-Commerce.png",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "E-Commerce" },
    ],
  },
  // ---------------- Internship / Private Projects ----------------
  {
    id: 1,
    name: "Yaseen Foundation Platform",
    description:
      "A charity management system built during my DigiMirai internship. Features included donor tracking, fund allocation, and a transparent dashboard for admins.",
    href: "https://github.com/Jayeshpatil9869/yaseen", // private repo
    image: "/images/Yaseen-Foundation.png",
    bgImage: "/images/Yaseen-Foundation.png",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Gaushala Management Dashboard",
    description:
      "A web-based management tool for Gaushalas (cow shelters) to handle donations, cattle records, and daily operations with clean data visualization.",
    href: "https://github.com/Jayeshpatil9869/gaushala_project-main", // private repo
    image: "/images/Gaushala.png",
    bgImage: "/images/Gaushala.png",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "Supabase" },
    ],
  },
  // {
  //   id: 4,
  //   name: "AI Copilot for Instructors",
  //   description:
  //     "An AI-powered assistant for educators that generates quiz questions, lesson summaries, and personalized learning resources in real-time.",
  //   href: "", // private repo
  //   image: "/assets/projects/ai-copilot.jpg",
  //   bgImage: "/assets/backgrounds/ai.jpg",
  //   frameworks: [
  //     { id: 1, name: "React.js" },
  //     { id: 2, name: "Node.js" },
  //     { id: 3, name: "OpenAI/Gemini API" },
  //     { id: 4, name: "Tailwind CSS" },
  //   ],
  // },
  {
    id: 7,
    name: "Enhancify – AI Image Enhancer",
    description:
      "An AI-powered drag-and-drop image enhancement tool with real-time preview and one-click optimization. Built with performance in mind—lazy loading, asset optimization, and Lighthouse 95+.",
    href: "https://github.com/Jayeshpatil9869/image-enhancer",
    image: "/images/image-enhancer.png",
    bgImage: "/images/image-enhancer.png",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "Lazy Loading" },
      { id: 4, name: "Performance Optimization" },
    ],
  },
  {
    id: 8,
    name: "Movie Search App",
    description:
      "A real-time movie search web app featuring modular components, client-side routing, and OMDB API integration—optimized with debounce and caching for improved performance.",
    href: "https://github.com/Jayeshpatil9869/MovieSearch-React-Application",
    image: "/images/movieDekho.png",
    bgImage: "/images/movieDekho.png",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Vite" },
      { id: 3, name: "OMDB API" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 9,
    name: "Rejouice Clone",
    description:
      'A "Rejouice" website clone showcasing modern web development techniques with HTML, CSS, JavaScript, and GSAP animations—emphasizing responsive, interactive design.',
    href: "https://github.com/Jayeshpatil9869/Rejouice-Clone",
    image: "/images/rejouice.png",
    bgImage: "/images/rejouice.png",
    frameworks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "GSAP" },
    ],
  },
  {
    id: 10,
    name: "Lazarev Agency Clone",
    description:
      "A clone of the Lazarev Agency website that demonstrates modern front-end skills—responsive layouts, visuals, and animations with HTML, CSS, and JavaScript.",
    href: "https://github.com/Jayeshpatil9869/Lazarev",
    image: "/images/Lazarev.png",
    bgImage: "/images/Lazarev.png",
    frameworks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
    ],
  },
  {
    id: 11,
    name: "Outpost Design Website Clone",
    description:
      "A modern, responsive clone of the Outpost Design website, showcasing advanced front-end development skills including animations, responsiveness, and sleek UI design.",
    href: "https://github.com/Jayeshpatil9869/Outpost-Project",
    image: "/images/Outpost.png",
    bgImage: "/images/Outpost.png",
    frameworks: [
      { id: 1, name: "HTML5" },
      { id: 2, name: "CSS3 & SASS" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "GSAP" },
    ],
  },
  {
    id: 12,
    name: "Rethink Website Clone",
    description:
      "A replica of the Rethink website using HTML, CSS, and JavaScript. Features smooth fade animations using the AOS (Animate On Scroll) library, interactive elements, and responsive layout.",
    href: "https://github.com/Jayeshpatil9869/Rethink",
    image: "/images/rethink.png",
    bgImage: "/images/rethink.png",
    frameworks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "AOS" },
    ],
  },
  {
    id: 13,
    name: "Sundown Studio",
    description:
      "A visually immersive clone of the Sundown Studio website, featuring smooth scroll animations and high-quality design elements.",
    href: "https://github.com/Jayeshpatil9869/Sundown-Studio",
    image: "/images/sundown.png",
    bgImage: "/images/sundown.png",
    frameworks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "GSAP" },
    ],
  },
];

export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/jayesh-patil01/" },
  { name: "GitHub", href: "https://github.com/Jayeshpatil9869" },
  { name: "WhatsApp", href: "https://wa.me/919209389015" },
  { name: "Codepen", href: "https://codepen.io/jayeshpatil1553" },
  {
    name: "Instagram",
    href: "https://www.instagram.com/destination_diaries_15/",
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@Rjarts9869",
  },
  { name: "Twitter", href: "https://x.com/Jayeshpatil1553" },
];
