// Single source of truth for personal details. Phone number is intentionally not published.

export const profile = {
  name: "Aniket Badakh",
  shortName: "aniket",
  role: "Software Engineer",
  focus: "Backend & Full-Stack",
  location: "Maharashtra, India",
  email: "aniketbadakh1212@gmail.com",
  resume: "/Aniket_Badakh_Resume.pdf",
  current: { title: "Software Developer I", company: "FirstCry.com", url: "https://www.firstcry.com/" },
  headline: "I build production systems that ship, scale and stay up.",
  intro:
    "Software engineer working with Node.js, TypeScript, React.js, SQL and AWS. I build production web applications and own them end to end, from requirements through QA, deployment and production support.",
  about: [
    "I'm a software engineer with a B.Tech in Information Technology (CGPA 8.6) and experience across a full-time role, an internship and freelance product work.",
    "Most of my work is on the backend: event-driven AWS services with SQS, Lambda and EventBridge, payment integrations, APIs secured with JWT and role-based access control, and LLMs wired into query interfaces. I'm comfortable on the frontend too, with React and Tailwind CSS.",
    "I like owning delivery end to end: gathering requirements, writing unit tests, running QA and UAT with the client, deploying, documenting, and fixing whatever breaks in production.",
  ],
  principles: [
    { title: "Own it end to end", text: "Requirements, tests, QA/UAT, deployment, docs and production support." },
    { title: "Deterministic where it matters", text: "Money and scores stay in plain, testable code. AI and UI sit on top." },
    { title: "Secure by default", text: "JWT, role-based access, input validation, audit logs and rate limits." },
  ],
  socials: {
    github: "https://github.com/Annibadakh",
    linkedin: "https://www.linkedin.com/in/aniket-badakh",
    leetcode: "https://leetcode.com/u/xLjp90tolx/",
    coursera: "https://www.coursera.org/learner/aniket-badakh",
    wiley: "https://onlinelibrary.wiley.com/authored-by/Badakh/Aniket",
  },
  // Formspree endpoint carried over from v1. Not a secret: it is visible in the page either way.
  // Override per deploy with VITE_FORMSPREE_ENDPOINT if you create a separate form for previews.
  formEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/mwkggday",
};

export const stats = [
  { value: 5000, suffix: "+", label: "students served by PrepPortal" },
  { value: 1000, suffix: "+", label: "WhatsApp messages per batch" },
  { value: 400, suffix: "+", label: "users at a live football event" },
  { value: 300, suffix: "+", label: "LeetCode problems solved" },
];
