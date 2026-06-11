export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const roles = [
  "Product Engineer",
  "Systems Builder",
  "AI & Performance Advocate",
] as const;

export type Experience = {
  company: string;
  title: string;
  duration: string;
  location: string;
  link: string;
  summary: string;
  bullets: string[];
  impact: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    company: "Access Skills",
    title: "Frontend Lead",
    duration: "Production engagement",
    location: "United Kingdom · Remote",
    link: "https://www.accessskills.co.uk",
    summary:
      "Led frontend performance and SEO recovery for a production SaaS training platform.",
    bullets: [
      "Diagnosed Core Web Vitals, accessibility, and crawlability issues affecting rankings and conversions.",
      "Implemented performance and semantic improvements aligned with Lighthouse metrics.",
      "Partnered with stakeholders to connect technical improvements to business and SEO goals.",
    ],
    impact: [
      "Raised Lighthouse scores from approximately 60–76 to above 90 across Performance, SEO, Accessibility, and Best Practices.",
      "Improved competitiveness for high-intent search traffic.",
      "Established performance baselines to prevent regression.",
    ],
    technologies: [
      "Next.js",
      "Core Web Vitals",
      "Technical SEO",
      "Accessibility",
      "Lighthouse",
    ],
  },
  {
    company: "ShopazHub",
    title: "Lead Frontend Engineer",
    duration: "Production engagement",
    location: "Nigeria · Remote",
    link: "https://www.shopazhub.com",
    summary:
      "Led architectural stabilization of a revenue-critical e-commerce platform.",
    bullets: [
      "Identified systemic risk across checkout, session management, and payment integrations.",
      "Designed deterministic cart reconciliation for guest and authenticated users.",
      "Refactored checkout into explicit state transitions and added safeguards around BNPL payment failures.",
      "Worked with backend engineering and design on API contracts and user flows.",
    ],
    impact: [
      "Reduced checkout failures and cart abandonment.",
      "Improved payment reliability and user trust.",
      "Increased guest-to-user conversion without cart data loss.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "State Machines",
      "Payments",
      "REST APIs",
    ],
  },
  {
    company: "Mortified",
    title: "Frontend Lead / Product Consultant",
    duration: "Current product engagement",
    location: "Nigeria · Remote",
    link: "https://www.themortifiedone.org",
    summary:
      "Leading frontend architecture and product implementation across the web platform and upcoming mobile experience.",
    bullets: [
      "Translate product and design concepts into scalable, user-friendly interfaces.",
      "Consult on frontend strategy and UX for an upcoming mobile application launch.",
      "Advise on performance, component structure, and frontend practices that support growth.",
    ],
    impact: [
      "Created a maintainable frontend foundation for a growing platform.",
      "Aligned product, design, and engineering decisions around a coherent customer experience.",
    ],
    technologies: [
      "React",
      "Product Strategy",
      "Frontend Architecture",
      "Mobile UX",
    ],
  },
  {
    company: "Qcmology",
    title: "Web App QA / Frontend Consultant",
    duration: "Contract",
    location: "France · Remote",
    link: "https://www.qcmology.net",
    summary:
      "Improved the reliability of complex text interaction systems across browsers.",
    bullets: [
      "Diagnosed and resolved Safari-specific rendering and behavioral issues.",
      "Validated dynamic content handling and interaction flows.",
      "Worked with engineers to reproduce and resolve production defects.",
    ],
    impact: [
      "Improved cross-browser reliability, especially in Safari.",
      "Reduced production bugs affecting the user experience.",
    ],
    technologies: [
      "Cross-browser QA",
      "Safari",
      "Production Debugging",
      "JavaScript",
    ],
  },
];

export const projectCategories = [
  "All",
  "Web",
  "Mobile",
  "AI & LLM",
  "Systems & Architecture",
  "E-commerce & Payments",
  "Open Source",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: ProjectCategory[];
  stack: string[];
  featured?: boolean;
  private?: boolean;
  github?: string;
  live?: string;
  problem: string;
  approach: string;
  decisions: string[];
  challenges: string[];
  impact: string[];
};

