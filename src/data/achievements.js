import { asset } from "../utils/asset";

export const publications = [
  {
    kind: "Book chapter",
    title: "Quantum Machine Learning",
    venue: "Wiley",
    year: "2025",
    note: "Co-author",
    url: "https://onlinelibrary.wiley.com/authored-by/Badakh/Aniket",
  },
  {
    kind: "Industrial design",
    title: "Smart Water Dispenser",
    venue: "Registered Design No. 454830-001 · The Patent Office, Government of India",
    year: "2025",
    note: "Registered",
    url: asset("certificates/smart-water-dispenser-design.pdf"),
  },
  {
    kind: "Copyright",
    title: "Portable AI Security Pod for Event Surveillance",
    venue: "Application No. LD-20395/2025-CO · Copyright Office, Government of India",
    year: "2025",
    note: "Registered",
    url: asset("certificates/ai-security-pod-copyright.pdf"),
  },
];

export const achievements = [
  { title: "2nd Place, Hack-A-Bot Hackathon", detail: "Organised by UiPath." },
  { title: "300+ LeetCode problems", detail: "Data structures and algorithms practice.", url: "https://leetcode.com/u/xLjp90tolx/" },
  { title: "NPTEL Topper, Top 5%", detail: "Python for Data Science." },
  { title: "Zonal level handball", detail: "Selected for the Zonal Level Men's Handball Competition." },
];

export const certifications = [
  { title: "Machine Learning Specialization", issuer: "Stanford · Coursera" },
  { title: "Data Structures & Algorithms", issuer: "Amazon · Coursera" },
  { title: "Object-Oriented Programming in Java", issuer: "Coursera" },
  { title: "Python for Data Science", issuer: "NPTEL" },
  { title: "Cloud Foundations & Cloud Architecting", issuer: "AWS Academy" },
  { title: "ChatGPT & Zapier: Agentic AI for Everyone", issuer: "Online course" },
];

// Newest first.
export const education = [
  {
    level: "Graduation",
    degree: "B.Tech, Information Technology",
    school: "Sanjivani College of Engineering, Kopargaon",
    period: "2022 – 2026",
    score: "CGPA 8.6 / 10",
  },
  {
    level: "Higher Secondary (12th)",
    degree: "Higher Secondary Education",
    school: "Chhatrapati Shivaji Preparatory Jr. College",
    period: "2020 – 2022",
    score: "72.80%",
  },
  {
    level: "Secondary (10th)",
    degree: "Primary & Secondary Education",
    school: "Ramrao Adik Public School",
    period: "2010 – 2020",
    score: "86.80%",
  },
];
