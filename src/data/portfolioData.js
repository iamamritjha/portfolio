export const personalInfo = {
  name: "Amrit Prakash",
  role: "Full-Stack Developer",
  headline: "Hi, I’m Amrit Prakash",
  subheadline: "I build clean, reliable full-stack apps, from secure backends with Redis caching to responsive React interfaces.",
  statusPill: "Full-Stack Developer · Problem Solver",
  location: "Kharar, Punjab, India",
  email: "iamamritjha@gmail.com",
  phone: "+91-6206452204",
  github: "https://github.com/iamamritjha",
  linkedin: "https://www.linkedin.com/in/amrit-prakash-33b557257",
  leetcode: "https://leetcode.com/iamamritjha/",
  portfolioUrl: "https://amritprakash.netlify.app",
  resumePdf: "/Amrit_Resume.pdf",
  avatarImage: "/images/avatar.png",
  bio: [
    "I’m an MCA student at Chandigarh University (CGPA 7.93), building on a BCA from Purnea University (76%). I work across the full stack with React, Node.js, Express, MongoDB, and Python, and I like projects where performance and security actually matter, like caching with Redis and designing clean APIs.",
    "Outside of projects, I practice problem solving on LeetCode, with 190+ problems solved and 30-day unbroken streaks, which keeps my fundamentals sharp."
  ]
};

export const stats = [
  { value: "190+", label: "LeetCode Problems", sub: "Arrays, Graphs, DP & Trees" },
  { value: "4 Badges", label: "LeetCode Milestones", sub: "100-Day, 50-Day & Monthly" },
  { value: "Top 14", label: "CipherHunt Rank", sub: "Among 100+ Competing Teams" },
  { value: "7.93", label: "MCA CGPA", sub: "Chandigarh University" }
];

export const leetcodeBadges = [
  {
    id: "100-days",
    title: "100 Days Badge",
    year: "2026",
    category: "Annual Consistency",
    description: "Awarded by LeetCode for solving algorithmic problems across 100 distinct days, demonstrating continuous discipline and long-term problem-solving stamina.",
    glowColor: "from-amber-500/20 to-yellow-500/5",
    borderColor: "border-amber-500/30 hover:border-amber-400/60",
    badgeType: "century",
    accent: "text-amber-400",
    pillBg: "bg-amber-500/10 text-amber-300 border-amber-500/20"
  },
  {
    id: "50-days",
    title: "50 Days Badge",
    year: "2026",
    category: "Consistency Milestone",
    description: "Official LeetCode achievement for active daily problem solving across 50 days, building core mastery in data structures.",
    glowColor: "from-sky-500/20 to-indigo-500/5",
    borderColor: "border-sky-500/30 hover:border-sky-400/60",
    badgeType: "half-century",
    accent: "text-sky-400",
    pillBg: "bg-sky-500/10 text-sky-300 border-sky-500/20"
  },
  {
    id: "september-30",
    title: "September Daily Challenge",
    year: "30 / 30 Days",
    category: "Monthly Challenge",
    description: "Completed every single daily challenge problem throughout the month of September without missing a day (100% completion rate).",
    glowColor: "from-emerald-500/20 to-teal-500/5",
    borderColor: "border-emerald-500/30 hover:border-emerald-400/60",
    badgeType: "monthly",
    accent: "text-emerald-400",
    pillBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
  },
  {
    id: "streak-30",
    title: "30 Days Streak Badge",
    year: "Continuous",
    category: "Unbroken Daily Streak",
    description: "Maintained a continuous, unbroken 30-day streak of active LeetCode submissions and algorithmic problem solving.",
    glowColor: "from-orange-500/20 to-red-500/5",
    borderColor: "border-orange-500/30 hover:border-orange-400/60",
    badgeType: "streak",
    accent: "text-orange-400",
    pillBg: "bg-orange-500/10 text-orange-300 border-orange-500/20"
  }
];

export const competitiveMilestones = [
  {
    title: "14th Rank — CipherHunt Competition",
    detail: "Secured rank 14 among 100+ competing engineering teams through fast-paced algorithmic problem solving and rapid debugging.",
    tag: "National / University Level"
  },
  {
    title: "190+ Algorithmic Problems Solved",
    detail: "Regularly practice Data Structures & Algorithms with a focus on Arrays, Binary Trees, Graph Traversal (BFS/DFS), Dynamic Programming, and Two Pointers.",
    tag: "LeetCode & Competitive Platforms"
  }
];

