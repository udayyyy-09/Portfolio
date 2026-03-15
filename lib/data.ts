export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  features?: string[];
  image?: string;
  github?: string;
  demo?: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

// Placeholder data - user will replace with actual content
export const projects: Project[] = [
  {
    id: 1,
    name: "HealthNudge - AI Medical Report Analyzer",
    description: "An AI-powered health management platform with OCR-based medical report parsing, personalized diet plans, and accessibility-focused Text-to-Speech support.",
    technologies: ["Next.js", "Node.js", "MongoDB", "OCR", "OpenAI"],
    features: ["Authentication with Email verification", "OCR-based medical report parsing", "AI-Powered Report Summary using OpenAI APIs", "Text-to-Speech support", "Responsive Dashboard", "AI Chatbot Support"],
    image: "/projects/healthnudge.jpg",
    github: "https://github.com/udayyyy-09/HealthNudge-AI",
    demo: "https://health-ai-plum.vercel.app",
  },
  {
    id: 2,
    name: "TripMate - AI Travel Partner",
    description: "TripMate is an intelligent travel planning assistant that generates personalized itineraries using AI. It helps users plan trips effortlessly by suggesting destinations, activities, and budgets based on their preferences.",
    technologies: ["React.js", "Framer Motion", "Firebase", "OAuth 2.0", "LLM"],
    features: ["AI-Powered Budget-friendly Itinerary", "AI Chatbot Support", "OAuth 2.0 Authentication", "Responsive Dashboard", "Intergrated Map", "Live Weather Update"],
    image: "/projects/tripmate.jpg",
    github: "https://github.com/udayyyy-09/tripplanner",
    demo: "https://tripmate-olive.vercel.app",
  },
  {
    id: 3,
    name: "Retail Analytics and Forecasting Platform",
    description: "A Cloud deployed, retail analysis and future forecasting platform using Machine Learning models followed by EDA for visualization cleaning pipeline, implementation pipeline and MySql for business insight. Redis for cache memory suitable for production level and Dashboard using FastApi for faster response.",
    technologies: ["Python", "FastAPI", "MySql", "Redis", "Machine Learning", "EDA", "AWS"],
    features: ["Cloud deployed", "Redis Caching", "Business Insight Analytics", "Cloud ML Pipeline", "FastAPI Dashboard"],
    image: "/projects/retail-analytics.jpg",
    github: "https://github.com/udayyyy-09/RetailAnalysisWithForecasting",
    demo: "#",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Zonomo",
    role: "Frontend Developer (Internship)",
    duration: "May 2025 - July 2025",
    description: "Built responsive and user-centric web interfaces using Next.js, Tailwind CSS, Framer Motion, and Lenis while designing smooth customer and professional workflows to ensure seamless UX across devices. Collaborated with founders and cross-functional teams in weekly strategy and design reviews, contributing to product decisions and continuously refining UI/UX through improved layouts, intuitive interactions, and optimized user journeys.",
    technologies: ["React.js", "Next.js", "SEO", "Framer Motion", "Cross-functional teams", "Team Leadership"],
  },
  {
    id: 2,
    company: "Home First Finance Company",
    role: "Full Stack Developer (Internship)",
    duration: "Mar 2026 - Present",
    description: "Developing full-stack solutions leveraging modern web technologies and frameworks to deliver scalable applications.",
    technologies: ["React.js", "Node.js", "MongoDB", "AWS"],
  },
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "SEO", "Team Leadership", "Cross-functional teams"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Django"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Antigravity"],
  },
];

export const socialLinks = {
  github: "https://github.com/udayyyy-09",
  linkedin: "https://www.linkedin.com/in/uday-chaudhary-b24b08290",
  email: "udaychaudhary419@gmail.com",
  twitter: "https://twitter.com",
};

// Resume - update the URL to your hosted resume file
export const resumeUrl = "https://drive.google.com/file/d/1IJ0MexCkRP4uYfsAP_YlOpHLtZ1Kzqnd/view?usp=drive_link"; // Replace with your resume URL or upload to /public