export const projects: Project[] = [
  {
    id: "access-skills-recovery",
    title: "Access Skills Performance Recovery",
    description:
      "A full performance, accessibility, and SEO recovery for a production training platform.",
    image: "/projects/performance.svg",
    categories: ["Web", "Systems & Architecture"],
    stack: ["Next.js", "Lighthouse", "Core Web Vitals", "SEO"],
    featured: true,
    private: true,
    live: "https://www.accessskills.co.uk",
    problem:
      "The platform was underperforming across Lighthouse categories, weakening search visibility, usability, and conversion confidence.",
    approach:
      "Joseph treated performance as a systems problem: isolate critical rendering constraints, fix semantic and crawlability gaps, then establish measurable baselines.",
    decisions: [
      "Prioritized high-impact rendering and semantic issues before low-value micro-optimizations.",
      "Connected technical metrics to search intent and conversion paths.",
      "Introduced repeatable audit baselines to make regression visible.",
    ],
    challenges: [
      "Improving a live SaaS platform without disrupting active acquisition flows.",
      "Balancing SEO, accessibility, and performance work rather than optimizing one score in isolation.",
    ],
    impact: [
      "Lifted Lighthouse scores from approximately 60–76 to above 90.",
      "Improved competitiveness for high-intent search traffic.",
      "Created performance baselines for ongoing release quality.",
    ],
  },
  {
    id: "shopazhub-checkout",
    title: "ShopazHub Checkout Stabilization",
    description:
      "Deterministic cart and payment architecture for a revenue-critical commerce flow.",
    image: "/projects/commerce.svg",
    categories: [
      "Web",
      "Systems & Architecture",
      "E-commerce & Payments",
    ],
    stack: ["React", "TypeScript", "Payments", "State Architecture"],
    featured: true,
    private: true,
    live: "https://www.shopazhub.com",
    problem:
      "Checkout, session, and third-party payment behavior created failure paths that could lose cart state and erode customer trust.",
    approach:
      "Joseph mapped the checkout as explicit transitions, designed deterministic reconciliation between guest and authenticated carts, and built safeguards around payment failures.",
    decisions: [
      "Replaced implicit checkout behavior with controlled state transitions.",
      "Defined cart reconciliation rules before implementation.",
      "Treated payment failure and retry states as first-class product flows.",
    ],
    challenges: [
      "Reconciling local, session, and server state without duplicated or missing items.",
      "Coordinating frontend behavior with evolving API contracts and BNPL constraints.",
    ],
    impact: [
      "Reduced checkout failures and cart abandonment.",
      "Improved payment reliability and customer trust.",
      "Improved guest-to-user conversion without data loss.",
    ],
  },
  {
    id: "awesome-ai-builds",
    title: "Practical AI Build Lab",
    description:
      "A documented collection of real AI, LLM evaluation, RAG, agent, and secure-builder projects.",
    image: "/projects/ai-lab.svg",
    categories: ["AI & LLM", "Open Source", "Systems & Architecture"],
    stack: ["Python", "LangGraph", "FastAPI", "FAISS", "CrewAI"],
    featured: true,
    github: "https://github.com/josephetim/awesome-projects",
    problem:
      "Many AI project collections stop at toy demos and lack the architecture, setup, evaluation, and extension guidance needed for serious learning.",
    approach:
      "Built a tiered lab of practical projects with a shared provider adapter, clear setup paths, and production-minded examples.",
    decisions: [
      "Used a provider abstraction to support Gemini and OpenAI without rewriting application logic.",
      "Organized builds by complexity and documented extension paths.",
      "Included RAG, tool use, PR review automation, multi-agent analysis, LLM evaluation, and secure building patterns.",
    ],
    challenges: [
      "Keeping examples approachable without flattening real system complexity.",
      "Making provider choice and local setup predictable across multiple projects.",
    ],
    impact: [
      "Created a reusable learning and prototyping foundation for AI engineers.",
      "Demonstrates practical work across retrieval, agents, evaluation, and AI security.",
    ],
  },
  {
    id: "swift-agent",
    title: "Swift Agent Mobile",
    description:
      "An API-connected React Native product with secure auth, OTP, notifications, and query orchestration.",
    image: "/projects/mobile.svg",
    categories: ["Mobile", "Systems & Architecture"],
    stack: ["Expo", "React Native", "TypeScript", "TanStack Query"],
    featured: true,
    github: "https://github.com/josephetim/swift-agents",
    problem:
      "The mobile experience required reliable authentication and challenge flows that could coordinate network state, secure storage, and notifications.",
    approach:
      "Implemented the product with Expo Router, API-connected auth and OTP flows, secure local persistence, and query-driven server state.",
    decisions: [
      "Separated server state from local interaction state.",
      "Used SecureStore for sensitive persisted values.",
      "Adopted file-based routing and native gesture/animation primitives.",
    ],
    challenges: [
      "Keeping authentication transitions predictable under slow or failed network conditions.",
      "Coordinating deep mobile interaction states without sacrificing maintainability.",
    ],
    impact: [
      "Delivered a typed, mobile-first foundation for a real API-backed product.",
      "Built validation commands into the repository for lint and type safety.",
    ],
  },
  {
    id: "booknest",
    title: "BookNest Mobile",
    description:
      "A polished discovery and personal library app built on the Open Library APIs.",
    image: "/projects/booknest.svg",
    categories: ["Mobile", "Open Source"],
    stack: ["React Native", "Expo", "Zustand", "Open Library API"],
    github: "https://github.com/josephetim/booknest-mobile",
    problem:
      "Readers need a fast way to discover, track, and organize books without a heavy or distracting product experience.",
    approach:
      "Created a focused mobile product around search, discovery, saved state, and readable information hierarchy.",
    decisions: [
      "Used Zustand for compact client state management.",
      "Built against the public Open Library API.",
      "Kept navigation and feedback native to the mobile platform.",
    ],
    challenges: [
      "Normalizing inconsistent public API data.",
      "Maintaining responsive search and image-heavy lists on mobile.",
    ],
    impact: [
      "Produced a maintainable Expo application with a clear product scope.",
      "Demonstrates practical mobile state and API integration skills.",
    ],
  },
  {
    id: "mortified-platform",
    title: "Mortified Platform",
    description:
      "Frontend architecture and product consulting for an evolving web and mobile platform.",
    image: "/projects/mortified.svg",
    categories: ["Web", "Mobile", "Systems & Architecture"],
    stack: ["React", "Product Strategy", "Design Systems", "Mobile UX"],
    github: "https://github.com/josephetim/mortified",
    live: "https://www.themortifiedone.org",
    problem:
      "A growing platform needed a coherent frontend foundation that could support current web needs and a future mobile launch.",
    approach:
      "Aligned interface architecture, component structure, product behavior, and performance priorities across product and design stakeholders.",
    decisions: [
      "Designed components around future reuse rather than one-off screens.",
      "Made mobile product implications part of web architecture discussions.",
      "Kept technical decisions tied to product growth and usability.",
    ],
    challenges: [
      "Translating evolving product concepts into stable implementation boundaries.",
      "Planning for growth without introducing premature complexity.",
    ],
    impact: [
      "Established a scalable frontend direction.",
      "Improved alignment between product, design, and engineering.",
    ],
  },
  {
    id: "trading-economics",
    title: "Economic Indicator Comparison",
    description:
      "An interactive interface for comparing economic indicators through a data-rich API.",
    image: "/projects/data.svg",
    categories: ["Web", "Open Source"],
    stack: ["JavaScript", "REST APIs", "Data Visualization"],
    github:
      "https://github.com/josephetim/trading-economics-indicator-comparison",
    live: "https://trading-economics-indicator-comparison.vercel.app",
    problem:
      "Raw economic data is difficult to compare quickly when presented as disconnected records.",
    approach:
      "Built a concise comparison experience around Trading Economics data and clear interaction states.",
    decisions: [
      "Prioritized comparison clarity over dashboard density.",
      "Made asynchronous data states explicit.",
    ],
    challenges: [
      "Presenting dense economic data without overwhelming the interface.",
      "Handling external API states predictably.",
    ],
    impact: [
      "Turned API data into an approachable decision-support interface.",
      "Published a working public demo.",
    ],
  },
  {
    id: "chronos-api",
    title: "Chronos API",
    description:
      "A REST API for timestamp conversion, durations, leap years, ages, events, and localization.",
    image: "/projects/api.svg",
    categories: ["Systems & Architecture", "Open Source"],
    stack: ["Node.js", "REST API", "JavaScript", "Localization"],
    github: "https://github.com/josephetim/ChronosAPI",
    problem:
      "Time and date operations are deceptively complex and often reimplemented inconsistently across products.",
    approach:
      "Collected common temporal operations behind a consistent RESTful contract.",
    decisions: [
      "Separated endpoint responsibilities by temporal operation.",
      "Included multi-language support as part of the API scope.",
    ],
    challenges: [
      "Normalizing edge cases across timestamps, leap years, and duration calculations.",
      "Keeping API responses consistent across different operation types.",
    ],
    impact: [
      "Created a reusable temporal utility service for application developers.",
      "Documented a broad practical surface beyond basic timestamp conversion.",
    ],
  },
  {
    id: "ai-docs-cli",
    title: "AI Docs CLI",
    description:
      "A developer tool exploring AI-assisted documentation workflows from the command line.",
    image: "/projects/terminal.svg",
    categories: ["AI & LLM", "Open Source"],
    stack: ["Node.js", "CLI", "AI Tooling", "JavaScript"],
    github: "https://github.com/josephetim/ai-docs-cli",
    problem:
      "Documentation often falls behind implementation because updating it interrupts development flow.",
    approach:
      "Explored a command-line workflow that brings AI-assisted documentation closer to the code-writing loop.",
    decisions: [
      "Kept the interface scriptable and terminal-native.",
      "Focused the concept on developer workflow integration.",
    ],
    challenges: [
      "Producing useful context without over-generating generic documentation.",
      "Keeping AI output reviewable by a human maintainer.",
    ],
    impact: [
      "Demonstrates practical experimentation with AI developer tooling.",
      "Provides a foundation for repository-aware documentation automation.",
    ],
  },
  {
    id: "polygram",
    title: "PolyGram",
    description:
      "A social media and digital minting application for photos and video.",
    image: "/projects/social.svg",
    categories: ["Web", "Open Source"],
    stack: ["React", "JavaScript", "Web3", "Media"],
    github: "https://github.com/josephetim/PolyGram",
    problem:
      "Creator products need to combine familiar social interactions with ownership mechanics without making the interface feel technical.",
    approach:
      "Prototyped a media-first social experience with decentralized application and minting concepts.",
    decisions: [
      "Kept creator media central to the experience.",
      "Integrated ownership concepts into recognizable social patterns.",
    ],
    challenges: [
      "Balancing blockchain interactions with understandable product language.",
      "Handling mixed photo and video content.",
    ],
    impact: [
      "Explored the intersection of social UX, media, and digital ownership.",
      "Shows breadth across product interfaces and emerging platforms.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages & Frameworks",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "React Native",
      "Node.js",
    ],
  },
  {
    title: "Systems & Architecture",
    skills: [
      "State management",
      "Data flow design",
      "Multi-tenant systems",
      "Scalable frontend architecture",
      "API contracts",
    ],
  },
  {
    title: "Performance & Reliability",
    skills: [
      "Core Web Vitals",
      "Lighthouse optimization",
      "Production debugging",
      "System stabilization",
      "Cross-browser reliability",
    ],
  },
  {
    title: "Integrations & APIs",
    skills: [
      "REST APIs",
      "Payment integrations",
      "Third-party services",
      "Error handling",
      "AI & LLM tooling",
    ],
  },
  {
    title: "Engineering Practices",
    skills: [
      "Legacy refactoring",
      "Unit testing",
      "Accessibility",
      "Technical SEO",
      "Performance budgets",
    ],
  },
  {
    title: "Collaboration",
    skills: [
      "Technical leadership",
      "Product consulting",
      "Cross-functional delivery",
      "Figma to systems",
      "Stakeholder alignment",
    ],
  },
] as const;

export const certifications = [
  { title: "Programming with JavaScript", issuer: "Meta" },
  { title: "React Native", issuer: "Meta" },
  { title: "Foundations of Project Management", issuer: "Google" },
  { title: "Data Analytics", issuer: "IBM" },
  { title: "Project Management", issuer: "IBM" },
] as const;
