import football from "../assets/projects/football.webp";
import prepportal from "../assets/projects/prepportal.webp";

// Featured projects use the Problem → What I built → Impact card.
// `flow` is the small system strip; a trailing * highlights a node.
// `caseStudy` links to /case-studies/:slug.
export const featuredProjects = [
  {
    slug: "prepportal",
    title: "PrepPortal",
    tagline: "Exam management platform for Dnyanganga Education",
    image: prepportal,
    imageFit: "contain",
    host: "dnyangangaeducation.com",
    problem:
      "Thousands of students needed registration, hall tickets and results online, plus reminders on WhatsApp, often at a fixed time and without slowing the app down.",
    built: [
      "Registration, hall tickets, result uploads and mark sheets with an admin dashboard.",
      "Event-driven WhatsApp pipeline on AWS SQS, Lambda and EventBridge Scheduler, plus a webhook chatbot for admissions.",
      "S3 file storage, encrypted sensitive documents and API rate limiting.",
    ],
    impact: { value: "5,000+", label: "students served", note: "1,000+ WhatsApp messages per batch, with delivery tracking." },
    flow: ["Admin", "Node.js API*", "SQS*", "Lambda", "WhatsApp"],
    stack: ["React.js", "Node.js", "Express.js", "MySQL", "AWS SQS", "Lambda", "S3"],
    links: {
      live: "https://dnyangangaeducation.com/",
      repo: "https://github.com/Annibadakh/dnyanganga-eduaction-frontend",
    },
    caseStudy: "prepportal-messaging",
  },
  {
    slug: "football-tournament-manager",
    title: "Football Tournament Manager",
    tagline: "Full-stack platform for Sanjivani's Football Unity Cup",
    image: football,
    host: "sanjivanifootball.netlify.app",
    problem:
      "Organisers, teams and spectators needed one place for registration, entry fees, fixtures and live scores during a multi-day tournament.",
    built: [
      "Four role-based dashboards: super admin, admin, team captain and scorer.",
      "Razorpay payments verified on the server; failed payments are recorded too.",
      "Live scores and commentary with a guarded 30-second refresh, plus PDF exports of fixtures and standings.",
    ],
    impact: { value: "400+", label: "users at the live event", note: "Ran the whole tournament; fixed sync issues under concurrent load." },
    flow: ["React", "Express API*", "Razorpay verify", "MySQL"],
    stack: ["React.js", "Node.js", "Express.js", "MySQL", "Razorpay", "Tailwind CSS"],
    links: {
      live: "https://sanjivanifootball.netlify.app/",
      repo: "https://github.com/Annibadakh/football-tournament-manager-frontend",
    },
    caseStudy: "football-tournament-manager",
  },
  {
    slug: "ai-personal-cfo",
    title: "AI Personal CFO",
    tagline: "Personal finance assistant for UPI and bank data",
    image: null,
    host: "ai-personal-cfo",
    problem:
      "UPI and bank statements arrive as messy CSVs, and categorising spending by hand is tedious, so it's hard to see where the money actually goes.",
    built: [
      "Ingestion and validation layer that parses and de-duplicates UPI and bank transactions.",
      "Hybrid rule-based and ML classifier that categorises spending without manual tagging.",
      "Llama 3 only interprets questions and explains results; every figure comes from deterministic code.",
    ],
    impact: { value: "1–12", label: "month balance forecasts", note: "Plain-language answers backed by numbers you can trust." },
    flow: ["CSV upload", "FastAPI*", "Classifier", "Forecast", "Llama 3"],
    stack: ["Python", "FastAPI", "PostgreSQL", "Llama 3"],
    links: {},
  },
];

// Smaller and older projects, shown as filterable tiles.
// category: web | iot | data | algo | game (data + algo share the "Data & algorithms" filter, game sits under Web apps).
export const moreProjects = [
  // The three featured projects also appear here so the filters show everything.
  {
    title: "PrepPortal",
    category: "web",
    categoryLabel: "Web app",
    description: "Exam management platform for Dnyanganga Education with an event-driven WhatsApp pipeline on AWS. 5,000+ students.",
    stack: ["React.js", "Node.js", "AWS SQS", "Lambda"],
    links: {
      live: "https://dnyangangaeducation.com/",
      repo: "https://github.com/Annibadakh/dnyanganga-eduaction-frontend",
    },
  },
  {
    title: "Football Tournament Manager",
    category: "web",
    categoryLabel: "Web app",
    description: "Registration, Razorpay payments, fixtures and live scores for a college tournament with 400+ users.",
    stack: ["React.js", "Node.js", "MySQL", "Razorpay"],
    links: {
      live: "https://sanjivanifootball.netlify.app/",
      repo: "https://github.com/Annibadakh/football-tournament-manager-frontend",
    },
  },
  {
    title: "AI Personal CFO",
    category: "data",
    categoryLabel: "AI & data",
    description: "Categorises UPI and bank transactions and forecasts balances 1–12 months ahead, with Llama 3 explaining the results.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Llama 3"],
    links: {},
  },
  {
    title: "Smart Water Dispenser",
    category: "iot",
    categoryLabel: "IoT & hardware",
    badge: "Registered Design 454830-001",
    description: "IoT system that reads water and room temperature and drives a cooler and heater to hold the water at a comfortable temperature.",
    stack: ["Arduino", "Sensors", "IoT"],
    links: {},
  },
  {
    title: "Yuvatech Computers",
    category: "web",
    categoryLabel: "Web app",
    description: "Dynamic website for a computer institute: courses, faculty, achievements and an expenses module.",
    stack: ["React.js", "Node.js", "MySQL"],
    links: { live: "https://yuvatech-computers.org.in/" },
  },
  {
    title: "Drone Survey Platform",
    category: "web",
    categoryLabel: "Web app",
    description: "Web platform for planning and managing drone survey missions.",
    stack: ["React.js", "Node.js"],
    links: { live: "https://drone-survey-management.netlify.app/" },
  },
  {
    title: "Note Taking App",
    category: "web",
    categoryLabel: "Web app",
    description: "Lightweight note-taking web app.",
    stack: ["React.js"],
    links: { live: "https://app-note-taking.netlify.app/" },
  },
  {
    title: "Comment Insights Tool",
    category: "data",
    categoryLabel: "Data",
    description: "VADER sentiment analysis of YouTube comments, with charts of the results.",
    stack: ["Python", "VADER"],
    links: { repo: "https://github.com/Annibadakh/Comment-Insights-Tool" },
  },
  {
    title: "Cash Flow Minimizer",
    category: "algo",
    categoryLabel: "Algorithms",
    description: "Graph algorithm that settles a group's debts with the fewest transactions.",
    stack: ["Java", "Graphs"],
    links: { repo: "https://github.com/Annibadakh/Cash-Flow-Minimizer-" },
  },
  {
    title: "Budget Buddy",
    category: "web",
    categoryLabel: "Web app",
    description: "Expense tracker with a React frontend and a Node.js backend.",
    stack: ["React.js", "Node.js"],
    links: { repo: "https://github.com/Annibadakh/budget-buddy" },
  },
  {
    title: "Stone Paper Scissors",
    category: "game",
    categoryLabel: "Game",
    description: "Browser game with live scoring against the computer.",
    stack: ["JavaScript"],
    links: {
      live: "https://annibadakh.github.io/stone-paper-scissor-game/",
      repo: "https://github.com/Annibadakh/stone-paper-scissor-game",
    },
  },
];