export const projects = [
  {
    id: "lifeledger",
    title: "LifeLedger — AI Health Intelligence",
    badge: "Flagship Project",
    category: "Full-Stack + AI",
    period: "July 2026 – Present",
    tagline: "Centralized digital health vault unifying clinical records, appointments, and LLM-powered report intelligence.",
    overview: "LifeLedger eliminates fragmented medical histories by creating a single, secure data repository for patients and doctors. Built with role-based access control, distributed Redis caching, and integrated AI medical summarization.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "Cloudinary", "AI APIs"],
    highlights: [
      "Engineered centralized security layer enforcing doctor, patient, and admin privileges across 25+ endpoints.",
      "Integrated LLM summarization pipeline that digests complex medical PDFs into concise patient-friendly summaries and alerts.",
      "Architected relational MongoDB collections for high-speed chronological health timeline retrieval.",
      "Cut redundant database load and notification latency using Redis caching."
    ],
    github: "https://github.com/iamamritjha/LifeLedger_Frontend",
    liveDemo: "https://lifeledger-health.vercel.app/",
    image: "/images/lifeledger-comparison.png",
    featured: true
  },
  {
    id: "finance-tracker",
    title: "Personal Finance & Budget Engine",
    badge: "Full-Stack Python",
    category: "Python + Analytics",
    period: "Oct 2025 – Dec 2025",
    tagline: "Real-time personal finance management engine with interactive burn-rate dashboards and budget auditing.",
    overview: "An end-to-end full-stack personal finance application that allows users to record daily expenses, set category budgets, and monitor real-time spending habits with interactive visualizations.",
    stack: ["Python", "Flask", "MySQL", "Bootstrap", "jQuery", "Chart.js"],
    highlights: [
      "Interactive Chart.js analytics dashboards visualizing monthly burn trends, category-wise breakdowns, and real-time cash balance.",
      "Robust user session management and password hashing in Flask for confidential transaction tracking.",
      "Optimized MySQL schema and parameterized queries ensuring strict ACID transaction compliance."
    ],
    github: "https://github.com/iamamritjha/Personal-Finance-Tracker",
    liveDemo: null,
    featured: true
  },
  {
    id: "flight-route",
    title: "SkyRoute — Graph Corridor Pathfinder",
    badge: "Algorithms & Core",
    category: "Algorithms",
    period: "2025",
    tagline: "Dijkstra-powered shortest-path corridor optimizer computing fuel-efficient flight routings.",
    overview: "High-performance navigational pathfinding engine analyzing 50+ weighted airport nodes to compute minimal layover costs, total flight duration, and dynamic airway weather constraints.",
    stack: ["Java", "C++", "Graph Theory", "Dijkstra Algorithm", "Min-Heap", "OOP"],
    highlights: [
      "Engineered Dijkstra's pathfinding using adjacency list graph representations and priority queues with O((V+E) log V) efficiency.",
      "Simulated real-time dynamic rerouting around turbulence zones and airport congestion bottlenecks."
    ],
    github: "https://github.com/iamamritjha/Flight_Route_Backend",
    liveDemo: null,
    featured: true
  },
  {
    id: "chai-code-pos",
    title: "Chai Code Café POS & Inventory",
    badge: "Full-Stack System",
    category: "Management",
    period: "2025",
    tagline: "Rapid point-of-sale system with kitchen order ticketing and automated inventory decrement alerts.",
    overview: "Streamlined café management solution designed for instant order dispatch, real-time sales auditing, and low-stock ingredient alerts to eliminate operational bottlenecks.",
    stack: ["Node.js", "Express.js", "MongoDB", "REST APIs", "TailwindCSS"],
    highlights: [
      "Sub-second order dispatch workflow with split billing and automated sales tax calculation.",
      "Inventory monitoring hooks triggering visual warnings whenever raw materials drop below safe thresholds."
    ],
    github: "https://github.com/iamamritjha/Chai-Code-Caf-Management-System",
    liveDemo: null,
    featured: false
  }
];

export const skillCategories = [
  {
    title: "Frontend Engineering",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5 & Modern CSS", "TailwindCSS", "Bootstrap", "jQuery"]
  },
  {
    title: "Backend & Systems",
    skills: ["Node.js", "Express.js", "Python", "Flask", "REST APIs"]
  },
  {
    title: "Databases & Caching",
    skills: ["MongoDB", "MySQL", "Redis (Distributed Caching)"]
  },
  {
    title: "Core Computer Science",
    skills: ["Data Structures & Algorithms", "190+ LeetCode Solved", "OOP", "DBMS", "Operating Systems", "Computer Networks"]
  },
  {
    title: "Tools & Workflow",
    skills: ["Git & GitHub", "Postman", "Cloudinary", "AI & LLM APIs", "Vite", "VS Code"]
  }
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Chandigarh University",
    score: "CGPA: 7.93",
    period: "2025 – Expected 2027",
    details: "Focusing on Distributed Systems, Cloud Architectures, Software Engineering, and Advanced Algorithms."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Purnea University",
    score: "76%",
    period: "2021 – 2024",
    details: "Foundational computing education covering C, C++, Data Structures, Database Systems, and Web Technologies."
  },
  {
    degree: "Class XII (Senior Secondary, BSEB)",
    institution: "+2 High School, BMP-7 Katihar",
    score: "76.6%",
    period: "2019 – 2021",
    details: "Mathematics, Physics, and Computer Science."
  },
  {
    degree: "Class X (Matriculation, BSEB)",
    institution: "High School, BMP-7 Katihar",
    score: "75.8%",
    period: "2018 – 2019",
    details: "Distinction in Mathematics and Sciences."
  }
];

export const certifications = [
  "Introduction to Data Science",
  "Introduction to AI & Deep Learning",
  "Introduction to Prompt Engineering",
  "Introduction to NLP",
  "Robotic Process Automation",
  "Introduction to Generative AI"
];
