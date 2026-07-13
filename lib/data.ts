// ============================================================================
// SITE CONTENT — edit everything here. No need to touch component files.
// ============================================================================

export const profile = {
  name: "Saima Kapoor",
  tagline: "CSE Student • Building Intelligent Solutions • Future Founder",
  location: "India",
  email: "saimakapoor@gmail.com",
  linkedin: "www.linkedin.com/in/saima-kapoor-4a976a319",
  github: "https://github.com/SaimaKapoor",
  resumeUrl: "c:\Users\SAIMA KAPOOR\Downloads\SAIMA_RESUME.pdf", 
  photoUrl: "", // e.g. "/photo.jpg" — leave empty to use the placeholder avatar
  about: `I'm a third-year Computer Science student who got hooked on AI/ML the
  moment I realized models could be taught to reason about my problems, not just classify cats and dogs. What pulls me in is the gap
  between a clever idea and a system that actually works in the real world:
  the messy data, the failed experiments, the late-night debugging that
  eventually clicks. I'm drawn to research because it rewards curiosity, and
  to building products because it forces that curiosity to ship. Long term,
  I want to found something that uses intelligent systems to solve a problem
  people genuinely feel and I'm spending these years collecting the
  research instincts, engineering chops, and product sense to get there.`,
};

export const stats = [
  { label: "Projects shipped", value: 6, suffix: "+" },
  { label: "Research areas explored", value: 4 },
  { label: "Hackathons & workshops", value: 5, suffix: "+" },
  { label: "Years until graduation", value: 2 },
];

export const skills = {
  Programming: ["Python", "C", "HTML", "CSS", "JavaScript"],
  "AI & ML": [
    "Machine Learning",
    "Data Preprocessing",
    "scikit-learn",
    "Pandas",
    "NumPy",
    "Prompt Engineering",
    "LLM Applications",
  ],
  Tools: ["Git", "GitHub", "Docker", "Linux", "REST APIs", "VS Code"],
  "Soft Skills": [
    "Problem Solving",
    "Leadership",
    "Communication",
    "Teamwork",
    "Analytical Thinking",
  ],
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github?: string;
  demo?: string;
  category: "AI/ML" | "Web/Backend" | "Research" | "Systems";
};

// Add a new project by adding another object to this array.
export const projects: Project[] = [
  {
    slug: "tonelink",
    title: "ToneLink",
    description:
      "AI-powered influencer matchmaking platform that pairs brands with creators using machine learning over audience, tone, and engagement signals.",
    tech: ["Python", "scikit-learn", "Pandas", "REST APIs"],
    features: [
      "Embedding-based similarity matching between brand briefs and creator profiles",
      "Automated tone/voice scoring from past content",
      "Ranked recommendation pipeline with explainable match scores",
    ],
    github: "https://github.com/SaimaKapoor/Influencer-ML-Pipeline",
    demo: "#",
    category: "AI/ML",
  },
  {
    slug: "ai-debugging-assistant",
    title: "AI Debugging Assistant",
    description:
      "A Copilot-inspired assistant that reads stack traces and surrounding code to suggest likely root causes and fixes.",
    tech: ["Python", "LLM Applications", "Prompt Engineering"],
    features: [
      "Context-aware prompt construction from error logs + code",
      "Suggests minimal, targeted fixes rather than full rewrites",
      "Iterative refinement loop based on developer feedback",
    ],
    github: "https://github.com/SaimaKapoor/runtimequeens-agent",
    demo: "#",
    category: "AI/ML",
  },
  {
    slug: "smart-storage-optimizer",
    title: "Smart Storage Optimizer",
    description:
      "A Python + FastAPI application that analyzes storage, detects duplicate files, performs intelligent classification, and exposes REST APIs.",
    tech: ["Python", "FastAPI", "REST APIs", "Docker"],
    features: [
      "Hash-based duplicate detection across large directories",
      "Rule + heuristic based file classification",
      "Clean REST API for triggering scans and fetching reports",
    ],
    github: "https://github.com/SaimaKapoor/Smart-Storage-Optimizer",
    demo: "#",
    category: "Systems",
  },
  {
    slug: "drug-response-prediction",
    title: "Drug Response Prediction Research",
    description:
      "A machine learning research project comparing XGBoost-based drug response prediction with modern deep learning approaches on biomedical datasets.",
    tech: ["Python", "XGBoost", "Deep Learning", "Pandas", "NumPy"],
    features: [
      "Benchmarked gradient-boosted trees against neural baselines",
      "Feature engineering over biomedical/genomic datasets",
      "Comparative evaluation on prediction accuracy and generalization",
    ],
    github: "https://colab.research.google.com/drive/1RrrmPuM2Yjp4-adEX4rOxHJnso6YIhdA#scrollTo=vxJnMlmvyw0W",
    category: "Research",
  },
  {
    slug: "library-management-system",
    title: "Library Management System",
    description:
      "Python-based management system demonstrating clean OOP design and file handling for book, member, and lending records.",
    tech: ["Python", "OOP", "File Handling"],
    features: [
      "Modular class design for books, members, and transactions",
      "Persistent storage via structured file handling",
      "Search, issue, and return workflows",
    ],
    github: "#",
    category: "python",
  },
  {
    slug: "music-management-system",
    title: "Music Management System",
    description:
      "A C-based application that organizes and manages a music library using core data structures.",
    tech: ["C", "Data Structures"],
    features: [
      "Linked-list based library storage",
      "Sorting and searching by artist, title, and genre",
      "Memory-conscious implementation in pure C",
    ],
    github: "#",
    category: "Systems",
  },
];

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
  type: "project" | "workshop" | "hackathon" | "research" | "milestone";
};

export const timeline: TimelineItem[] = [
  {
    date: "2024",
    title: "Started B.Tech in Computer Science",
    description: "Began undergraduate studies in CSE but began interest in AI/ML.",
    type: "milestone",
  },
  {
    date: "2025",
    title: "First ML workshop",
    description: "Conducted a workshop as the head of AIML CLUB on TINY RECURSIVE MODELS to anaudience of 350 students.",
    type: "workshop",
  },
  {
    date: "2025",
    title: "Campus hackathon",
    description: "Built a rapid prototype placeholder, of a stock predictor in under 24 hrs.",
    type: "hackathon",
  },
  {
    date: "2026",
    title: "Smart Storage Optimizer shipped",
    description: "Completed a full-stack FastAPI application from design to deployment.",
    type: "project",
  },
   {
    date: "2026",
    title: "Campus hackathon",
    description: "Built a copilot inspired coding assistant, in under 8 hrs.",
    type: "hackathon",
  },
   {
    date: "2026",
    title: "Drug Response Prediction research begins",
    description: "Started comparing XGBoost and deep learning approaches on biomedical datasets.",
    type: "research",
  },
  {
    date: "2026 →",
    title: "Research publication & internship goals",
    description: "Targeting an AI/ML research internship and a first publication or preprint.",
    type: "milestone",
  },
];

export const education = {
  degree: "B.Tech in Computer Science",
  focus: "Artificial Intelligence & Machine Learning",
  institution: "PES University",
  year: "3rd Year (Class of 2028)",
  highlights: [
    "Coursework: Data Structures, Algorithms, Computer Networks, Operating systems, Microprocessor and Computer Architecture",
    "Relevant electives: tbd ",
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
