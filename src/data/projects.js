import football from "../assets/projects/football.webp";
import prepportal from "../assets/projects/prepportal.webp";
import yuvatech from "../assets/projects/yuvatech.webp";
import dispenser from "../assets/projects/smart-water-dispenser.webp";
import budgetBuddy from "../assets/projects/budget-buddy.webp";
import commentInsights from "../assets/projects/comment-insights.webp";
import cashFlow from "../assets/projects/cash-flow-minimizer.webp";
import sps from "../assets/projects/stone-paper-scissors.webp";

// Featured projects get a large card. `caseStudy` links to /case-studies/:slug.
export const featuredProjects = [
  {
    slug: "prepportal",
    title: "PrepPortal",
    tagline: "Exam management platform for Dnyanganga Education",
    image: prepportal,
    imageFit: "contain",
    metric: "5,000+ students",
    description:
      "Production platform for mock HSC and SSC exams: registration, hall tickets, result uploads, mark sheets and an admin dashboard, plus automated WhatsApp communication.",
    highlights: [
      "Event-driven WhatsApp pipeline on AWS SQS, Lambda and EventBridge Scheduler: 1,000+ messages per batch with delivery tracking.",
      "Webhook-based WhatsApp chatbot for admissions queries.",
      "S3 file storage, AES-encrypted sensitive documents and API rate limiting.",
    ],
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
    metric: "400+ users",
    description:
      "Team registration, fixtures, Razorpay payments, live scores and points tables for a college tournament, with separate dashboards for each role.",
    highlights: [
      "Role-based access for super admin, admin, team captain and scorer.",
      "Razorpay payments with server-side signature verification; failed payments are recorded too.",
      "Live scores and commentary; fixed sync issues that appeared under concurrent load during the live event.",
    ],
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
    metric: "1–12 month forecasts",
    description:
      "Upload UPI or bank statements as CSV and get categorised spending, balance forecasts and plain-language answers about your money.",
    highlights: [
      "Ingestion and validation layer that parses and de-duplicates UPI and bank transactions.",
      "Hybrid rule-based and ML classifier categorises spending without manual tagging.",
      "Design decision: Llama 3 only interprets questions and explains results; every figure is computed in deterministic code.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Llama 3"],
    links: {},
  },
];

export const moreProjects = [
  {
    title: "Smart Water Dispenser",
    image: dispenser,
    badge: "Registered Design No. 454830-001",
    description:
      "IoT system that reads water and room temperature in real time and drives a cooler and heater through relays to hold the water at a comfortable temperature.",
    stack: ["Arduino", "Sensors", "IoT"],
    links: {},
  },
  {
    title: "Yuvatech Computers",
    image: yuvatech,
    description:
      "Dynamic website for a computer institute: courses, faculty, achievements, an expenses module and a contact form, backed by Node.js and MySQL.",
    stack: ["React.js", "Node.js", "Express.js", "MySQL"],
    links: { live: "https://yuvatech-computers.org.in/" },
  },
  {
    title: "Drone Survey Platform",
    image: null,
    description: "Web platform for planning and managing drone survey missions.",
    stack: ["React.js", "Node.js"],
    links: { live: "https://drone-survey-management.netlify.app/" },
  },
  {
    title: "Note Taking App",
    image: null,
    description: "Lightweight note-taking web app.",
    stack: ["React.js"],
    links: { live: "https://app-note-taking.netlify.app/" },
  },
  {
    title: "Comment Insights Tool",
    image: commentInsights,
    description: "Python tool that runs VADER sentiment analysis on YouTube comments and charts the results.",
    stack: ["Python", "VADER", "Data viz"],
    links: { repo: "https://github.com/Annibadakh/Comment-Insights-Tool" },
  },
  {
    title: "Cash Flow Minimizer",
    image: cashFlow,
    description: "Graph algorithm that settles a group's debts with the fewest transactions by matching the largest creditor and debtor at each step.",
    stack: ["DSA", "Graphs", "Java"],
    links: { repo: "https://github.com/Annibadakh/Cash-Flow-Minimizer-" },
  },
  {
    title: "Budget Buddy",
    image: budgetBuddy,
    description: "Expense tracker with a React frontend and a Node.js backend that stores budgets and expenses.",
    stack: ["React.js", "Node.js"],
    links: { repo: "https://github.com/Annibadakh/budget-buddy" },
  },
  {
    title: "Stone Paper Scissors",
    image: sps,
    description: "Browser game with live scoring against a random computer opponent.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: {
      repo: "https://github.com/Annibadakh/stone-paper-scissor-game",
      live: "https://annibadakh.github.io/stone-paper-scissor-game/",
    },
  },
];
