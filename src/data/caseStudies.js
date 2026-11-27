// Case studies rendered at /case-studies/:slug.
// `architecture` is drawn as a left-to-right flow of lanes; each lane holds one or more nodes.

export const caseStudies = [
  {
    slug: "football-tournament-manager",
    title: "Football Tournament Manager",
    // Short decision record shown on the home page.
    adr: {
      context: "Entry fees had to be collected online and trusted before a team could play.",
      decision:
        "Create Razorpay orders on the server and verify every payment signature there; record failures as well as successes.",
      why: "The browser can be tampered with. Server-side verification closes the easiest way to fake a paid registration.",
      result: "Registration, payments, fixtures and live scores ran through the app for 400+ users.",
    },
    subtitle: "Running a live college tournament for 400+ users on one full-stack app",
    period: "2025",
    role: "Solo developer: design, frontend, backend, deployment",
    links: {
      live: "https://maidaanapp.netlify.app/",
      repo: "https://github.com/Annibadakh/football-tournament-manager-frontend",
    },
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "Razorpay", "JWT"],
    metrics: [
      { value: "400+", label: "users during the event" },
      { value: "4", label: "role-based dashboards" },
      { value: "30 s", label: "live score refresh" },
    ],
    problem:
      "Sanjivani's Football Unity Cup 2025 needed one place for organisers, teams and spectators: team registration, entry-fee collection, fixtures and live scores across a multi-day event.",
    architecture: [
      { label: "Clients", nodes: ["Public site", "Admin / captain / scorer dashboards"] },
      { label: "API", nodes: ["Express REST API", "JWT + role checks"], hot: true },
      { label: "Services", nodes: ["Razorpay orders & verify", "Photo uploads"] },
      { label: "Data", nodes: ["MySQL"] },
    ],
    flows: [
      {
        title: "Entry-fee payment",
        steps: [
          "Captain starts payment; the API creates a Razorpay order.",
          "Razorpay Checkout collects the payment in the browser.",
          "The API verifies the payment signature on the server before marking the team paid.",
          "Failed or cancelled payments are recorded too, so admins can follow up.",
        ],
      },
      {
        title: "Live match updates",
        steps: [
          "The scorer changes match status (start, pause, end) and logs goals and fouls.",
          "The public live page refreshes every 30 seconds and skips a refresh while the previous one is still running, so requests never pile up.",
          "A separate commentary feed shows events as they're logged.",
        ],
      },
    ],
    decisions: [
      {
        title: "Four roles, one app",
        text: "Super admin, admin, team captain and scorer each get their own dashboard behind protected routes. Sessions expire automatically after an hour.",
      },
      {
        title: "Verify payments on the server",
        text: "The browser never decides whether a payment succeeded. The API checks Razorpay's signature first, which closes the easiest way to fake a paid registration.",
      },
      {
        title: "Polling over sockets",
        text: "A guarded 30-second poll was simpler to host and good enough for football scores. The guard stopped duplicate requests when the API slowed under load.",
      },
      {
        title: "Exports people actually use",
        text: "Fixtures, team lists and points tables download as PDFs, because organisers printed and shared them on WhatsApp.",
      },
    ],
    outcome: [
      "Used to run the whole tournament: registration, payments, fixtures and live scores.",
      "Fixed data-sync issues that surfaced under concurrent load during the live event.",
      "Tested registration, payment and score flows end to end before go-live.",
    ],
  },
  {
    slug: "prepportal-messaging",
    title: "PrepPortal messaging pipeline",
    adr: {
      context: "Batches of 1,000+ WhatsApp messages, often scheduled, sent from an app that must stay responsive.",
      decision:
        "Enqueue sends on AWS SQS and process them with Lambda workers triggered by EventBridge Scheduler; store delivery status per message.",
      why: "A queue absorbs bursts and retries failures; serverless workers scale with exam-time spikes and cost nothing in between.",
      result: "1,000+ messages per batch with scheduling and delivery tracking for 5,000+ students.",
    },
    subtitle: "Event-driven WhatsApp delivery for an exam platform serving 5,000+ students",
    period: "2025 – 2026",
    role: "Freelance developer for Dnyanganga Education: design, build, deployment and support",
    links: {
      live: "https://dnyangangaeducation.com/",
      repo: "https://github.com/Annibadakh/dnyanganga-eduaction-frontend",
    },
    stack: ["Node.js", "AWS SQS", "AWS Lambda", "EventBridge Scheduler", "AWS S3", "MySQL", "WhatsApp API"],
    metrics: [
      { value: "5,000+", label: "students on the platform" },
      { value: "1,000+", label: "messages per batch" },
      { value: "4", label: "AWS services wired together" },
    ],
    problem:
      "PrepPortal had to send hall tickets, reminders and results to thousands of students on WhatsApp, often at a fixed time. Sending them inside a web request would be slow, would run into provider rate limits and would leave no record of what was delivered.",
    architecture: [
      { label: "Trigger", nodes: ["Admin dashboard", "EventBridge Scheduler"] },
      { label: "Producer", nodes: ["Node.js API"], hot: true },
      { label: "Queue", nodes: ["AWS SQS"], hot: true },
      { label: "Workers", nodes: ["AWS Lambda"] },
      { label: "Delivery", nodes: ["WhatsApp API", "Status webhook → DB"] },
    ],
    flows: [
      {
        title: "Scheduled batch send",
        steps: [
          "An admin picks a template and audience, then sends now or schedules it.",
          "EventBridge Scheduler fires at the chosen time; the API turns the batch into queue messages.",
          "Lambda workers take messages off SQS and call the WhatsApp API at a controlled rate.",
          "Delivery status comes back by webhook and is stored, so admins can see what was delivered.",
        ],
      },
      {
        title: "Admissions chatbot",
        steps: [
          "Students message the WhatsApp number with questions.",
          "A webhook receives each message and replies with admissions information.",
        ],
      },
    ],
    decisions: [
      {
        title: "Queue instead of looping in the request",
        text: "The API only enqueues. SQS absorbs bursts, retries failed sends and keeps the dashboard responsive while a batch of 1,000+ goes out.",
      },
      {
        title: "Serverless workers",
        text: "Lambda scales with the queue and costs nothing between batches, which suited a client whose traffic spikes around exams and results.",
      },
      {
        title: "Track every message",
        text: "Delivery status is stored per message, so the team can answer “did my hall ticket arrive?” without guessing.",
      },
      {
        title: "Protect the edges",
        text: "Files go to S3, sensitive documents are encrypted, and public endpoints are rate-limited.",
      },
    ],
    outcome: [
      "1,000+ WhatsApp messages per batch with scheduling and delivery tracking.",
      "Ran QA/UAT before every release; wrote the deployment docs and a user manual.",
      "Handled production support and client communication through the engagement.",
    ],
  },
];

export const findCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);
