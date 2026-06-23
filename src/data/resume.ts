export const personalInfo = {
  name: "Tien Phong Nguyen",
  displayName: "Phong Nguyen",
  tagline: "Full-Stack Developer & AI Engineer",
  bio: "Computer Science graduate from UBC Okanagan with a strong foundation in full-stack web development and AI engineering. I build scalable applications using Next.js, TypeScript, and React, while leveraging hands-on experience in computer vision and machine learning to solve real-world problems.",
  email: "ntp190704@gmail.com",
  github: "https://github.com/P-nguye",
  linkedin: "https://linkedin.com/in/nguyen-phong",
  location: "Kelowna, BC, Canada",
  resumeUrl: "/Phong-Nguyen-Resume.pdf",
};

export type SkillCategory = {
  category: string;
  icon: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Frontend & Web",
    icon: "layout",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend & Database",
    icon: "server",
    items: ["Node.js", "Prisma", "SQL", "MongoDB", "PHP", "Docker"],
  },
  {
    category: "AI & Machine Learning",
    icon: "brain",
    items: ["Python", "PyTorch", "TensorFlow", "OpenCV", "Computer Vision", "Machine Learning"],
  },
  {
    category: "Languages & Tools",
    icon: "code",
    items: ["Java", "C", "C#", "Assembly", "Bash", "Git", "CI/CD", "Jest", "LaTeX", "Android Studio"],
  },
];

export type ProjectCategory = "Web" | "AI" | "Systems";

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tech: string[];
  category: ProjectCategory;
  github?: string;
  live?: string;
  featured: boolean;
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: "ublog",
    title: "UBlog Website",
    shortDescription: "Full-stack blogging platform for UBC news with interactive user engagement.",
    fullDescription:
      "A full-stack blogging web application built for UBC news, featuring interactive user engagement through article creation, updates, viewing, and commenting systems. Implemented a modern tech stack with containerization and automated testing.",
    tech: ["Next.js", "TypeScript", "Prisma", "Docker", "Jest", "CSS"],
    category: "Web",
    github: "https://github.com/P-nguye",
    featured: true,
    highlights: [
      "Full-stack architecture with Next.js App Router and Prisma ORM",
      "Docker containerization for consistent development and deployment",
      "Automated Jest testing integrated into CI/CD pipeline",
      "Interactive commenting and article management system",
    ],
  },
  {
    id: "game-of-amazons-ai",
    title: "Game of Amazons AI",
    shortDescription: "Monte Carlo Tree Search AI that ranked 2nd in a competitive tournament.",
    fullDescription:
      "Built a sophisticated Monte Carlo Tree Search (MCTS) based AI agent for the Game of Amazons, competing against other students' AI implementations in a tournament setting. The AI demonstrated strong strategic decision-making by achieving 2nd place.",
    tech: ["Java", "Monte Carlo Tree Search", "AI Algorithms", "Game Theory"],
    category: "AI",
    github: "https://github.com/P-nguye",
    featured: true,
    highlights: [
      "Implemented Monte Carlo Tree Search with UCB1 exploration strategy",
      "Achieved 2nd place ranking in a competitive class tournament",
      "Optimized simulation rollouts for time-constrained game decisions",
      "Applied game theory principles for strategic board evaluation",
    ],
  },
  {
    id: "ta-allocation",
    title: "TA Allocation & Management",
    shortDescription: "Web app to streamline Teaching Assistant allocation for the CS department.",
    fullDescription:
      "A responsive web application that assists the Computer Science department at UBC Okanagan in effectively managing Teaching Assistant allocations. Supports manual coordination, tracking, and feedback workflows for department administrators.",
    tech: ["TypeScript", "React", "Prisma", "SQL"],
    category: "Web",
    github: "https://github.com/P-nguye",
    featured: false,
    highlights: [
      "Role-based access for administrators, instructors, and TAs",
      "Real-time allocation tracking and conflict detection",
      "Feedback and performance review workflow system",
      "Responsive design for cross-device usability",
    ],
  },
  {
    id: "flashcard-study",
    title: "Flashcard Study App",
    shortDescription: "Study app with progress tracking, deck sharing, and automated CI pipeline.",
    fullDescription:
      "A flashcard study web app featuring multiple study modes, progress tracking, and deck sharing capabilities. Built with strong software engineering principles including design patterns and automated testing via a CI/CD pipeline.",
    tech: ["React", "TypeScript", "CI/CD", "Jest"],
    category: "Web",
    github: "https://github.com/P-nguye",
    featured: false,
    highlights: [
      "Implemented Factory, Iterator, and Singleton design patterns",
      "Multiple study modes: flashcard, quiz, and spaced repetition",
      "Automated test suite integrated into CI pipeline",
      "Deck sharing and collaboration features",
    ],
  },
  {
    id: "pedestrian-segmentation",
    title: "Pedestrian Instance Segmentation",
    shortDescription: "Computer vision pipeline for real-world pedestrian detection and classification.",
    fullDescription:
      "Developed an instance segmentation algorithm for pedestrian detection using Python and deep learning frameworks. Built a full detection and classification pipeline capable of accurately identifying and segmenting individual pedestrians in real-world scenarios.",
    tech: ["Python", "PyTorch", "OpenCV", "Computer Vision", "Machine Learning"],
    category: "AI",
    github: "https://github.com/P-nguye",
    featured: false,
    highlights: [
      "End-to-end instance segmentation pipeline for pedestrian detection",
      "Accurate individual pedestrian identification in complex scenes",
      "Leveraged PyTorch and OpenCV for image processing and model inference",
      "Evaluated on real-world datasets with robust performance metrics",
    ],
  },
  {
    id: "farm-management",
    title: "Farm Management App",
    shortDescription: "Android app for managing farm crops, schedules, and automation workflows.",
    fullDescription:
      "Built an Android mobile application for managing farm crops and schedules, demonstrating interest in agricultural technology and automation solutions. The app provides farmers with an intuitive interface to track crop status, schedule tasks, and manage resources.",
    tech: ["Android Studio", "Java", "Mobile Development"],
    category: "Systems",
    github: "https://github.com/P-nguye",
    featured: false,
    highlights: [
      "Native Android development with Java and Android Studio",
      "Crop lifecycle tracking with schedule management",
      "Intuitive mobile-first UI for non-technical users",
      "Local data persistence with Android SQLite integration",
    ],
  },
];

export type TimelineEntry = {
  id: string;
  type: "work" | "education";
  title: string;
  org: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  tech?: string[];
};

export const timeline: TimelineEntry[] = [
  {
    id: "freelance",
    type: "work",
    title: "Freelance Web Developer",
    org: "Independent Contractor",
    location: "Kelowna, BC",
    startDate: "May 2026",
    endDate: "Present",
    bullets: [
      "Partnered with stakeholders to translate custom workflows and design requirements into functional, responsive web components",
      "Managed end-to-end planning and full-stack development, ensuring code optimization, data privacy, and clean system integrations",
      "Conducted testing, debugging, and regular code reviews to deliver an optimized end-user experience adhering to web performance standards",
    ],
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    id: "koha",
    type: "work",
    title: "Server",
    org: "Koha Vietnamese Kitchen",
    location: "Kelowna, BC",
    startDate: "Jan 2024",
    endDate: "Present",
    bullets: [
      "Delivered exceptional customer service in a high-volume environment, handling fast-paced client requests and resolving complaints",
      "Collaborated cross-functionally with back-of-house teams to optimize order workflows and maintain strict accuracy under tight time constraints",
    ],
  },
  {
    id: "ubc",
    type: "education",
    title: "BSc. Computer Science",
    org: "University of British Columbia Okanagan",
    location: "Kelowna, BC",
    startDate: "Sep 2022",
    endDate: "Apr 2026",
    bullets: [
      "International Major Entrance Scholarship recipient (2022–2026)",
      "Outstanding International Student Award (2022)",
      "Participant in AI for Social Good Hackathon — built a wildfire indicator app leveraging AI to support public safety (Sep 2024)",
      "Coursework: Algorithms, Data Structures, Machine Learning, Software Engineering, Computer Vision, Operating Systems",
    ],
    tech: ["Python", "Java", "C", "Machine Learning", "Algorithms"],
  },
];

export const awards = [
  {
    title: "International Major Entrance Scholarship",
    org: "UBC Okanagan",
    period: "2022–2026",
    description: "Prestigious merit-based award for outstanding academic achievement and extracurricular involvement.",
  },
  {
    title: "Outstanding International Student Award",
    org: "UBC Okanagan",
    period: "2022",
    description: "Merit-based entrance scholarship recognizing academic excellence and extracurricular involvement.",
  },
  {
    title: "AI for Social Good Hackathon",
    org: "UBC Okanagan",
    period: "Sep 2024",
    description: "Developed a wildfire indicator app leveraging AI to support public safety in a fast-paced hackathon environment.",
  },
];
